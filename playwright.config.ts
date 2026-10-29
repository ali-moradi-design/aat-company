import { defineConfig, devices } from "@playwright/test";

const PORT = 3005;
const baseURL = `http://localhost:${PORT}`;

/**
 * The Playwright CDN is not reachable from every network, so the suite drives a
 * locally installed browser by default. Set `PLAYWRIGHT_CHANNEL=bundled` to use
 * the browser downloaded by `pnpm exec playwright install`.
 */
const channel = process.env.PLAYWRIGHT_CHANNEL ?? "chrome";
// PW_CHROMIUM_PATH points at an already installed Chromium (sandboxes).
const executablePath = process.env.PW_CHROMIUM_PATH;
const channelOption = executablePath
  ? { launchOptions: { executablePath } }
  : channel === "bundled"
    ? {}
    : { channel: channel as "chrome" | "msedge" };

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  // The suite runs against a single `next dev` process, so keep the fan-out
  // modest — ten parallel Cold compiles starve each other.
  workers: process.env.CI ? 1 : 4,
  reporter: [["list"], ["html", { open: "never" }]],
  expect: { timeout: 10_000 },
  use: {
    baseURL,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        ...channelOption,
        viewport: { width: 1440, height: 900 },
      },
      testIgnore: /responsive\.spec\.ts/,
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 7"], ...channelOption },
      testMatch: /responsive\.spec\.ts/,
    },
  ],
  // E2E_SERVER=prod runs the built standalone server (`pnpm build` first), as CI does.
  webServer: {
    command:
      process.env.E2E_SERVER === "prod"
        ? "node scripts/serve.mjs 3005"
        : "pnpm dev",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    stdout: "pipe",
  },
});
