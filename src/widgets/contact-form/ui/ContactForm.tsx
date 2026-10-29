"use client";

import { useRef, useState } from "react";
import { ArrowIcon } from "@/shared/ui/icons";

const TEXT =
  "Nothing beats a real conversation, but you can already give us some more context about your project here.";

/**
 * Contact form. There is no backend in this recreation, so a valid submission
 * is acknowledged in place; native constraint validation still guards the
 * required fields.
 */
export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);

  return (
    <section className="row block-form mb-g">
      <div className="block-form__grid-item--heading">
        <h2 className="block-form__heading m-0">Form</h2>
      </div>

      <div className="block-form__grid-item--content">
        <p className="block-form__text">{TEXT}</p>

        <form
          ref={formRef}
          onSubmit={(event) => {
            event.preventDefault();
            formRef.current?.reset();
            setSent(true);
          }}
        >
          <div className="form-row mb-10">
            <div className="form-field">
              <label className="form-label" htmlFor="contact-first-name">
                First name
                <span aria-hidden="true"> *</span>
              </label>
              <input
                id="contact-first-name"
                name="firstName"
                type="text"
                required
                autoComplete="given-name"
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-last-name">
                Last name
                <span aria-hidden="true"> *</span>
              </label>
              <input
                id="contact-last-name"
                name="lastName"
                type="text"
                required
                autoComplete="family-name"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-row mb-10">
            <div className="form-field">
              <label className="form-label" htmlFor="contact-email">
                Email address
                <span aria-hidden="true"> *</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="contact-phone">
                Phone number (optional)
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className="form-input"
              />
            </div>
          </div>

          <div className="form-row mb-10">
            <div className="form-field">
              <label className="form-label" htmlFor="contact-message">
                Tell us about your project (brief, timing, budget)
                <span aria-hidden="true"> *</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                className="form-input"
              />
            </div>
          </div>

          <button
            type="submit"
            className="form-submit link link--underline focus-ring min-w-[230px] justify-between gap-4 text-16 leading-21"
          >
            <span>Send</span>
            <ArrowIcon className="h-[11px] w-[13px] shrink-0" />
          </button>

          <p
            role="status"
            aria-live="polite"
            className="mt-8 text-16 leading-21 text-black-500"
          >
            {sent
              ? "Thank you. We will get back to you as soon as possible."
              : ""}
          </p>
        </form>

        <p className="block-form__privacy-statement-text">
          In our{" "}
          <a href="/privacy-policy" className="focus-ring">
            privacy statement
          </a>{" "}
          we explain which data we collect when you visit our website and what
          we use it for. This site is protected by reCAPTCHA, to which the{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring"
          >
            Google Privacy Policy
          </a>{" "}
          and{" "}
          <a
            href="https://policies.google.com/terms"
            target="_blank"
            rel="noreferrer noopener"
            className="focus-ring"
          >
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </section>
  );
}
