export function FooterNewsletter() {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-footer-muted)]">
        Rejoins notre communauté
      </h3>
      <p className="mb-4 text-[13px] leading-relaxed text-white/75">
        Conseils, nouveautés, offres exclusives…
      </p>
      <form
        className="flex max-w-sm flex-col gap-2 sm:flex-row sm:items-stretch"
        action="#"
        method="post"
        aria-label="Inscription newsletter"
      >
        <label htmlFor="footer-email" className="sr-only">
          Adresse e-mail
        </label>
        <input
          id="footer-email"
          name="email"
          type="email"
          required
          placeholder="Ton email"
          autoComplete="email"
          className="h-10 min-w-0 flex-1 rounded-md border border-[var(--kba-footer-border)] bg-transparent px-3 text-[14px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-[var(--kba-primary)]"
        />
        <button
          type="submit"
          className="inline-flex h-10 shrink-0 items-center justify-center rounded-md bg-[var(--kba-primary)] px-5 text-[13px] font-semibold tracking-wide text-white transition-colors hover:bg-[var(--kba-primary-hover)]"
        >
          Rejoindre
        </button>
      </form>
    </div>
  );
}
