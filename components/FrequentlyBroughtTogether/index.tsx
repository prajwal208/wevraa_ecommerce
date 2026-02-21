import type { Product } from "@/data/dummy";
import ProductCard from "@/components/ProductCard";
import styles from "./FrequentlyBroughtTogether.module.scss";

interface FrequentlyBroughtTogetherProps {
  products: Product[];
}

export default function FrequentlyBroughtTogether({ products }: FrequentlyBroughtTogetherProps) {
  if (products.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="fbt-title">
      <h2 id="fbt-title" className={styles.title}>
        Frequently Brought Together
      </h2>
      <div className={styles.scroll}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <ProductCard product={product} showShortDescription />
          </div>
        ))}
      </div>
    </section>
  );
}
