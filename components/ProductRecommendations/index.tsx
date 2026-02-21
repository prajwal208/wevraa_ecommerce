import type { Product } from "@/data/dummy";
import ProductCard from "@/components/ProductCard";
import styles from "./ProductRecommendations.module.scss";

interface ProductRecommendationsProps {
  title: string;
  products: Product[];
  showShortDescription?: boolean;
}

export default function ProductRecommendations({
  title,
  products,
  showShortDescription = false,
}: ProductRecommendationsProps) {
  if (products.length === 0) return null;

  const sectionId = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  return (
    <section className={styles.section} aria-labelledby={sectionId}>
      <h2 id={sectionId} className={styles.title}>
        {title}
      </h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showShortDescription={showShortDescription}
          />
        ))}
      </div>
    </section>
  );
}
