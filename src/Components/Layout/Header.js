import React, { Fragment } from "react";
import "./Header.css";
import mealsImage from "../Assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton className="header-button"/>
      </header>
      <div className="main-image">
        <img className="" src={mealsImage}></img>
      </div>
    </Fragment>
  );
};

export default Header;
