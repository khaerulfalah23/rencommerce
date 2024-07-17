export type ProductItem = {
  id: number;
  image: string;
  price: number;
  category: string;
  description: string;
  title: string;
  rating: { rate: number; count: number };
  amount: number;
};

export type CartState = {
  cart: ProductItem[];
  itemAmount: number;
  totalPrice: number;
  addToCart: (product: ProductItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  setItemAmount: () => void;
  setTotalPrice: () => void;
};
