import { useCartActions } from "@app/core/contexts/CartContext";
import { CartItem } from "@app/core/models/cart";
import { useGetProductById } from "@app/data-access/product/hooks/useProducts";
import ModalDialog from "@app/shared/components/ModalDialog";
import { formatCurrency } from "@app/shared/utils/currency";
import React, { memo, useEffect } from "react";

const CartProduct: React.FC<CartItem> = (item: CartItem) => {
  const [price, setPrice] = React.useState<number>(0);
  const [quantity, setQuantity] = React.useState<number>(item.quantity);
  const [modalOpen, setModalOpen] = React.useState(false);

  const { addToCart, removeFromCart } = useCartActions();
  const {
    data: product,
    isError,
    isLoading,
  } = useGetProductById(Number(item.productId));

  useEffect(() => {
    if (product) {
      setPrice(product.price * quantity);
      addToCart(product.id, 0, product.price); // initialize price in cart
    }
  }, [quantity, product]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading product details.</p>;
  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <>
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <img
          loading="lazy"
          className="h-24 w-24 rounded-lg"
          src={product.image}
          alt={product.title}
        />

        <label htmlFor="counter-input" className="sr-only">
          Choose quantity:
        </label>
        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button
              type="button"
              id="decrement-button"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  addToCart(product.id, -1);
                }
              }}
              data-input-counter-decrement="counter-input"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 border-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary h-6 w-6 shrink-0 rounded-full"
            >
              <svg
                className="h-2.5 w-2.5 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 2"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h16"
                />
              </svg>
            </button>
            <input
              type="text"
              id="counter-input"
              data-input-counter
              className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
              placeholder=""
              value={quantity}
              readOnly
              required
            />
            <button
              type="button"
              id="increment-button"
              onClick={() => {
                setQuantity(quantity + 1);
                addToCart(product.id, 1);
              }}
              data-input-counter-increment="counter-input"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm disabled:pointer-events-none disabled:opacity-50 border-0 bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary h-6 w-6 shrink-0 rounded-full"
            >
              <svg
                className="h-2.5 w-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 1v16M1 9h16"
                />
              </svg>
            </button>
          </div>
          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold">{formatCurrency(price)}</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <h2 className="text-lg font-semibold leading-tight">
            {product.title}
          </h2>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="inline-flex items-center text-sm text-muted_foreground hover:underline "
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                />
              </svg>
              Add to Favorites
            </button>

            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center text-sm text-destructive/80 hover:underline"
            >
              <svg
                className="me-1.5 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
      <ModalDialog
        open={modalOpen}
        onOpenChange={setModalOpen}
        buttonClose={{
          title: "Cancel",
          onClick: () => setModalOpen(false),
        }}
        buttonConfirm={{
          title: "Remove",
          onClick: () => {
            removeFromCart(product.id);
            setModalOpen(false);
          },
        }}
      >
        Are you sure you want to remove this item from the cart?
      </ModalDialog>
    </>
  );
};

export default memo(CartProduct);
