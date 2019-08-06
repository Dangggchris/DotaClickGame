import React from "react";
import Score from "../Score/Score";

function Tron (props) {
  return (
<div className="jumbotron jumbotron-fluid container-fluid">
  <div className="container">
    <h1 className="display-4 text-center">Dota 2 Click Game</h1>
    <p className="lead text-center">Click a hero to earn points! Make sure not to click a duplicate or you lose!</p>
    <Score score={props.score} highScore={props.highScore}/>
  </div>
</div>
  );
}

export default Tron;