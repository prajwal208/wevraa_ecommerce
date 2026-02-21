"use client";

import { useState, useMemo } from "react";
import type { CartItem as CartItemType } from "@/data/dummy";
import CartHeader from "@/components/CartHeader";
import CartItem from "@/components/CartItem";
import CartCheckout from "@/components/CartCheckout";
import FrequentlyBroughtTogether from "@/components/FrequentlyBroughtTogether";
import OurPolicies from "@/components/OurPolicies";
import BottomNav from "@/components/BottomNav";
import type { Product } from "@/data/dummy";
import type { FooterAccordionItem } from "@/data/dummy";
import styles from "./CartPage.module.scss";

interface CartPageProps {
  initialItems: CartItemType[];
  frequentlyBroughtTogether: Product[];
  policiesItems: FooterAccordionItem[];
}

export default function CartPage({
  initialItems,
  frequentlyBroughtTogether,
  policiesItems,
}: CartPageProps) {
  const [items, setItems] = useState<CartItemType[]>(initialItems);

  const { total, count } = useMemo(() => {
    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
    const count = items.reduce((sum, i) => sum + i.quantity, 0);
    return { total, count };
  }, [items]);

  const handleRemove = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  return (
    <>
      <CartHeader itemCount={count} />
      <main className={styles.main}>
        <div className={styles.items}>
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
        <CartCheckout total={total} />
        <FrequentlyBroughtTogether products={frequentlyBroughtTogether} />
        <OurPolicies items={policiesItems} />
      </main>
      <BottomNav />
    </>
  );
}
