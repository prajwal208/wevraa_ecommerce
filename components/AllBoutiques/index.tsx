import Image from "next/image";
import Link from "next/link";
import type { Boutique } from "@/data/dummy";
import BoutiqueCard from "@/components/BoutiqueCard";
import styles from "./AllBoutiques.module.scss";

const bannerImage = "/images/placeholder-rect.svg";
const selectedCount = 5;

interface AllBoutiquesProps {
  boutiques: Boutique[];
  /** When true, hides the top banner and uses a light summary bar with maroon Next button */
  compact?: boolean;
}

export default function AllBoutiques({ boutiques, compact }: AllBoutiquesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.divider}>
        <span className={styles.dividerText}>All Boutiques</span>
      </div>
      {!compact && (
        <div className={styles.bannerWrap}>
          <Image src={bannerImage} alt="" fill className={styles.bannerImage} sizes="100vw" />
          <span className={styles.checkBadge} aria-hidden>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </div>
      )}
      <div className={compact ? styles.barCompact : styles.bar}>
        <span className={styles.barText}>{selectedCount} Boutiques Selected</span>
        <Link href="/order-quote" className={styles.nextBtn}>
          Next
        </Link>
      </div>
      <div className={styles.list}>
        {boutiques.map((b) => (
          <BoutiqueCard key={b.id} boutique={b} />
        ))}
      </div>
    </section>
  );
}
