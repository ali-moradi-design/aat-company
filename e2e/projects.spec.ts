import type { Page } from "@playwright/test";
import { collectPageErrors, expect, expectSingleChrome, test } from "./helpers";

const LIST = ".project-items__list";
const FILTERS = ".project-items__filters-list";

function filter(page: Page, label: string) {
  return page.locator(FILTERS).getByText(label, { exact: true });
}

test.describe("projects overview", () => {
  test("lists all sixteen projects by default", async ({ page }) => {
    const errors = collectPageErrors(page);
    await page.goto("/projects");

    await expectSingleChrome(page);

    await expect(page.locator("h1")).toHaveText(
      "An overview of projects that start from the space within.",
    );

    await expect(page.locator(`${LIST} .project-card`)).toHaveCount(16);

    // Nothing selected means "Show all".
    await expect(page.locator(".project-items__filters-item--all")).toHaveClass(
      /is-active/,
    );

    expect(errors).toEqual([]);
  });

  test("filters by a single category", async ({ page }) => {
    await page.goto("/projects");

    await filter(page, "Education").click();

    const cards = page.locator(`${LIST} .project-card`);
    await expect(cards).toHaveCount(5);

    for (const category of await page
      .locator(`${LIST} .project-card__category`)
      .allTextContents()) {
      expect(category).toBe("Education");
    }

    await expect(
      page.locator(".project-items__filters-item--all"),
    ).not.toHaveClass(/is-active/);
  });

  test("combines several categories with an OR", async ({ page }) => {
    await page.goto("/projects");

    await filter(page, "Education").click();
    await filter(page, "Public").click();

    const cards = page.locator(`${LIST} .project-card`);
    await expect(cards).toHaveCount(9);

    const categories = await page
      .locator(`${LIST} .project-card__category`)
      .allTextContents();
    const unique = [...new Set(categories)].sort();
    expect(unique).toEqual(["Education", "Public"]);
  });

  test("deselecting a category and using Show all restores the full list", async ({
    page,
  }) => {
    await page.goto("/projects");

    await filter(page, "Residential").click();
    await expect(page.locator(`${LIST} .project-card`)).toHaveCount(3);

    await filter(page, "Residential").click();
    await expect(page.locator(`${LIST} .project-card`)).toHaveCount(16);

    await filter(page, "Commercial").click();
    await expect(page.locator(`${LIST} .project-card`)).toHaveCount(4);

    await page
      .locator(".project-items__filter-text", { hasText: "Show all" })
      .click();
    await expect(page.locator(`${LIST} .project-card`)).toHaveCount(16);
    await expect(page.locator(".project-items__filters-item--all")).toHaveClass(
      /is-active/,
    );
  });

  test("opens a project from the list", async ({ page }) => {
    await page.goto("/projects");

    await page.locator(`${LIST} .project-card`).first().click();

    await expect(page).toHaveURL(/\/projects\/van-raak-l-ravels$/);
  });
});
