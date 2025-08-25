import { useCartState } from "@app/core/contexts/CartContext";
import { formatCurrency } from "@app/shared/utils/currency";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CartSummary: React.FC = (props) => {
  const cart = useCartState();
  const taxRate = 0.1; // Example tax rate of 10%

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cart.reduce(
      (acc, item) => acc + (item.price ?? 0) * item.quantity,
      0
    );
    const newTax = newSubtotal * taxRate;
    const newTotal = newSubtotal + newTax;

    setSubtotal(newSubtotal);
    setTax(newTax);
    setTotal(newTotal);
  }, [cart]);

  return (
    <>
      <div className="space-y-4 mt-4 mb-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-muted_foreground">
              Original price
            </dt>
            <dd className="text-base font-medium">
              {formatCurrency(subtotal)}
            </dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-muted_foreground">
              Savings
            </dt>
            <dd className="text-base font-medium text-green-600">-$0.00</dd>
          </dl>

          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-muted_foreground">Tax</dt>
            <dd className="text-base font-medium">{formatCurrency(tax)}</dd>
          </dl>
        </div>

        <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
          <dt className="text-base font-bold">Total</dt>
          <dd className="text-base font-bold">{formatCurrency(total)}</dd>
        </dl>
      </div>

      <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary_foreground hover:bg-primary/80 active:bg-primary h-10 px-4 py-2 w-full">
        Proceed to Checkout
      </button>

      <div className="flex items-center mt-4 justify-center gap-2">
        <span className="text-sm text-muted_foreground">or</span>
        <NavLink
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-primary font-medium underline hover:no-underline"
        >
          Continue Shopping
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export default CartSummary;
