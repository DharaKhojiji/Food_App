import React, { useContext } from "react";
import "./MealsItem.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../Store/CartContext";
const MealsItem = (props) => {
  console.log("Mealdatas", props.Mealdatas);
  const cartCtx = useContext(CartContext);

  //   const price = `$ ${props.Mealdatas.price.toFixed(2)}`;
  const addCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className="meal">
      <div>
        <h3>{props.Mealdatas.name}</h3>
        <div className="description">{props.Mealdatas.description}</div>
        <div className="price">{props.Mealdatas.price}</div>
      </div>
      <div>
        <MealsItemForm
          onAddTocart={addCartHandler}
          id={props.id}
        ></MealsItemForm>
      </div>
    </li>
  );
};

export default MealsItem;
