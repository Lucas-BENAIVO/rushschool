import { BreadcrumbBar } from "@/components/layout/BreadcrumbBar";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";
import { pageBreadcrumbs } from "@/lib/breadcrumbs";

type PageShellProps = {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  children?: React.ReactNode;
};

export function PageShell({
  title,
  description,
  breadcrumbs,
  children,
}: PageShellProps) {
  const items = breadcrumbs ?? pageBreadcrumbs(title);

  return (
    <main
      className="flex-1"
      style={{ backgroundColor: "var(--kba-hero-bg)" }}
    >
      <BreadcrumbBar items={items} tone="hero" />
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 pb-10 pt-4 sm:px-8 sm:pb-14 sm:pt-5">
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
