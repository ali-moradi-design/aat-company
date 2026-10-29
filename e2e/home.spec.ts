import { collectPageErrors, expect, expectSingleChrome, test } from "./helpers";

test.describe("home page", () => {
  test("renders the intro heading exactly once and without duplicates", async ({
    page,
  }) => {
    const errors = collectPageErrors(page);
    await page.goto("/");

    await expectSingleChrome(page);

    const heading = page.locator("h1");
    await expect(heading).toContainText("We design buildings");
    await expect(heading).toContainText("from the space within.");

    expect(errors).toEqual([]);
  });

  test("shows the reference hero photograph with no 3D canvas", async ({
    page,
  }) => {
    const errors = collectPageErrors(page);
    await page.goto("/");

    const media = page.locator(".home-intro-block__media");
    await expect(media).toBeVisible();

    const hero = media.locator("img");
    await expect(hero).toHaveAttribute("src", /home-hero/);
    await expect(hero).toBeVisible();

    // The reference home page is photographic — there is no WebGL scene.
    await expect(page.locator("canvas")).toHaveCount(0);

    expect(errors).toEqual([]);
  });

  test("shows four featured projects in reference order", async ({ page }) => {
    await page.goto("/");

    const cards = page.locator(".project-card");
    await expect(cards).toHaveCount(4);

    await expect(cards.nth(0)).toHaveAttribute(
      "href",
      "/projects/van-raak-l-ravels",
    );
    await expect(cards.nth(1)).toHaveAttribute(
      "href",
      "/projects/schooltje-van-de-hei-mol",
    );
    await expect(cards.nth(2)).toHaveAttribute(
      "href",
      "/projects/woning-c-mol",
    );
    await expect(cards.nth(3)).toHaveAttribute(
      "href",
      "/projects/jakob-smits-museum-mol",
    );
  });

  test("links through to the projects overview", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "All projects" }).first().click();

    await expect(page).toHaveURL(/\/projects$/);
  });
});
