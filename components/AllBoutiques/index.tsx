import Image from "next/image";
import type { Boutique } from "@/data/dummy";
import BoutiqueCard from "@/components/BoutiqueCard";
import styles from "./AllBoutiques.module.scss";

const bannerImage = "/images/placeholder-rect.svg";
const selectedCount = 5;

interface AllBoutiquesProps {
  boutiques: Boutique[];
}

export default function AllBoutiques({ boutiques }: AllBoutiquesProps) {
  return (
    <section className={styles.section}>
      <div className={styles.divider}>
        <span className={styles.dividerText}>All Boutiques</span>
      </div>
      <div className={styles.bannerWrap}>
        <Image src={bannerImage} alt="" fill className={styles.bannerImage} sizes="100vw" />
        <span className={styles.checkBadge} aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
      </div>
      <div className={styles.bar}>
        <span className={styles.barText}>{selectedCount} Boutiques Selected</span>
        <button type="button" className={styles.nextBtn}>
          Next
        </button>
      </div>
      <div className={styles.list}>
        {boutiques.map((b) => (
          <BoutiqueCard key={b.id} boutique={b} />
        ))}
      </div>
    </section>
  );
}
