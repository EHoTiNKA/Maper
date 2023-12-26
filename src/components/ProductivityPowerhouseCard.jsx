// import { SliderContext } from "../widgets/Slider";
import "./styles/ProductivityPowerhouseCard.scss";
import { useContext } from "react";
import { SliderContext } from "./SliderContext";

const ProductivityPowerhouseCard = ({
  number,
  title,
  desciption,
}) => {

  const { currentFrameNumber, setCurrentFrameNumber } = useContext(SliderContext);
  const isActive = currentFrameNumber === number;

  return (
    <div
      className={`ProductivityPowerhouseCard ${isActive ? "active" : ""}`}
      onClick={() => {
        setCurrentFrameNumber(number);
      }}
    >
      <h2>{title}</h2> 
      <p>{desciption}</p>
    </div>
  );
};

export default ProductivityPowerhouseCard;
