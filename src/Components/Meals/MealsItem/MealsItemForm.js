import React, { useRef, useState, useEffect } from "react";
import "./MealsItemForm.css";
import Input from "../../UI/Input";
import HeaderCartButton from "../../Layout/HeaderCartButton";

function MealsItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  console.log(amountInputRef, "line 8");

  // const inputHandler = (event) => {
  //   console.log("onChnage", event.target.value);
  // };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    console.log(typeof enterdAmount);

    const enterdAmountNumber = +enterdAmount;
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNumber < 1 ||
      enterdAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    console.log(typeof enterdAmountNumber, enterdAmountNumber, "27 line");
    props.onAddTocart(enterdAmountNumber);
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          // onChange={(e) => inputHandler(e.target.value)}
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        ></Input>
        <button type="submit">ADD</button>
        {!amountIsValid && <p>plese enter valid amount 1 to 5</p>}
      </form>
    </div>
  );
}

export default MealsItemForm;
