import Link from "next/link";
import styles from "./ProfileHeader.module.scss";

export default function ProfileHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.backBtn} aria-label="Back">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </Link>
      <div className={styles.searchWrap}>
        <span className={styles.searchIcon} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </span>
        <input
          type="search"
          className={styles.input}
          placeholder="Search your Boutiques by pincode"
          aria-label="Search boutiques by pincode"
        />
        <span className={styles.locationIcon} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
      </div>
    </header>
  );
}
