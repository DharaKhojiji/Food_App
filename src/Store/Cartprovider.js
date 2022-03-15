// import React, { useReducer } from "react";
// import CartContext from "./CartContext";

// const defaultCartState = {
//   item: [],
//   totalAmount: 0,
// };
// const cartRducer = (state, action) => {
//   if (action.type === "ADD") {
//     const updatedItems = state.items.concat(action.item);
//     const updatedTotalAmount =
//       state.totalAmount + action.item.price * action.item.amount;
//     return {
//       item: updatedItems,
//       totalAmount: updatedTotalAmount,
//     };
//   }

//   return defaultCartState;
// };
// const CartProvider = (props) => {
//   const removeItemFromCartHandler = (id) => {
//     dispatchCartAction({ type: "REMOVE", id: id });
//   };
//   const addItemToCartHandler = (item) => {
//     dispatchCartAction({ type: "ADD", item: item });
//   };
//   const cartContext = {
//     items: [],
//     totalAmount: 0,
//     addItem: addItemToCartHandler,
//     removeItem: removeItemFromCartHandler,
//   };
//   const [cartState, dispatchCartAction] = useReducer(
//     cartContext,
//     defaultCartState
//   );

//   return (
//     // <cartContext.Provider>{props.children}</cartContext.Provider>);
//     <CartContext.Provider value={cartContext}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };
// export default CartProvider;
import { useReducer } from 'react';

import CartContext from './CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD', item: item});
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
