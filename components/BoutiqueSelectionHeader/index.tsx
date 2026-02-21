"use client";

import { useState } from "react";
import styles from "./BoutiqueSelectionHeader.module.scss";

interface BoutiqueSelectionHeaderProps {
  count: number;
  names: string;
}

export default function BoutiqueSelectionHeader({ count, names }: BoutiqueSelectionHeaderProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.iconWrap}>
          <span className={`${styles.circle} ${styles.back}`} aria-hidden />
          <span className={`${styles.circle} ${styles.mid}`} aria-hidden />
          <span className={`${styles.circle} ${styles.front}`}>
            <svg className={styles.shopIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </span>
        </div>
        <div className={styles.text}>
          <h1 className={styles.title}>{count} Boutiques</h1>
          <p className={styles.subtitle}>Selected For Order Quote</p>
          <p className={styles.names}>{names}</p>
        </div>
        <button
          type="button"
          className={styles.chevronBtn}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="Expand"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: expanded ? "rotate(180deg)" : undefined }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
    </header>
  );
}
