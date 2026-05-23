export function FooterNewsletter() {
  return (
    <div className="w-full xl:ml-auto xl:max-w-[20rem]">
      <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--kba-footer-muted)]">
        Rejoins notre communauté
      </h3>
      <p className="mb-4 text-[13px] leading-relaxed text-white/75">
        Conseils, nouveautés, offres exclusives…
      </p>
      <form
        className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2"
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
          suppressHydrationWarning
          className="box-border h-12 min-h-12 w-full min-w-0 flex-1 rounded-md border border-[var(--kba-footer-border)] bg-transparent px-4 py-3 text-base text-white placeholder:text-white/40 outline-none transition-colors focus:border-[var(--kba-primary)] sm:h-10 sm:min-h-10 sm:px-3 sm:py-2 sm:text-[14px]"
        />
        <button
          type="submit"
          className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-md bg-[var(--kba-primary)] px-5 text-[15px] font-semibold tracking-wide text-white transition-colors hover:bg-[var(--kba-primary-hover)] sm:h-10 sm:w-auto sm:text-[13px]"
        >
          Rejoindre
        </button>
      </form>
    </div>
  );
}
