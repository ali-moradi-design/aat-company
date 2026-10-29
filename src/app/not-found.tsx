import { ArrowLink } from "@/shared/ui/ArrowLink";
import { SmoothScroll } from "@/features/smooth-scroll/ui/SmoothScroll";
import { Footer } from "@/widgets/site-footer/ui/Footer";
import { Header } from "@/widgets/site-header/ui/Header";

export default function NotFound() {
  return (
    <SmoothScroll>
      <div className="site-wrapper">
        <Header />

        <main className="site-wrapper__row--main w-full" role="main">
          <div className="row pt-20 pb-20 lg:pt-32 lg:pb-32">
            <h1 className="col-main m-0 mb-10 text-h3 lg:col-start-8 lg:col-end-22">
              Page not found
            </h1>

            <div className="col-main flex flex-col items-start gap-y-8 lg:col-start-8 lg:col-end-22">
              <p className="m-0 max-w-[640px] text-20 leading-30 text-grey-500">
                The page you are looking for does not exist or has been moved.
              </p>
              <ArrowLink href="/" spread>
                Back to home
              </ArrowLink>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </SmoothScroll>
  );
}
