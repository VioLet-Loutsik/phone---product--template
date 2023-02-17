import React from 'react'
import { useParams } from "react-router-dom";
import { phoneData } from "../components/PhoneData";
import RedSamsungTemplate from "../components/RedSamsungTemplate";

      
function SamsungPhoto() {
  const { model } = useParams();
  const redSamsmap = phoneData
    .filter((elem) => elem.model === model)
    .map((e) => {
      return <RedSamsungTemplate redSamsung={e.redPhone} />;
    });
  return (
    <div>
      <h2>{redSamsmap}</h2>
    </div>
  );
}


export default SamsungPhoto;