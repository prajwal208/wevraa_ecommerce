"use client";

import { useState } from "react";
import Image from "next/image";
import { sizes, sizeMeasurements } from "@/data/dummy";
import styles from "./SizeProductBlock.module.scss";

const placeholderImage = "/images/placeholder-rect.svg";

export default function SizeProductBlock() {
  const [selectedSize, setSelectedSize] = useState("s");

  return (
    <section className={styles.section} aria-labelledby="select-size-title">
      <div className={styles.imageWrap}>
        <Image
          src={placeholderImage}
          alt="Product for size reference"
          fill
          className={styles.image}
          sizes="100vw"
        />
      </div>
      <h2 id="select-size-title" className={styles.sizeTitle}>
        SELECT SIZE
      </h2>
      <div className={styles.sizeGrid} role="group">
        {sizes.map((size) => (
          <button
            key={size.id}
            type="button"
            className={`${styles.sizeBtn} ${selectedSize === size.id ? styles.active : ""}`}
            onClick={() => setSelectedSize(size.id)}
            aria-pressed={selectedSize === size.id}
          >
            {size.label}
          </button>
        ))}
      </div>
      <p className={styles.measurements}>
        Bust : {sizeMeasurements.bust} Waist : {sizeMeasurements.waist} Hip :{" "}
        {sizeMeasurements.hip}
      </p>
    </section>
  );
}
