import type { Page } from "@playwright/test";
import { ROUTES, expect, expectNoHorizontalOverflow, test } from "./helpers";

/** The breakpoints the design actually switches at, plus typical devices. */
const WIDTHS = [360, 375, 576, 768, 820, 1024, 1280, 1440, 1920, 2560];

const PAGES = [
  ...ROUTES,
  "/projects/van-raak-l-ravels",
  "/projects/schooltje-van-de-hei-mol",
] as const;

async function settle(page: Page) {
  await page.evaluate(
    () =>
      new Promise<void>((resolve) => {
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }),
  );
}

test.describe("responsive layout", () => {
  for (const route of PAGES) {
    test(`${route} fits every breakpoint without horizontal overflow`, async ({
      page,
    }) => {
      await page.goto(route);

      for (const width of WIDTHS) {
        await page.setViewportSize({ width, height: 900 });
        await settle(page);

        await expectNoHorizontalOverflow(page);

        // The page always renders exactly one visible h1.
        await expect(page.locator("h1")).toBeVisible({ timeout: 5000 });

        const cssVar = await page.evaluate(() =>
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        );
        expect(cssVar.trim(), `${route} @ ${width}px`).not.toBe("");
      }
    });
  }

  test("swaps the primary nav for the overlay menu below 1024px", async ({
    page,
  }) => {
    await page.goto("/");

    await page.setViewportSize({ width: 1440, height: 900 });
    await settle(page);
    await expect(page.locator("nav[aria-label='Main']")).toBeVisible();
    await expect(page.getByRole("button", { name: "Menu" })).toHaveCount(1);

    await page.setViewportSize({ width: 820, height: 900 });
    await settle(page);
    await expect(page.locator("nav[aria-label='Main']")).toBeHidden();
    await expect(page.getByRole("button", { name: "Menu" })).toBeVisible();
  });

  test("keeps the hero photograph inside the viewport on a phone", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    const media = page.locator(".home-intro-block__media");
    await expect(media).toBeVisible();

    const box = await media.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.width).toBeLessThanOrEqual(375 + 1);
  });

  test("does not overflow when the overlay menu is open on a phone", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto("/");

    await page.getByRole("button", { name: "Menu" }).click();
    await expect(page.locator("#site-menu")).toBeVisible();
    await settle(page);

    await expectNoHorizontalOverflow(page);
  });
});
