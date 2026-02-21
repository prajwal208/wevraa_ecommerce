import Link from "next/link";
import BoutiqueSelectionHeader from "@/components/BoutiqueSelectionHeader";
import BoutiqueSelectionList from "@/components/BoutiqueSelectionList";
import BottomNav from "@/components/BottomNav";
import { boutiqueSelectionList } from "@/data/dummy";
import styles from "./page.module.scss";

const selectedNames = "Star Boutique, Ap Designers, GGRFas.....";

export default function BoutiquesSelectionPage() {
  return (
    <>
      <header className={styles.header}>
        <Link href="/profile" className={styles.backBtn} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
      </header>
      <BoutiqueSelectionHeader count={5} names={selectedNames} />
      <main className="main-with-bottom-nav">
        <BoutiqueSelectionList items={boutiqueSelectionList} />
      </main>
      <BottomNav />
    </>
  );
}
