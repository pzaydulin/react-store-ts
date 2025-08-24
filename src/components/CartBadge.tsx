import { useCartState } from "@app/core/contexts/CartContext";

const CartBadge: React.FC = () => {
  const cart = useCartState();

  return (
    <>
      {cart.length > 0 && (
        <div className="absolute inline-flex items-center justify-center py-0.5 px-1.5 text-xs font-normal text-destructive_foreground bg-destructive rounded-full -top-2 -right-2 pointer-events-none">
          {cart.length}
        </div>
      )}
    </>
  );
};

export default CartBadge;
