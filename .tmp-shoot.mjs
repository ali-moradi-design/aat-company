import { chromium } from "@playwright/test";

const shots = "C:/Users/Jason/AppData/Local/Temp/opencode/shots";
const browser = await chromium.launch({ channel: "chrome" });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const errors = [];
page.on("console", (msg) => {
  if (msg.type() === "error") errors.push(msg.text());
});
page.on("pageerror", (error) => errors.push(String(error)));

async function shot(name, options = {}) {
  await page.screenshot({ path: `${shots}/${name}.png`, ...options });
}

await page.goto("http://localhost:3005/", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
await shot("home-top");

// Hover a nav link so the cursor grows.
await page.mouse.move(700, 24);
await page.waitForTimeout(600);
await shot("home-cursor", { clip: { x: 0, y: 0, width: 1440, height: 200 } });

await page.mouse.move(700, 500);
await page.evaluate(() => window.scrollTo(0, 700));
await page.waitForTimeout(1500);
await shot("home-scroll");

await page.evaluate(() =>
  window.scrollTo(0, document.body.scrollHeight),
);
await page.waitForTimeout(1200);
await shot("home-footer");

await page.goto("http://localhost:3005/projects", {
  waitUntil: "networkidle",
});
await page.waitForTimeout(800);
await shot("projects-top");

await page.locator(".project-card").nth(8).scrollIntoViewIfNeeded();
await page.waitForTimeout(900);
await page.locator(".project-card").nth(8).click();
await page.waitForLoadState("networkidle");
await page.waitForTimeout(1200);
console.log("scrollY after project click:", await page.evaluate(() => window.scrollY));
await shot("project-top");

await page.evaluate(() => window.scrollTo(0, 1600));
await page.waitForTimeout(1500);
await shot("project-gallery");

await page.goto("http://localhost:3005/contact", {
  waitUntil: "networkidle",
});
await page.waitForTimeout(1200);
await shot("contact-top");

console.log("errors:", JSON.stringify(errors, null, 2));
await browser.close();
