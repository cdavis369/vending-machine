import { Link } from "react-router-dom";
import { useState } from "react";
import "./vm-options.css";

function Drink() {
  const [drink, setDrink] = useState("");
  return(
    <div className="vm-option">
      <button onClick={() => setDrink("Drink")}>Get Drink</button>
      <Link to="/">Back</Link>
      {drink && (<img class="products" alt="coke.png" src="/products/coke.png"/>)}
    </div>
  );
}

export default Drink;