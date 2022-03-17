import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Store/CartContext";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";

function HeaderCartButton(props) {
  const [btnIsHeighLighted, setbtnIsHeighLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curnNumber, item) => {
    return curnNumber + item.amount;
  }, 0);
  const { items } = cartCtx;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setbtnIsHeighLighted(true);
  }, [items]);
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className="badge">{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
