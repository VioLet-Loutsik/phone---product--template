import React from "react";
import { useParams } from "react-router-dom";
import DescriptionTemplate from "../components/DescriptionTemplate";
import { phoneData } from "../components/PhoneData";

function PhoneDescription() {
  const { model } = useParams(); // читает параметр из FilterTemplate 19 строка
  console.log(useParams());
  const descriptionmap = phoneData
    .filter((elem) => elem.model === model)
    .map((e) => {
      console.log(e.colorsPhone[0]);
      return (
        <DescriptionTemplate
          description={e.description}
          image={e.images}
          colorsPhone={e.colorsPhone[0]}
          colorsPhoneSecond={e.colorsPhone[1]}
          colorsPhoneThird={e.colorsPhone[2]}
        />
      );
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
