import "./styles/HeaderButton.scss";

const HeaderButton = ({ text }) => {
  return (
    <button className="Button">
      <p>{text}</p> 
    </button>
  );
};

export default HeaderButton;
