import type { Metadata, Viewport } from "next";
import { SuisseIntl } from "./ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aat-architecten.example"),
  title: {
    default: "AAT|Architecten",
    template: "%s | AAT|Architecten",
  },
  description:
    "Architecture studio from Turnhout (Antwerp), active across a wider region. Architectural projects for public authorities, schools and businesses.",
  applicationName: "AAT|Architecten",
  openGraph: {
    type: "website",
    locale: "en",
    siteName: "AAT|Architecten",
    title: "AAT|Architecten",
    description:
      "We design buildings that work for public spaces, schools and businesses — always starting from the space within.",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={SuisseIntl.variable}
      data-scroll-behavior="smooth"
    >
      <body className={`${SuisseIntl.className} antialiased`}>{children}</body>
    </html>
  );
}
