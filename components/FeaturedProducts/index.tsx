import { featuredProducts } from "@/data/dummy";
import ProductCard from "@/components/ProductCard";
import styles from "./FeaturedProducts.module.scss";

export default function FeaturedProducts() {
  return (
    <section className={styles.section} aria-labelledby="featured-products-title">
      <h2 id="featured-products-title" className={styles.title}>
        Featured
      </h2>
      <div className={styles.grid}>
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
