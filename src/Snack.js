import { Link } from "react-router-dom";
import { useState } from "react";
import "./vm-options.css";

function Snack() {
  const [snacks, setSnacks] = useState(false);

  return(
    <div className="vm-option">
      <button onClick={() => setSnacks(true)}>Get Chips</button>
      <Link to="/">Back</Link>
      {snacks && (<img class="products" alt="lays.png" src="/products/lays.png"/>)}
    </div>
  );
}

export default Snack;