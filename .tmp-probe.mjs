import { chromium } from "@playwright/test";

const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto("http://localhost:3005/", { waitUntil: "networkidle" });
await page.waitForTimeout(800);

const info = await page.evaluate(() => {
  const read = (selector) => {
    const node = document.querySelector(selector);
    if (!node) return null;
    const rect = node.getBoundingClientRect();
    const style = getComputedStyle(node);
    return {
      rect: {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        w: Math.round(rect.width),
        h: Math.round(rect.height),
        bottom: Math.round(rect.bottom),
      },
      height: style.height,
      minHeight: style.minHeight,
      display: style.display,
      justifyContent: style.justifyContent,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      alignSelf: style.alignSelf,
      marginBottom: style.marginBottom,
    };
  };
  return {
    section: read(".home-intro-block"),
    content: read(".home-intro-block__content"),
    heading: read(".home-intro-block__heading"),
    media: read(".home-intro-block__media"),
    lines: document.querySelectorAll(".split-heading__line").length,
    headerHeight: getComputedStyle(document.documentElement).getPropertyValue(
      "--header-height",
    ),
  };
});

console.log(JSON.stringify(info, null, 2));
await browser.close();
