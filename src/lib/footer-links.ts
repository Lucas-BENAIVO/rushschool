import { ROUTES, boutiquePath, formationPath } from "@/lib/routes";

export type FooterLinkItem = {
  label: string;
  href: string;
};

export const FOOTER_FORMATIONS_LINKS: FooterLinkItem[] = [
  { label: "Prothésiste Ongulaire", href: formationPath("prothesiste-ongulaire") },
  { label: "Cil à Cil", href: formationPath("cils-a-cil") },
  { label: "Volume Russe", href: formationPath("volume-russe") },
  { label: "Nail Art", href: formationPath("nail-art") },
  { label: "Toutes les formations", href: ROUTES.formations },
];

export const FOOTER_INFORMATIONS_LINKS: FooterLinkItem[] = [
  { label: "À propos", href: ROUTES.aPropos },
  { label: "Financement", href: ROUTES.financement },
  { label: "Conditions générales", href: ROUTES.conditionsGenerales },
  { label: "FAQ", href: ROUTES.faq },
  { label: "Contact", href: ROUTES.contact },
];

export const FOOTER_BOUTIQUE_LINKS: FooterLinkItem[] = [
  { label: "Kits Ongles", href: boutiquePath("kits-ongles") },
  { label: "Kits Cils", href: boutiquePath("kits-cils") },
  { label: "Matériel", href: boutiquePath("materiel") },
  { label: "Soldes & Accessoires", href: boutiquePath("soins-accessoires") },
];

export const FOOTER_SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/kbeauty.academy",
  },
  { label: "TikTok", href: "https://www.tiktok.com/@kbeauty.academy" },
  { label: "YouTube", href: "https://www.youtube.com/@kbeautyacademy" },
  { label: "Facebook", href: "https://www.facebook.com/kbeautyacademy" },
] as const;
