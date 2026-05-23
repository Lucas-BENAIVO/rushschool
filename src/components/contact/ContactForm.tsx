"use client";

import { useState } from "react";
import {
  ContactField,
  contactInputClassName,
  contactTextareaClassName,
} from "@/components/contact/ContactField";
import {
  CONTACT_FORM_COPY,
  CONTACT_SUBJECTS,
} from "@/lib/contact-data";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-[var(--kba-primary)]/20 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:p-8"
        role="status"
      >
        <h2 className="font-serif text-2xl font-medium text-[var(--kba-charcoal)]">
          {CONTACT_FORM_COPY.successTitle}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--kba-muted)]">
          {CONTACT_FORM_COPY.successMessage}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[13px] font-semibold text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--kba-charcoal)]/8 bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:p-6 lg:p-8">
      <h2 className="font-serif text-xl font-medium text-[var(--kba-charcoal)] sm:text-2xl">
        {CONTACT_FORM_COPY.title}
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-[var(--kba-muted)]">
        {CONTACT_FORM_COPY.description}
      </p>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactField id="contact-name" label={CONTACT_FORM_COPY.nameLabel}>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={CONTACT_FORM_COPY.namePlaceholder}
              className={contactInputClassName()}
            />
          </ContactField>

          <ContactField id="contact-email" label={CONTACT_FORM_COPY.emailLabel}>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={CONTACT_FORM_COPY.emailPlaceholder}
              className={contactInputClassName()}
            />
          </ContactField>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactField id="contact-phone" label={CONTACT_FORM_COPY.phoneLabel}>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder={CONTACT_FORM_COPY.phonePlaceholder}
              className={contactInputClassName()}
            />
          </ContactField>

          <ContactField id="contact-subject" label={CONTACT_FORM_COPY.subjectLabel}>
            <select
              id="contact-subject"
              name="subject"
              required
              defaultValue=""
              className={contactInputClassName()}
            >
              <option value="" disabled>
                Choisir un sujet
              </option>
              {CONTACT_SUBJECTS.map((subject) => (
                <option key={subject.value} value={subject.value}>
                  {subject.label}
                </option>
              ))}
            </select>
          </ContactField>
        </div>

        <ContactField id="contact-message" label={CONTACT_FORM_COPY.messageLabel}>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            placeholder={CONTACT_FORM_COPY.messagePlaceholder}
            className={contactTextareaClassName()}
          />
        </ContactField>

        <button
          type="submit"
          className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-[var(--kba-primary)] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--kba-primary-hover)]"
        >
          {CONTACT_FORM_COPY.submitLabel}
        </button>
      </form>
    </div>
  );
}
