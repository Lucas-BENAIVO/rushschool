import { FooterLogo } from "@/components/footer/FooterLogo";
import { SocialLinks } from "@/components/footer/SocialLinks";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-5">
      <FooterLogo />
      <p className="max-w-[15.5rem] text-[13px] leading-relaxed text-white/75 sm:max-w-sm xl:max-w-none">
        La référence des formations beauté : ongles, cils &amp; business.
      </p>
      <SocialLinks />
    </div>
  );
}
