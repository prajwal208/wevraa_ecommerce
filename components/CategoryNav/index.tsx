import { categories } from "@/data/dummy";
import styles from "./CategoryNav.module.scss";

export default function CategoryNav() {
  return (
    <div className={styles.wrap}>
      <div className={styles.scroll} role="list">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            className={styles.item}
            role="listitem"
          >
            <span className={styles.circle} aria-hidden />
            <span className={styles.label}>{cat.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
