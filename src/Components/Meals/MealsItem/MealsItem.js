import React, { useContext } from "react";
import "./MealsItem.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../../Store/CartContext";
const MealsItem = (props) => {
  console.log("Mealdatas", props.Mealdatas);
  const cartCtx = useContext(CartContext);

  //   const price = `$ ${props.Mealdatas.price.toFixed(2)}`;
  const addCartHandler = (amount) => {
    // alert();
    console.log("hello line 17", props.Mealdatas.id, props.Mealdatas);
    cartCtx.addItem({
      id: props.Mealdatas.id,
      name: props.Mealdatas.name,
      amount: amount,
      price: props.Mealdatas.price,
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
          id={props.id} />
        
      </div>
    </li>
  );
};

export default MealsItem;
