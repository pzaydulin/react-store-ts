import React from "react";
import { CartItem } from "@app/core/models/cart";
import { apiCart } from "@app/data-access/cart/apiCart";
import { useAuth } from "@app/core/contexts/AuthContext";

interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const { isAuthenticated, user } = useAuth();
  const [cart, setCart] = React.useState<CartItem[]>(() =>
    apiCart.getLocalCart()
  );

  React.useEffect(() => {
    apiCart.saveLocalCart(cart);
  }, [cart]);

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

  const addToCart = (productId: number, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { productId, quantity }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  const clearCart = () => {
    setCart([]);
    apiCart.clearLocalCart();
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};
