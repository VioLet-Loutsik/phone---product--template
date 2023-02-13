import FilterTemplate from "../filter/FilterTemplate";
import { phoneData } from "../components/PhoneData";
import React from "react";
import './home.css';

const Home = () => {
  const filterData = phoneData
    .filter((element) => element.model)
    .map((newelement) => {
      return (
        <FilterTemplate
          id={newelement.id}
          brand={newelement.brand}
          model={newelement.model}
          images={newelement.images}
        />
      );
    });
  return  <div className="mainBlock">{filterData}</div>;
};

export default Home;
