import {
  ROUTES,
  collectPageErrors,
  expect,
  expectSingleChrome,
  test,
} from "./helpers";

test.describe("routing", () => {
  for (const route of ROUTES) {
    test(`${route} responds and renders single chrome`, async ({ page }) => {
      const errors = collectPageErrors(page);

      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      await expectSingleChrome(page);
      await expect(page.locator("h1")).toBeVisible();

      expect(errors).toEqual([]);
    });
  }

  test("applies the title template", async ({ page }) => {
    await page.goto("/about");
    await expect(page).toHaveTitle("About | AAT|Architecten");

    await page.goto("/projects");
    await expect(page).toHaveTitle("Projects | AAT|Architecten");
  });

  test("renders the custom not-found page with full chrome", async ({
    page,
  }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);

    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Page not found",
    );
    await expectSingleChrome(page);
  });
});

test.describe("header", () => {
  test("marks the current page in the primary nav", async ({ page }) => {
    await page.goto("/about");

    await expect(
      page.locator("nav[aria-label='Main'] a[aria-current='page']"),
    ).toHaveText(/About/);
  });

  test("opens the overlay menu and closes it on navigation", async ({
    page,
  }) => {
    const errors = collectPageErrors(page);
    await page.goto("/");

    const menu = page.locator("#site-menu");
    // The button label flips to "Close", so it is addressed by its target.
    const toggle = page.locator("button[aria-controls='site-menu']");

    await expect(menu).toBeHidden();

    await toggle.click();
    await expect(menu).toBeVisible();
    await expect(toggle).toHaveText("Close");
    await expect(page.locator("html")).toHaveClass(/has-menu-open/);

    await menu.getByRole("link", { name: "About" }).click();

    await expect(page).toHaveURL(/\/about$/);
    await expect(menu).toBeHidden();
    await expect(page.locator("html")).not.toHaveClass(/has-menu-open/);

    expect(errors).toEqual([]);
  });

  test("closes the overlay menu with Escape", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("button", { name: "Menu" }).click();
    await expect(page.locator("#site-menu")).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(page.locator("#site-menu")).toBeHidden();
  });

  test("returns to the home page from the logo", async ({ page }) => {
    await page.goto("/contact");

    await page
      .locator("header")
      .getByRole("link", { name: "Go to the home page" })
      .click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("footer", () => {
  test("reaches the legal pages from the secondary nav", async ({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");

    await footer.getByRole("link", { name: "Privacy policy" }).click();
    await expect(page).toHaveURL(/\/privacy-policy$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Privacy policy",
    );

    await page.locator("footer").getByRole("link", { name: "Cookies" }).click();
    await expect(page).toHaveURL(/\/cookie-policy$/);
  });

  test("exposes the demo address and contact details", async ({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");
    await expect(footer).toContainText("Voorbeeldstraat 12");
    await expect(footer).toContainText("2000 Antwerpen");
    await expect(
      footer.getByRole("link", { name: "hello@example.com" }),
    ).toHaveAttribute("href", "mailto:hello@example.com");

    // The design-credit link was removed from the demo footer.
    await expect(footer.getByRole("link", { name: /unhide/i })).toHaveCount(0);
  });
});
