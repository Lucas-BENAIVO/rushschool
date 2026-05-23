"use client";

import { useState } from "react";
import {
  ContactField,
  contactInputClassName,
  contactTextareaClassName,
} from "@/components/contact/ContactField";
import {
  RESERVER_APPEL_AVAILABILITY,
  RESERVER_APPEL_FORM_COPY,
  RESERVER_APPEL_FORMATION_OPTIONS,
} from "@/lib/reserver-appel-data";

export function ReserverAppelBookingForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-[var(--kba-primary)]/20 bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:p-8"
        role="status"
      >
        <h2 className="font-serif text-2xl font-medium text-[var(--kba-charcoal)]">
          {RESERVER_APPEL_FORM_COPY.successTitle}
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[var(--kba-muted)]">
          {RESERVER_APPEL_FORM_COPY.successMessage}
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-[13px] font-semibold text-[var(--kba-primary)] transition-colors hover:text-[var(--kba-primary-hover)]"
        >
          Modifier ma demande
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--kba-charcoal)]/8 bg-white p-5 shadow-[0_4px_24px_rgba(0,0,0,0.05)] sm:p-6 lg:p-8">
      <h2 className="font-serif text-xl font-medium text-[var(--kba-charcoal)] sm:text-2xl">
        {RESERVER_APPEL_FORM_COPY.title}
      </h2>
      <p className="mt-2 text-[14px] leading-relaxed text-[var(--kba-muted)]">
        {RESERVER_APPEL_FORM_COPY.description}
      </p>

      <form
        className="mt-6 flex flex-col gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactField id="booking-name" label={RESERVER_APPEL_FORM_COPY.nameLabel}>
            <input
              id="booking-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder={RESERVER_APPEL_FORM_COPY.namePlaceholder}
              className={contactInputClassName()}
            />
          </ContactField>

          <ContactField id="booking-email" label={RESERVER_APPEL_FORM_COPY.emailLabel}>
            <input
              id="booking-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder={RESERVER_APPEL_FORM_COPY.emailPlaceholder}
              className={contactInputClassName()}
            />
          </ContactField>
        </div>

        <ContactField id="booking-phone" label={RESERVER_APPEL_FORM_COPY.phoneLabel}>
          <input
            id="booking-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={RESERVER_APPEL_FORM_COPY.phonePlaceholder}
            className={contactInputClassName()}
          />
        </ContactField>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactField
            id="booking-formation"
            label={RESERVER_APPEL_FORM_COPY.formationLabel}
          >
            <select
              id="booking-formation"
              name="formation"
              required
              defaultValue=""
              className={contactInputClassName()}
            >
              <option value="" disabled>
                Choisir une formation
              </option>
              {RESERVER_APPEL_FORMATION_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </ContactField>

          <ContactField
            id="booking-availability"
            label={RESERVER_APPEL_FORM_COPY.availabilityLabel}
          >
            <select
              id="booking-availability"
              name="availability"
              required
              defaultValue=""
              className={contactInputClassName()}
            >
              <option value="" disabled>
                Vos créneaux préférés
              </option>
              {RESERVER_APPEL_AVAILABILITY.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </ContactField>
        </div>

        <ContactField id="booking-message" label={RESERVER_APPEL_FORM_COPY.messageLabel}>
          <textarea
            id="booking-message"
            name="message"
            rows={4}
            placeholder={RESERVER_APPEL_FORM_COPY.messagePlaceholder}
            className={contactTextareaClassName()}
          />
        </ContactField>

        <button
          type="submit"
          className="mt-2 inline-flex h-11 items-center justify-center rounded-lg bg-[var(--kba-primary)] px-6 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--kba-primary-hover)]"
        >
          {RESERVER_APPEL_FORM_COPY.submitLabel}
        </button>
      </form>
    </div>
  );
}
