import React from "react";

function Navbar(props) {
  return (
    <div className="container">
      <div className="row">
          <div className="col-6 text-center">
            Dota 2 Heroes Game
          </div>
          <div className="col-6 text-center">
            <button className="btn btn-dark" onClick={() => props.refresh()}>Refresh</button>
          </div>
      </div>
    </div>
  );
}

export default Navbar;