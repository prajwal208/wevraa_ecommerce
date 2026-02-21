import CartPage from "@/components/CartPage";
import {
  cartItems,
  frequentlyBroughtTogetherProducts,
  ourPoliciesItems,
} from "@/data/dummy";

export default function CartRoute() {
  return (
    <CartPage
      initialItems={cartItems}
      frequentlyBroughtTogether={frequentlyBroughtTogetherProducts}
      policiesItems={ourPoliciesItems}
    />
  );
}
