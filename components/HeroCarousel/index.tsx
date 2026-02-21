"use client";

import { useState } from "react";
import Image from "next/image";
import { heroSlides } from "@/data/dummy";
import styles from "./HeroCarousel.module.scss";

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = heroSlides[activeIndex];

  return (
    <section className={styles.wrap} aria-label="Hero carousel">
      <div className={styles.slideWrap}>
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          className={styles.slide}
          sizes="100vw"
          priority
        />
      </div>
      <div className={styles.dots} role="tablist">
        {heroSlides.map((_, i) => (
          <button
            key={heroSlides[i].id}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            className={`${styles.dot} ${i === activeIndex ? styles.active : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
