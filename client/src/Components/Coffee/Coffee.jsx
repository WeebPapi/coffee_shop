import React from "react";
import "./Coffee.css";

const Coffee = ({ id, icon, title, ingredients, description }) => {
  return (
    <div className="coffee-item">
      <div className="coffee-item-pic">
        <img src={icon} alt={title} />
      </div>
      <div className="coffee-item-info">
        <div className="coffee-item-info-top">
          <h1>{title}</h1>
          <ul>
            {ingredients.map((item) => (
              <p>{item.name}</p>
            ))}
          </ul>
        </div>
        <div className="coffee-item-info-bottom">
          <p className="coffee-item-price">
            {ingredients.reduce((a, b) => a.price + b.price, 2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
