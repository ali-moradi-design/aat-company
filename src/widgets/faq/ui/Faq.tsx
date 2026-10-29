"use client";

import { Fragment, useState } from "react";
import { faqCategories } from "@/entities/faq/model/faqs";
import { cn } from "@/shared/lib/cn";

/** One accordion row: a plus that rotates into a cross while the panel opens. */
function FaqItem({
  id,
  question,
  answer,
}: {
  id: string;
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("faq-item__accordion", open && "is-opened")}>
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          onClick={() => setOpen((value) => !value)}
          className="faq-item__trigger focus-ring"
        >
          <span className="faq-item__heading">{question}</span>
          <span className="faq-item__icon" aria-hidden="true">
            <span className="faq-item__icon-line faq-item__icon-line--horizontal" />
            <span className="faq-item__icon-line faq-item__icon-line--vertical" />
          </span>
        </button>
      </h3>

      <div id={`${id}-panel`} className="faq-item__content">
        <div className="faq-item__content-inner">
          <p className="faq-item__text m-0">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section className="row faq-items mb-g">
      {faqCategories.map((category) => (
        <Fragment key={category.label}>
          <h2 className="faq-items__category m-0">{category.label}</h2>

          <div className="faq-items__list">
            {category.items.map((item, index) => (
              <FaqItem
                key={item.question}
                id={`faq-${category.label.toLowerCase().replace(/\W+/g, "-")}-${index}`}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </section>
  );
}
