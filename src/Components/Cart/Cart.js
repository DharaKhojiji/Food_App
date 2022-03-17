import Modal from "../UI/Modal";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  const totaLAmount = `$ ${cartCtx.totalAmount.toFixed(2)}`;
  const cartItems = (
    // <ul className="cart-items">
    //   {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
    //     <li key={item.id}>{item.name}</li>
    //   ))}
    // </ul>
    <ul className="cart-items">
      {cartCtx.items.map((item) => (
        // <li key={item.id}>{item.name}</li>
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totaLAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
