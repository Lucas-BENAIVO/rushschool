"use client";

import { usePathname } from "next/navigation";
import { MobileMenu } from "@/components/header/MobileMenu";

export function MobileMenuWrapper() {
  const pathname = usePathname();
  return <MobileMenu key={pathname} />;
}
