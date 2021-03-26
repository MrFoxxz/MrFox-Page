import React from "react";
import "./styles.css";

export const Card = (props) => {
  return (
    <div>
      <div class="card">
      <div class="card-body">
          <h5 class="card-title">{props.tittle}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.sub}</h6>
          <p class="card-text">{props.text}</p>
      </div>
      </div>
    </div>
  );
};

export default Card