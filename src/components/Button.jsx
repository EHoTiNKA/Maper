import "./styles/Button.scss";

const Button = ({ text }) => {
  return (
    <button className="IntroButton">
      <p>{text}</p>
    </button>
  );
};

export default Button;
