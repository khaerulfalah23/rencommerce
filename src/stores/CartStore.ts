import { create } from 'zustand';
import { CartState, ProductItem } from '@/types';
import { createJSONStorage, persist } from 'zustand/middleware';

export const CartStore = create(
  persist<CartState>(
    (set, get) => ({
      cart: [],
      itemAmount: 0,
      totalPrice: 0,
      addToCart: (product: ProductItem) => {
        const newItem = { ...product, amount: 1 };
        // check if the item is already in the cart
        const cartItem = get().cart.find((item) => item.id === newItem.id);
        // if cart item is already in the cart
        if (cartItem) {
          const newCart = get().cart.map((item) => {
            if (item.id === cartItem.id) {
              return {
                ...item,
                amount: item.amount + 1,
              };
            } else {
              return item;
            }
          });
          set({ cart: newCart });
        } else {
          set({ cart: [...get().cart, newItem] });
        }
      },
      removeFromCart: (id: number) => {
        const newCart = get().cart.filter((item) => item.id !== id);
        set({ cart: newCart });
      },
      clearCart: () => set({ cart: [] }),
      increaseAmount: (id: number) => {
        const newCart = get().cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          } else {
            return item;
          }
        });
        set({ cart: newCart });
      },
      decreaseAmount: (id: number) => {
        const updatedCartItems = get().cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              amount: item.amount - 1,
            };
          } else {
            return item;
          }
        });
        set({ cart: updatedCartItems.filter((item) => item.amount > 0) });
      },
      setItemAmount: () => {
        const itemAmount = get().cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.amount;
        }, 0);
        set({ itemAmount });
      },
      setTotalPrice: () => {
        const totalPrice = get().cart.reduce((accumulator, currentItem) => {
          return accumulator + currentItem.price * currentItem.amount;
        }, 0);
        set({ totalPrice });
      },
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
