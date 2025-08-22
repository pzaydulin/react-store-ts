import { apiEndpoint, constants } from "@app/core/constants/apiEndpoints";
import { CartItem, ICart } from "@app/core/models/cart";
import { apiClient } from "../apiClient";

export const apiCart = {
  async getUserCart(id: number): Promise<CartItem[]> {
    const res = await apiClient.get<ICart>(apiEndpoint.CARTS.DETAIL(id));
    return res.data.products;
  },

  async saveUserCart(userId: number, cart: CartItem[]): Promise<void> {
    await apiClient.put(apiEndpoint.CARTS.UPDATE(userId), {
      products: cart,
    });
  },

  getLocalCart(): CartItem[] {
    const cartData = localStorage.getItem(constants.AUTH_DATA_KEY + "_cart");
    return cartData ? JSON.parse(cartData) : [];
  },

  saveLocalCart(cart: CartItem[]): void {
    localStorage.setItem(
      constants.AUTH_DATA_KEY + "_cart",
      JSON.stringify(cart)
    );
  },

  clearLocalCart(): void {
    localStorage.removeItem(constants.AUTH_DATA_KEY + "_cart");
  },

  mergeCarts(localCart: CartItem[], serverCart: CartItem[]): CartItem[] {
    const mergedCart: CartItem[] = [...serverCart];

    localCart.forEach((localItem) => {
      const existingItem = mergedCart.find(
        (p) => p.productId === localItem.productId
      );
      if (existingItem) {
        existingItem.quantity += localItem.quantity;
      } else {
        mergedCart.push(localItem);
      }
    });

    return mergedCart;
  },
};
