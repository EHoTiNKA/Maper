import "./styles/MoreWithMaper.scss";
import ContentColumn from "../../components/ContentColumn";
import MoreWithMaperCard from "../../components/MoreWithMaperCard";
import CardImg from "../../assets/IntegrationsPuzzle.svg";

const MoreWithMaper = () => {
  return (
    <ContentColumn>
      <div className="MoreWithMaper">
        <div className="MoreWithMaperText">
          <h1 className="MoreWithMaperTitle">Делайте больше с помощью Maper</h1>
          <p className="MoreWithMaperParagr">
            Интуитивно понятные функции Maper дают любой команде возможность
            быстро настраивать рабочие процессы практически для чего угодно.
          </p>
        </div>
        <div className="MoreWithMaperBlock"> 
          <MoreWithMaperCard
            img={CardImg}
            title={"Интеграции"}
            desc={
              "Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs."
            }
            buttonText={"Открыть интеграцию"}
          />
          <MoreWithMaperCard
            img={CardImg}
            title={"Интеграции"}
            desc={
              "Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs."
            }
            buttonText={"Открыть интеграцию"}
          />
          <MoreWithMaperCard
            img={CardImg}
            title={"Интеграции"}
            desc={
              "Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs."
            }
            buttonText={"Открыть интеграцию"}
          />
        </div>
      </div>
    </ContentColumn>
  );
};

export default MoreWithMaper;
