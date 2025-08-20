import { useDocumentTitle } from "@app/shared/hooks/useDocumentTitle";
import React from "react";

const CartPage: React.FC = () => {
  useDocumentTitle("Cart");
  return <div>Cart</div>;
};

export default CartPage;
