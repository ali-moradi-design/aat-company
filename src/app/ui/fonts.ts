import localFont from "next/font/local";

export const SuisseIntl = localFont({
  src: [
    {
      path: "../../assets/fonts/SuisseIntl-Book.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-suisse-intl",
  fallback: ["Helvetica Neue", "Arial", "sans-serif"],
});
