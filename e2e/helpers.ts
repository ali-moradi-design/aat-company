import { expect, test as base, type Page } from "@playwright/test";

/** Every public route in the site. */
export const ROUTES = [
  "/",
  "/projects",
  "/about",
  "/contact",
  "/faq",
  "/privacy-policy",
  "/cookie-policy",
] as const;

export const PROJECT_SLUGS = [
  "van-raak-l-ravels",
  "schooltje-van-de-hei-mol",
  "woning-c-mol",
  "jakob-smits-museum-mol",
  "woning-s-ravels",
  "bko-rauw-mol",
  "tumag-turnhout",
  "bko-sluis-mol",
  "de-dobbelsteen-antwerpen",
  "kmo-park-de-zillen-mol",
  "meneer-miel-mol",
  "heilig-graf-internaat-turnhout",
  "heilig-graf-apostoliekenstraat-turnhout",
  "sint-annacollege-middenschool-antwerpen",
  "b-b-met-woonst-balen-2",
  "wouters-cutting-welding-turnhout",
] as const;

/** Collects console errors and uncaught exceptions so a page can assert none. */
export function collectPageErrors(page: Page) {
  const errors: string[] = [];

  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const text = message.text();
    // The dev server keeps a refresh channel open; ignore its own bootstrap noise.
    if (text.includes("[Fast Refresh]") || text.includes("[HMR]")) return;
    errors.push(`console: ${text}`);
  });

  return errors;
}

/**
 * Waits until the client bundle has hydrated. `useHeaderHeight` publishes the
 * header height on `<html>` from an effect, so a non-empty value means React is
 * interactive — clicks dispatched before that point are simply lost.
 */
export async function waitForHydration(page: Page) {
  await page.waitForFunction(
    () =>
      getComputedStyle(document.documentElement)
        .getPropertyValue("--header-height")
        .trim() !== "",
    undefined,
    { timeout: 30_000 },
  );
}

/**
 * `test` whose pages wait for hydration after every navigation, so interaction
 * tests never race the client bundle.
 */
export const test = base.extend<{ page: Page }>({
  page: async ({ page }, provide) => {
    const goto = page.goto.bind(page);

    page.goto = (async (url: string, options?: Parameters<Page["goto"]>[1]) => {
      const response = await goto(url, options);
      await waitForHydration(page);
      return response;
    }) as Page["goto"];

    await provide(page);
  },
});

export { expect };

/** The chrome must render exactly once — never duplicated by a nested layout. */
export async function expectSingleChrome(page: Page) {
  await expect(page.locator("header")).toHaveCount(1);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("footer")).toHaveCount(1);
  await expect(page.locator("#site-menu")).toHaveCount(1);
  await expect(page.locator("nav[aria-label='Main']")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveCount(1);
}

/** No element may push the document wider than the viewport. */
export async function expectNoHorizontalOverflow(page: Page) {
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));

  expect(
    scrollWidth,
    `document is ${scrollWidth}px wide in a ${clientWidth}px viewport`,
  ).toBeLessThanOrEqual(clientWidth + 1);
}
