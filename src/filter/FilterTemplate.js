import "./filterTemplate.css";

function FilterTemplate({ id, brand, model, images }) {
  return (
    <div className="phoneBlock">
      <div className="imageBlock">
        <img src={images} alt="SAMSUNG" className="imageSize" />
      </div>
      <div className="infoBlock">
        <p>Cod product: {id}</p>
        <p>Brand: {brand}</p>
        <p>Model: {model}</p>
      </div>
    </div>
  );
};

export default FilterTemplate;