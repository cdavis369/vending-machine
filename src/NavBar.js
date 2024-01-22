import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function NavBar() {
  return (
    <nav className="vending-machine">
      <Link to="/snacks">
        Snacks
      </Link>
      <Link to="/drinks">
        Drinks
      </Link>
      <Link to="/candy">
        Candy
      </Link>
    </nav>
  );
}

export default NavBar;