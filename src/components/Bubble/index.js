import React from "react"
import "./styles.scss";

export const Bubble = (props) => {
  return (
    <a className="abubble"
    href={props.link} target="blank">
      <div className="bubble">
      <img className="logo" alt={props.name + " Logo"} src={props.logo}></img>
      </div>
    </a>
  );
};

export default Bubble