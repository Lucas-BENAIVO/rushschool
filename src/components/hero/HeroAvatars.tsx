import { HERO_AVATARS } from "@/lib/hero-data";

export function HeroAvatars() {
  return (
    <ul className="flex items-center" aria-label="Élèves formées">
      {HERO_AVATARS.map((avatar, index) => (
        <li
          key={avatar.id}
          className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[10px] font-semibold text-white"
          style={{
            backgroundColor: avatar.color,
            marginLeft: index === 0 ? 0 : "-10px",
            zIndex: HERO_AVATARS.length - index,
          }}
        >
          {avatar.initials}
        </li>
      ))}
    </ul>
  );
}
