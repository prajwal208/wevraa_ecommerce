import OrdersPageClient from "@/components/OrdersPageClient";
import OrdersHeader from "@/components/OrdersHeader";
import BottomNav from "@/components/BottomNav";
import { onlineOrders, customOrders, billOrders } from "@/data/dummy";

export default function OrdersPage() {
  return (
    <>
      <OrdersHeader />
      <OrdersPageClient
        onlineOrders={onlineOrders}
        customOrders={customOrders}
        billOrders={billOrders}
      />
      <BottomNav />
    </>
  );
}
