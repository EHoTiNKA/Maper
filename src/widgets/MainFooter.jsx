import "./styles/MainFooter.scss";
import testMaperLogo from "../assets/testMaperLogo.svg";
import FooterButton from "../components/FooterButton";

const MainFooter = () => {
  return (
    <div className="MainFooter">
      <div className="MainFooterFirstBlock">
        <img src={testMaperLogo} alt="logo" className="MainFooterLogo" />
        <FooterButton title={"Об Maper"} descirtion={"Что внутри досок?"} />
        <FooterButton title={"Об Maper"} descirtion={"Что внутри досок?"} />
        <FooterButton title={"Об Maper"} descirtion={"Что внутри досок?"} />
        <FooterButton title={"Об Maper"} descirtion={"Что внутри досок?"} />
      </div>
      <div className="MainFooterSeconBlock">
        <p className="MainFooterSeconBlockParagr">Your Privacy</p> 
        <p className="MainFooterSeconBlockParagr">Privacy Policy</p>
        <p className="MainFooterSeconBlockParagr">Terms</p>
        <p className="MainFooterSeconBlockParagr">Copyright © 2023 Maper</p>
      </div>
    </div>
  );
};

export default MainFooter;
