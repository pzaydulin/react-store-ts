import { useDocumentTitle } from "@app/shared/hooks/useDocumentTitle";
import React from "react";

const CartPage: React.FC = () => {
  useDocumentTitle("Shopping Cart");

  return (
    <h1 className="text-2xl font-semibold leading-none tracking-tight">
      Shopping Cart
    </h1>
  );
};

export default CartPage;
