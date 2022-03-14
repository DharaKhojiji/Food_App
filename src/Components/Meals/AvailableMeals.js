import React from "react";
import Card from "../UI/Card";
import "./AvailableMeals.css";
import MealsItem from "./MealsItem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  // const mealsList = DUMMY_MEALS.map((meal) => {
  //   //  {console.log(meal);}
  //   return
  //     <MealsItem
  //       Mealdatas={meal}
  //       key={meal.id}
  //       // key={meal.id}
  //       // name={meal.name}
  //       // description={meal.description}
  //       // price={meal.price}
  //     />

  // });
  return (
    <div className="meals">
      {/* <Card>
        <ul>{mealsList}</ul>
      </Card> */}

      {DUMMY_MEALS.map((meal) => {
        return <MealsItem key={meal.id} Mealdatas={meal}></MealsItem>;
      })}
    </div>
  );
};

export default AvailableMeals;
