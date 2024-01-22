import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./VendingMachine.js";
import Drink from "./Drink.js";
import Snack from "./Snack.js";
import Candy from "./Candy.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/drinks" element={<Drink/>} />
          <Route path="/snacks" element={<Snack/>} />
          <Route path="/candy" element={<Candy/>} />
          <Route path="/" element={<VendingMachine/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
