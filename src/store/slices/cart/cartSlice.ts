import { createSlice } from "@reduxjs/toolkit";

import { ICartItem } from "models/types";

interface InitialState {
  cartItems: ICartItem[];
}

const initialState: InitialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart(state, action) {
      let newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        if (
          JSON.stringify(newItem.cartOptions) ===
          JSON.stringify(state.cartItems[index].cartOptions)
        ) {
          state.cartItems[index].quantity += newItem.quantity;
        } else {
          newItem.id = newItem.id + Math.random();
          state.cartItems.push(newItem);
        }
      } else {
        state.cartItems.push(newItem);
      }
    },
    plusQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity += quantity;
      }
    },
    minusQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity -= quantity;
        if (state.cartItems[index].quantity <= 0) {
          state.cartItems = state.cartItems.filter((x) => x.id !== id);
        }
      }
    },
    removeFormCart(state, action) {
      const idNeedRemove = action.payload.id;
      state.cartItems = state.cartItems.filter((x) => x.id !== idNeedRemove);
    },
  },
});
