import { Link } from "react-router-dom";
import { useState } from "react";

function Candy() {
  const [candy, setCandy] = useState("");

  return(
    <div className="candy">
      <h1>Candy</h1>
      <button onClick={() => setCandy("Candy")}>Get Candy</button>
      <Link to="/">Back</Link>
      {candy && (<p>{candy}</p>)}
    </div>
  );
}

export default Candy;

