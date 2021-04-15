import React from "react";
import "./styles.css";

export const Card = (props) => {
  return (
    <div>
      <div class="card">
      <div class="card-body">
          <h1>{props.tittle}</h1>
          <h3 class="text-muted" >{props.sub}</h3>
          <h6>{props.text}</h6>
      </div>
      </div>
    </div>
  );
};

export default Card