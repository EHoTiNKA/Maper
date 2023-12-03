import "./styles/Intro.scss";
import ContentColumn from "../../components/ContentColumn";

const Intro = () => {
  return (
    <div className="intro">
      <ContentColumn>
        <h1>
          Maper объединяет все ваши задачи, партнеров по команде и инструменты
        </h1>
        <p>
          Храните все в одном месте - даже если ваша команда там не находится.
        </p>
      </ContentColumn>
    </div>
  );
};

export default Intro;
