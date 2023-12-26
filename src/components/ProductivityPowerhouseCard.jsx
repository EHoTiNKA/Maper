import "./styles/ProductivityPowerhouseCard.scss";

const ProductivityPowerhouseCard = ({
  title,
  desciption,
  onClick,
  isActive,
}) => {
  return (
    <div
      className={`ProductivityPowerhouseCard ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <h2>{title}</h2> 
      <p>{desciption}</p>
    </div>
  );
};

export default ProductivityPowerhouseCard;
