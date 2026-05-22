import { FooterLogo } from "@/components/footer/FooterLogo";
import { SocialLinks } from "@/components/footer/SocialLinks";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-5">
      <FooterLogo />
      <p className="max-w-xs text-[13px] leading-relaxed text-white/75">
        La référence des formations beauté : ongles, cils &amp; business.
      </p>
      <SocialLinks />
    </div>
  );
}
