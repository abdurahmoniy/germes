// cartReducer.js

import { ADD_TO_CART, UPDATE_CART_ITEM, REMOVE_FROM_CART } from '../pages/Cart/cartActions';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case UPDATE_CART_ITEM:
      const { index, quantity } = action.payload;
      const updatedCartItems = state.cartItems.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            counterValue: quantity,
          };
        }
        return item;
      });
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    case REMOVE_FROM_CART:
      const updatedCartItemsAfterRemoval = state.cartItems.filter((item, i) => i !== action.payload);
      return {
        ...state,
        cartItems: updatedCartItemsAfterRemoval,
      };
    default:
      return state;
  }
};

export default cartReducer;
