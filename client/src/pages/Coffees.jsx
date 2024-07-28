import React, { useEffect, useState } from "react";
import { axiosInstance } from "../axiosInstance";
import "../index.css";
import { Coffee } from "../Components/Coffee";

const Coffees = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axiosInstance.get("/coffees").then((res) => setList(res.data));
  }, []);
  return (
    <div className="coffee-list">
      {list.map((item) => (
        <Coffee
          key={item.id}
          id={item.id}
          title={item.title}
          ingredients={item.ingredients}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Coffees;
