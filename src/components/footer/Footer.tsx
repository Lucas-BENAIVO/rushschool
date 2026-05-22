import { FooterBrand } from "@/components/footer/FooterBrand";
import { FooterColumn } from "@/components/footer/FooterColumn";
import { FooterNewsletter } from "@/components/footer/FooterNewsletter";
import {
  FOOTER_BOUTIQUE_LINKS,
  FOOTER_FORMATIONS_LINKS,
  FOOTER_INFORMATIONS_LINKS,
} from "@/lib/footer-links";

export function Footer() {
  return (
    <footer
      className="mt-auto w-full text-white"
      style={{ backgroundColor: "var(--kba-footer-bg)" }}
    >
      <div className="mx-auto max-w-[var(--kba-container-max)] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          <FooterBrand />
          <FooterColumn title="Formations" links={FOOTER_FORMATIONS_LINKS} />
          <FooterColumn title="Informations" links={FOOTER_INFORMATIONS_LINKS} />
          <FooterColumn title="Boutique" links={FOOTER_BOUTIQUE_LINKS} />
          <FooterNewsletter />
        </div>
      </div>
    </footer>
  );
}
