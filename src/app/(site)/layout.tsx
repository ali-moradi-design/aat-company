import { Footer } from "@/widgets/site-footer/ui/Footer";
import { Header } from "@/widgets/site-header/ui/Header";
import { CustomCursor } from "@/features/custom-cursor/ui/CustomCursor";
import { SmoothScroll } from "@/features/smooth-scroll/ui/SmoothScroll";

/**
 * Chrome shared by every public route. The 1fr middle row keeps the footer at
 * the bottom on short pages.
 */
export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SmoothScroll>
      <div className="site-wrapper">
        <Header />
        <main className="site-wrapper__row--main w-full" role="main">
          {children}
        </main>
        <Footer />
      </div>
      <CustomCursor />
    </SmoothScroll>
  );
}
