import { collectPageErrors, expect, expectSingleChrome, test } from "./helpers";

test.describe("contact", () => {
  test("shows the intro, address, details and social links", async ({
    page,
  }) => {
    const errors = collectPageErrors(page);
    await page.goto("/contact");

    await expectSingleChrome(page);

    await expect(page.locator("h1")).toContainText("Contact us");
    await expect(page.locator("h1")).toContainText("for a conversation.");

    const intro = page.locator(".contact-intro-block");

    await expect(intro.getByText("Voorbeeldstraat 12")).toBeVisible();
    await expect(
      intro.getByRole("link", { name: "hello@example.com" }),
    ).toHaveAttribute("href", "mailto:hello@example.com");
    await expect(
      intro.getByRole("link", { name: "+32 3 456 78 90" }),
    ).toHaveAttribute("href", "tel:+3234567890");

    // Demo build: the social labels are present but intentionally unlinked.
    await expect(intro.getByText("LinkedIn")).toBeVisible();
    await expect(intro.getByRole("link", { name: "LinkedIn" })).toHaveCount(0);

    expect(errors).toEqual([]);
  });

  test("labels every field with the reference copy", async ({ page }) => {
    await page.goto("/contact");

    await expect(page.getByLabel("First name")).toHaveAttribute("required", "");
    await expect(page.getByLabel("Last name")).toHaveAttribute("required", "");
    await expect(page.getByLabel("Email address")).toHaveAttribute(
      "required",
      "",
    );
    await expect(
      page.getByLabel("Phone number (optional)"),
    ).not.toHaveAttribute("required", "");
    await expect(
      page.getByLabel("Tell us about your project (brief, timing, budget)"),
    ).toHaveAttribute("required", "");

    await expect(page.getByRole("button", { name: "Send" })).toBeVisible();
  });

  test("blocks an empty submission and focuses the first invalid field", async ({
    page,
  }) => {
    await page.goto("/contact");

    await page.getByRole("button", { name: "Send" }).click();

    await expect(page).toHaveURL(/\/contact$/);
    await expect(page.getByRole("status")).toHaveText("");
    await expect(page.locator("#contact-first-name")).toBeFocused();
  });

  test("rejects an invalid email address", async ({ page }) => {
    await page.goto("/contact");

    await page.locator("#contact-first-name").fill("Ada");
    await page.locator("#contact-last-name").fill("Lovelace");
    await page.locator("#contact-email").fill("ada@");
    await page.locator("#contact-message").fill("A small studio extension.");

    await page.getByRole("button", { name: "Send" }).click();

    await expect(page.getByRole("status")).toHaveText("");
    await expect(page.locator("#contact-email")).toBeFocused();
  });

  test("acknowledges a valid submission and clears the form", async ({
    page,
  }) => {
    const errors = collectPageErrors(page);
    await page.goto("/contact");

    await page.locator("#contact-first-name").fill("Ada");
    await page.locator("#contact-last-name").fill("Lovelace");
    await page.locator("#contact-email").fill("ada@example.com");
    await page.locator("#contact-phone").fill("+32 14 63 38 24");
    await page
      .locator("#contact-message")
      .fill("A school building for 240 pupils, permit expected next spring.");

    await page.getByRole("button", { name: "Send" }).click();

    await expect(page.getByRole("status")).toHaveText(
      "Thank you. We will get back to you as soon as possible.",
    );
    await expect(page.locator("#contact-first-name")).toHaveValue("");
    await expect(page).toHaveURL(/\/contact$/);

    expect(errors).toEqual([]);
  });

  test("links the privacy statement and the reCAPTCHA terms", async ({
    page,
  }) => {
    await page.goto("/contact");

    await expect(
      page.getByRole("link", { name: "privacy statement" }),
    ).toHaveAttribute("href", "/privacy-policy");
    await expect(
      page.getByRole("link", { name: "Google Privacy Policy" }),
    ).toHaveAttribute("href", "https://policies.google.com/privacy");
    await expect(
      page.getByRole("link", { name: "Terms of Service" }),
    ).toHaveAttribute("href", "https://policies.google.com/terms");
  });
});
