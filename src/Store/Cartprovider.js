import React, { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  item: [],
  totalAmount: 0,
};
const cartRducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      item: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "ADD", id: id });
  };
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  const [cartState, dispatchCartAction] = useReducer(
    cartContext,
    defaultCartState
  );

  return (
    // <cartContext.Provider>{props.children}</cartContext.Provider>);
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
