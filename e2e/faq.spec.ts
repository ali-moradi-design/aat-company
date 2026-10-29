import { collectPageErrors, expect, expectSingleChrome, test } from "./helpers";

const FIRST_QUESTION = "How does a collaboration with AAT|Architecten work?";

test.describe("faq", () => {
  test("groups the questions into three categories", async ({ page }) => {
    const errors = collectPageErrors(page);
    await page.goto("/faq");

    await expectSingleChrome(page);

    const categories = page.locator(".faq-items__category");
    await expect(categories).toHaveCount(3);
    await expect(categories).toHaveText([
      "How we work",
      "Permits",
      "Project types",
    ]);

    await expect(page.locator(".faq-item__accordion")).toHaveCount(11);

    expect(errors).toEqual([]);
  });

  test("opens and closes an answer", async ({ page }) => {
    await page.goto("/faq");

    const item = page.locator(".faq-item__accordion").first();
    const trigger = item.getByRole("button", { name: FIRST_QUESTION });
    const panel = item.locator(".faq-item__content");
    const answer = item.locator(".faq-item__text");

    // The panel is clipped to zero height while closed, so measure the box
    // rather than relying on visibility (clipped text still has a box).
    const panelHeight = async () => (await panel.boundingBox())?.height ?? 0;

    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.poll(panelHeight).toBeLessThan(1);

    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await expect.poll(panelHeight).toBeGreaterThan(20);
    await expect(answer).toContainText("from sketch design through to");

    await trigger.click();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await expect.poll(panelHeight).toBeLessThan(1);
  });

  test("keeps several answers open at once", async ({ page }) => {
    await page.goto("/faq");

    const items = page.locator(".faq-item__accordion");
    const first = items.nth(0).locator("button");
    const second = items.nth(1).locator("button");

    await first.click();
    await second.click();

    await expect(first).toHaveAttribute("aria-expanded", "true");
    await expect(second).toHaveAttribute("aria-expanded", "true");
    await expect(items.nth(0).locator(".faq-item__text")).toBeVisible();
    await expect(items.nth(1).locator(".faq-item__text")).toBeVisible();
  });

  test("ends with a contact call to action", async ({ page }) => {
    await page.goto("/faq");

    await expect(
      page.getByRole("link", { name: "Contact us" }).last(),
    ).toHaveAttribute("href", "/contact");
  });
});
