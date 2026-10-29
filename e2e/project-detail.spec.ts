import {
  PROJECT_SLUGS,
  collectPageErrors,
  expect,
  expectSingleChrome,
  test,
} from "./helpers";

test.describe("project detail", () => {
  test("every project page is prerendered and reachable", async ({ page }) => {
    for (const slug of PROJECT_SLUGS) {
      const response = await page.goto(`/projects/${slug}`);
      expect(response?.status(), `/projects/${slug}`).toBe(200);
    }
  });

  test("shows hero, back link, location, category and description", async ({
    page,
  }) => {
    const errors = collectPageErrors(page);
    await page.goto("/projects/van-raak-l-ravels");

    await expectSingleChrome(page);

    await expect(page.locator("h1")).toHaveText("Van Raak L.");

    const backLink = page.getByRole("link", { name: "Back" });
    await expect(backLink).toHaveAttribute("href", "/projects");

    const location = page.locator(".project-intro-block__location");
    await expect(location).toContainText("Ravels, Antwerp");
    await expect(location).toContainText("Commercial");

    await expect(page.locator(".project-intro-block__text")).toContainText(
      "seamlessly connects office and production hall",
    );

    await expect(page.locator(".project-intro-block__image")).toBeVisible();

    expect(errors).toEqual([]);
  });

  test("renders the full gallery and the photographer credit", async ({
    page,
  }) => {
    await page.goto("/projects/van-raak-l-ravels");

    const columns = page.locator(".block-media-columns");
    await expect(columns).toHaveCount(16);

    const figures = page.locator(".block-media-columns__figure img");
    await expect(figures).toHaveCount(19);
    for (const figure of await figures.all()) {
      await expect(figure).toBeVisible();
      await expect(figure).toHaveAttribute("alt", /./);
    }

    await expect(page.locator(".block-image-credit__text")).toHaveText(
      "Image: Lumine",
    );
  });

  test("opens a project from the list at the top of the page", async ({
    page,
  }) => {
    await page.goto("/projects");

    const card = page.locator(".project-card").nth(8);
    await card.scrollIntoViewIfNeeded();
    await card.click();

    await expect(page).toHaveURL(/\/projects\/.+/);
    // The list page may stay in the DOM, hidden, after the navigation: only
    // count the visible heading.
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect
      .poll(() => page.evaluate(() => window.scrollY), { timeout: 5_000 })
      .toBeLessThan(2);
  });

  test("omits the credit when the project has none", async ({ page }) => {
    await page.goto("/projects/woning-c-mol");

    await expect(page.locator("h1")).toHaveText("House C");
    await expect(page.locator(".block-image-credit")).toHaveCount(0);
  });

  test("offers a sticky contact shortcut and related projects", async ({
    page,
  }) => {
    await page.goto("/projects/tumag-turnhout");

    await expect(
      page.locator(".project-sticky-contact").getByRole("link", {
        name: "Contact",
      }),
    ).toHaveAttribute("href", "/contact");

    await expect(
      page.getByRole("heading", { name: "More inspiration" }),
    ).toBeVisible();

    const related = page.locator(".project-card");
    await expect(related).toHaveCount(2);
    for (const card of await related.all()) {
      await expect(card).toHaveAttribute("href", /^\/projects\//);
    }
  });

  test("returns to the overview from the back link", async ({ page }) => {
    await page.goto("/projects/bko-rauw-mol");

    await page.getByRole("link", { name: "Back" }).click();
    await expect(page).toHaveURL(/\/projects$/);
  });
});
