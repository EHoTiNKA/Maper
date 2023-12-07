import "./styles/MaperPricedCard.scss";
import Spacer from "./Spacer";

const MaperPricedCard = ({
  name,
  price,
  littleDesc,
  description,
  buttonText,
}) => {
  return (
    <div className="MaperPricedCard">
      <h2 className="MaperPricedCardTitle">{name}</h2>
      <div className="MaperPricedCardPriceBlock">
        <p className="MaperPricedCardPrice">{price}</p>
        <p className="MaperPricedCardPriceValute">RUB</p>
      </div>
      <p className="MaperPricedCardLittleDesc">{littleDesc}</p>
      <p className="MaperPricedCardDescription">{description}</p>
      <Spacer />
      <button className="MaperPricedCardButton">{buttonText}</button>
    </div>
  );
};

export default MaperPricedCard;
