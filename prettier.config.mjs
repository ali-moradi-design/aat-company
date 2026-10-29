/**
 * Prettier configuration.
 *
 * `prettier-plugin-tailwindcss` sorts utility classes in the project's own
 * order, which it reads from the Tailwind entry stylesheet.
 *
 * @type {import("prettier").Config}
 */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 80,
  tabWidth: 2,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: "./src/app/globals.css",
  tailwindFunctions: ["cn", "clsx", "cva"],
};

export default config;
