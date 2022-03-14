import React, { useRef, useState } from "react";
import "./MealsItemForm.css";
import Input from "../../UI/Input";

function MealsItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enterdAmount = amountInputRef.current.value;

    const enterdAmountNumber = +enterdAmount;
    if (
      enterdAmount.trim().length === 0 ||
      enterdAmountNumber < 1 ||
      enterdAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enterdAmountNumber);
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        ></Input>
        <button type="submit">+ ADD</button>
        {!amountIsValid && <p>plese enter valid amount 1 to 5</p>}
      </form>
    </div>
  );
}

export default MealsItemForm;
