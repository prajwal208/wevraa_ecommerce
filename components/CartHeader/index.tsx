import Link from "next/link";
import styles from "./CartHeader.module.scss";

interface CartHeaderProps {
  itemCount: number;
}

const shippingMessage =
  "Enjoy international shipping rates and pre-pay duties & taxes at checkout.";

export default function CartHeader({ itemCount }: CartHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <h1 className={styles.title}>MY BAG ({itemCount})</h1>
        <Link href="/" className={styles.closeBtn} aria-label="Close cart">
          ×
        </Link>
      </div>
      <p className={styles.shippingNote}>{shippingMessage}</p>
    </header>
  );
}
