import { Link } from "react-router-dom";
import { useState } from "react";

function Drink() {
  const [drink, setDrink] = useState("");
  return(
    <div className="drinks">
      <h1>Drinks</h1>
      <button onClick={() => setDrink("Drink")}>Get Drink</button>
      <Link to="/">Back</Link>
      {drink && (<p>{drink}</p>)}
    </div>
  );
}

export default Drink;