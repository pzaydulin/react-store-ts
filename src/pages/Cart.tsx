import CartProduct from "@app/components/CartProduct";
import CartSummary from "@app/components/CartSummary";
import { useCartState } from "@app/core/contexts/CartContext";
import Card from "@app/shared/components/Card";
import { useDocumentTitle } from "@app/shared/hooks/useDocumentTitle";
import React from "react";

const CartPage: React.FC = () => {
  const cart = useCartState();
  useDocumentTitle("Shopping Cart");

  return (
    <section>
      <h1 className="text-2xl font-semibold leading-none tracking-tight">
        Shopping Cart
      </h1>
      <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          {cart.length === 0 ? (
            <Card className="bg-secondary/30 ">
              <p>Your cart is currently empty.</p>
            </Card>
          ) : (
            cart.map((item) => {
              return (
                <Card key={item.productId} className="bg-secondary/30 mb-6">
                  <CartProduct {...item} />
                </Card>
              );
            })
          )}
        </div>
        <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
          <Card title="Order summary" className="bg-secondary/30 ">
            <CartSummary />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
