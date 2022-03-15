import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/Cartprovider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCardHandler = () => {
    setCartIsShown(true);
  };
  const hideCardHandler = () => {
    setCartIsShown(false);
  };
// const [try,settry] = useState()
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCardHandler} />}
      <Header onShowCart={showCardHandler} />
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
