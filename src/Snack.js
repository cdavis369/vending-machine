import { Link } from "react-router-dom";
import { useState } from "react";

function Snack() {
  const [snacks, setSnacks] = useState("");

  return(
    <div className="snacks">
      <h1>Snacks</h1>
      <button onClick={() => setSnacks("Chips")}>Get Chips</button>
      <Link to="/">Back</Link>
      {snacks && (<p>{snacks}</p>)}
    </div>
  );
}

export default Snack;