import Link from "next/link";
import BottomNav from "@/components/BottomNav";
import { footerAccordionItems } from "@/data/dummy";
import styles from "./help.module.scss";

export default function HelpPage() {
  const helpItem = footerAccordionItems.find((i) => i.id === "help");
  const aboutItem = footerAccordionItems.find((i) => i.id === "about");
  const howItem = footerAccordionItems.find((i) => i.id === "how");

  return (
    <>
      <header className={styles.header}>
        <Link href="/profile" className={styles.backBtn} aria-label="Back">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <h1 className={styles.title}>Help and Support</h1>
      </header>
      <main className={`${styles.main} main-with-bottom-nav`}>
        <div className={styles.content}>
          {helpItem && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{helpItem.title}</h2>
              <p className={styles.body}>{helpItem.content}</p>
            </section>
          )}
          {aboutItem && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{aboutItem.title}</h2>
              <p className={styles.body}>{aboutItem.content}</p>
            </section>
          )}
          {howItem && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>{howItem.title}</h2>
              <p className={styles.body}>{howItem.content}</p>
            </section>
          )}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.body}>
              Email: support@wevraa.com
              <br />
              Reach out for sizing, orders, or returns. We’re here to help.
            </p>
          </section>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
