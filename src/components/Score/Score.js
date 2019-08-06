import React from "react";

function Score (props) {
  console.log(props.score)
  return (
    <div className="col-12 text-center">
        <div className="header text-center">
          <div className="title">{props.children}</div>
          <div className="scores">
            Score: {props.score} | Highscore: {props.highScore}
      </div>
    </div>
  </div>
  )
};

export default Score;