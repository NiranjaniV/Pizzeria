import React from "react";
import "../styles/Menu.css";

function MenuItem(props) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${props.image})` }}></div>
      <h1>{props.name}</h1>
      <p>${props.price}</p>
    </div>
  );
}

export default MenuItem;
