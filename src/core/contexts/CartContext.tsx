import React, { useCallback, useMemo } from "react";
import { CartItem } from "@app/core/models/cart";
import { apiCart } from "@app/data-access/cart/apiCart";
import { useAuth } from "@app/core/contexts/AuthContext";

interface CartActions {
  addToCart: (productId: number, quantity?: number, price?: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

// --- Contexts ---
const CartStateContext = React.createContext<CartItem[] | undefined>(undefined);
const CartActionsContext = React.createContext<CartActions | undefined>(
  undefined
);

export const CartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { isAuthenticated, user } = useAuth();
  const [cart, setCart] = React.useState<CartItem[]>(() =>
    apiCart.getLocalCart()
  );

  // save cart to localStorage on change
  React.useEffect(() => {
    apiCart.saveLocalCart(cart);
  }, [cart]);

  // synchronize cart when user logs in
  React.useEffect(() => {
    if (isAuthenticated && user) {
      (async () => {
        const serverCart = await apiCart.getUserCart(user.id);
        const merged = apiCart.mergeCarts(cart, serverCart);
        await apiCart.saveUserCart(user.id, merged);
        setCart(merged);
      })();
    }
  }, [isAuthenticated, user]);

  // methods
  const addToCart = useCallback(
    (productId: number, quantity: number = 1, price?: number) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find(
          (item) => item.productId === productId
        );
        if (existingItem) {
          return prevCart.map((item) =>
            item.productId === productId
              ? {
                  ...item,
                  quantity: item.quantity + quantity,
                  price: price ?? item.price,
                }
              : item
          );
        } else {
          return [...prevCart, { productId, quantity, price }];
        }
      });
    },
    []
  );

  const removeFromCart = useCallback((productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    apiCart.clearLocalCart();
  }, []);

  // memoized actions
  const actions = useMemo(
    () => ({
      addToCart,
      removeFromCart,
      clearCart,
    }),
    [addToCart, removeFromCart, clearCart]
  );

  return (
    <CartStateContext.Provider value={cart}>
      <CartActionsContext.Provider value={actions}>
        {children}
      </CartActionsContext.Provider>
    </CartStateContext.Provider>
  );
};

// --- hooks ---
export const useCartState = () => {
  const context = React.useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within CartProvider");
  }
  return context;
};

export const useCartActions = () => {
  const context = React.useContext(CartActionsContext);
  if (context === undefined) {
    throw new Error("useCartActions must be used within CartProvider");
  }
  return context;
};
