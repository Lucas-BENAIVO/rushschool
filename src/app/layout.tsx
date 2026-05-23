import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { CartRoot } from "@/components/cart/CartRoot";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "K Beauty Academy",
    template: "%s | K Beauty Academy",
  },
  description:
    "Formations professionnelles en prothésie ongulaire et extensions de cils.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <CartRoot>
          <Header />
          {children}
          <Footer />
        </CartRoot>
      </body>
    </html>
  );
}
