import React from "react";
import "./style.css";

function Herocard(props) {
  return (
    <div className="card" onClick={() => props.imageClick(props.id, props.name)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Primary Attribute:</strong> {props.primaryAttr}
          </li>
          <li>
            <strong>Role:</strong> {props.mainRole}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Herocard;