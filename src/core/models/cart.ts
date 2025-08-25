export interface ICart {
  id: number;
  userId: number;
  date: string;
  products: CartItem[];
}

export interface CartItem {
  productId: number;
  quantity: number;
  price?: number;
}
