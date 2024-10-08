import "./styles/MainBody.scss";

const MainBody = () => {
  return (
    <div className="mainBodyContent">
        <div className="firstBlockBody">
          <h1>
            Maper объединяет все ваши задачи, партнеров по команде и инструменты
          </h1>
          <p>
            Храните все в одном месте - даже если ваша команда там не находится.
          </p>
        </div>
      <div className="bodyLine">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3f775f"
            fill-opacity="1"
            d="M0,160L40,170.7C80,181,160,203,240,192C320,181,400,139,480,112C560,85,640,75,720,85.3C800,96,880,128,960,128C1040,128,1120,96,1200,101.3C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="secondBlockBody">
        <h1>Мощный инструмент повышения производительности</h1>
        <p>
          Простой, гибкий и мощный. Все, что требуется, - это доски, списки и
          карточки, чтобы получить четкое представление о том, кто что делает и
          что необходимо сделать. Узнайте больше в нашем руководстве по началу
          работы.
        </p>
      </div>
    </div>
  );
};

export default MainBody;
