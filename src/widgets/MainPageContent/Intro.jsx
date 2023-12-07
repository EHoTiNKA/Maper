import "./styles/Intro.scss";
import ContentColumn from "../../components/ContentColumn";
import ImgPlug from "../../assets/штурмочка.jpg";
import Button from "../../components/Button"

const Intro = () => {
  return (
    <div className="intro">
      <ContentColumn>
        <div className="introContent">
          <div className="introText">
            <h1>
              Maper объединяет все ваши задачи, партнеров по команде и
              инструменты
            </h1>
            <p className="introParagr">
              Храните все в одном месте - даже если ваша команда там не
              находится.
            </p>
            <div className="introRegInput">
            <input type="text" placeholder="Email" className="introInput"></input> 
            <Button text={"Регестрируйтесь"} />
            </div>
          </div>
          <div className="introImg">
            <img src={ImgPlug} alt="dad" />
          </div>
        </div>
      </ContentColumn>
    </div>
  );
};

export default Intro;
