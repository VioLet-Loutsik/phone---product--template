import { Link } from "react-router-dom";
import "./filterTemplate.css";

function FilterTemplate({ id, brand, model, images, redSamsung }) {
  return (
    <div className="phoneBlock">
      <div className="blockPhonePhoto">
        <div className="imageBlock">
          <img src={images} alt="SAMSUNG" className="imageSize" />
        </div>
        <div className="redSamsung">
          <Link to={`/phone/${redSamsung}`}>red</Link>
        </div>
      </div>
      <div className="infoBlock">
        <p>Cod product: {id}</p>
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
        <Link to={`/phone/${model}`}>caracteritics</Link>
      </div>
    </div>
  );
}

export default FilterTemplate;
