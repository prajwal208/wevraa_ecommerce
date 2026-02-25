import Link from "next/link";
import styles from "./BoutiqueSelectionList.module.scss";

interface BoutiqueItem {
  id: string;
  name: string;
  iconColor: string;
}

export default function BoutiqueSelectionList({ items }: { items: BoutiqueItem[] }) {
  const iconClass = (color: string) => {
    if (color === "yellow") return styles.yellow;
    if (color === "purple") return styles.purple;
    if (color === "darkpurple") return styles.darkPurple;
    if (color === "lightgray") return styles.lightGray;
    if (color === "orange") return styles.orange;
    return "";
  };

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id}>
          <Link href="/order-quote" className={styles.item}>
            <span className={`${styles.icon} ${iconClass(item.iconColor)}`} aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            <span className={styles.name}>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
