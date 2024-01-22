import { Link } from "react-router-dom";
import { useState } from "react";
import "./vm-options.css";

function Candy() {
  const [candy, setCandy] = useState("");

  return(
    <div className="vm-option">
      <button onClick={() => setCandy("Candy")}>Get Candy</button>
      <Link to="/">Back</Link>
      {candy && (<img class="products" alt="snickers.png" src="/products/snickers.png"/>)}
    </div>
  );
}

export default Candy;

