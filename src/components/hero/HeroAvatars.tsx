import Image from "next/image";
import profilImage from "@/assets/profil.jpeg";

const AVATAR_COUNT = 4;

export function HeroAvatars() {
  return (
    <ul className="flex items-center" aria-label="Élèves formées">
      {Array.from({ length: AVATAR_COUNT }).map((_, index) => (
        <li
          key={index}
          className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white bg-[var(--kba-primary)]/20"
          style={{
            marginLeft: index === 0 ? 0 : "-10px",
            zIndex: AVATAR_COUNT - index,
          }}
        >
          <Image
            src={profilImage}
            alt={index === 0 ? "Élève formée K Beauty Academy" : ""}
            fill
            className="object-cover object-center"
            sizes="36px"
          />
        </li>
      ))}
    </ul>
  );
}
