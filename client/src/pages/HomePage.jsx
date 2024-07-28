import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const HomePage = () => {
  return (
    <div className="selection">
      <Link to={"/coffee"}>View Coffees</Link>
      <Link to={"/ingredient"}>View Ingredients</Link>
    </div>
  );
};

export default HomePage;
