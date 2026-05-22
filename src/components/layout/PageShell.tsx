type PageShellProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <main className="flex-1 bg-[#faf6f4]">
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 py-14 sm:px-8 sm:py-20">
        <header className="max-w-2xl">
          <h1 className="font-serif text-3xl font-medium tracking-tight text-[var(--kba-charcoal)] sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-[var(--kba-muted)]">
              {description}
            </p>
          )}
        </header>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </main>
  );
}
