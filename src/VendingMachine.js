import NavBar from "./NavBar.js";

function VendingMachine () {

  return (
    <div className="vending-machine">
      <img alt="background.pbg" src="/background.png"></img>
      <div className="nav-bar">
        <NavBar />
      </div>
    </div>
  );
}

export default VendingMachine;