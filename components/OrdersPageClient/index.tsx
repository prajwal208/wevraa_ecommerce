"use client";

import { useState } from "react";
import OrdersTabs, { type OrdersTabId } from "@/components/OrdersTabs";
import OnlineOrderCard from "@/components/OnlineOrderCard";
import CustomOrderCard from "@/components/CustomOrderCard";
import BillOrderCard from "@/components/BillOrderCard";
import type { OnlineOrderItem, CustomOrderItem, BillOrderItem } from "@/data/dummy";
import styles from "./OrdersPageClient.module.scss";

interface OrdersPageClientProps {
  onlineOrders: OnlineOrderItem[];
  customOrders: CustomOrderItem[];
  billOrders: BillOrderItem[];
}

export default function OrdersPageClient({
  onlineOrders,
  customOrders,
  billOrders,
}: OrdersPageClientProps) {
  const [activeTab, setActiveTab] = useState<OrdersTabId>("online");

  return (
    <main className={`${styles.main} main-with-bottom-nav`}>
      <OrdersTabs active={activeTab} onSelect={setActiveTab} />
      <div className={styles.content}>
        {activeTab === "online" &&
          onlineOrders.map((order) => <OnlineOrderCard key={order.id} order={order} />)}
        {activeTab === "custom" &&
          customOrders.map((order) => <CustomOrderCard key={order.id} order={order} />)}
        {activeTab === "bills" &&
          billOrders.map((order) => <BillOrderCard key={order.id} order={order} />)}
      </div>
    </main>
  );
}
