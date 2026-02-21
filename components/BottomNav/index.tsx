"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { bottomNavItems } from "@/data/dummy";
import type { BottomNavItem as BottomNavItemType } from "@/data/dummy";
import styles from "./BottomNav.module.scss";

const navPaths: Record<string, string> = {
  home: "/",
  search: "/",
  measure: "/measurement",
  profile: "/profile",
  cart: "/cart",
};

function NavIcon({ icon }: { icon: BottomNavItemType["icon"] }) {
  const common = { width: 24, height: 24, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "home":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon} {...common}>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon} {...common}>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      );
    case "measure":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon} {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 16l4-8 4 4 4-6" />
        </svg>
      );
    case "profile":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon} {...common}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={styles.icon} {...common}>
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
      );
    default:
      return null;
  }
}

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      {bottomNavItems.map((item) => {
        const href = navPaths[item.id] ?? "/";
        const isActive = pathname === href;
        return (
          <Link
            key={item.id}
            href={href}
            className={`${styles.item} ${isActive ? styles.active : ""}`}
            aria-current={isActive ? "page" : undefined}
          >
            <NavIcon icon={item.icon} />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
