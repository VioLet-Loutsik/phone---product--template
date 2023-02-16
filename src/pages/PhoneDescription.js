import React from "react";
import { useParams } from "react-router-dom";
import DescriptionTemplate from "../components/DescriptionTemplate";
import { phoneData } from "../components/PhoneData";

function PhoneDescription() {
  const { model } = useParams();
  const descriptionmap = phoneData
    .filter((elem) => elem.model === model)
    .map((e) => {
      return <DescriptionTemplate description={e.description} />;
    });
  return (
    <div>
      <h2>{model}</h2>
      <p>{descriptionmap}</p>
    </div>
  );
}
export default PhoneDescription;

// useParams (встроенный параметр) видит тот параметр который передали через Link
//
