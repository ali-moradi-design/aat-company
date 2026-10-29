/**
 * `page--legal-page` — heading left, running text in the right-hand columns.
 */
export function LegalPage({
  heading,
  updated,
  children,
}: {
  heading: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="row mb-g pt-10 lg:pt-20">
      <h1 className="page__heading m-0 mb-10 text-h3 lg:col-start-8 lg:col-end-22 lg:mb-0">
        {heading}
      </h1>

      <div className="col-main flex flex-col lg:col-start-8 lg:col-end-22">
        <p className="m-0 mb-10 text-16 leading-21 lg:mb-16">{updated}</p>
        <div className="flex flex-col gap-y-6 text-20 leading-30 text-grey-500 lg:text-24">
          {children}
        </div>
      </div>
    </div>
  );
}
