import "./styles/MaperPriced.scss";
import MaperPricedCard from "../../components/MaperPricedCard";

const MaperPriced = () => {
  return (
    <div className="MaperPriced">
      <h1 className="MaperPricedTitle">Maper оценил по-своему</h1>
      <p className="MaperPricedParagr">
        Maper миллионами, Maper поддерживает команды по всему миру.
      </p>
      <button className="MaperPricedButton">
        <p>Сравните тарифы</p>
      </button>
      <div className="MaperPricedCardsBlock"> 
        <MaperPricedCard
          name={"FREE"}
          price={"0"}
          littleDesc={"Бесплатно для всей вашей команды"}
          description={
            "Для отдельных лиц или команд, желающих организовать какой-либо проект."
          }
          buttonText={"Начать"}
        />
        <MaperPricedCard
          name={"STANDART"}
          price={"500"}
          littleDesc={"За пользователя/месяц при ежегодном вычставлении счёта"}
          description={
            "Для небольших команд, которым необходимо управлять работой и расширять сотрудничество."
          }
          buttonText={"Попробуйте"}
        />
        <MaperPricedCard
          name={"STANDART"}
          price={"500"}
          littleDesc={"За пользователя/месяц при ежегодном вычставлении счёта"}
          description={
            "Для небольших команд, которым необходимо управлять работой и расширять сотрудничество."
          }
          buttonText={"Попробуйте"}
        />
        <MaperPricedCard
          name={"STANDART"}
          price={"500"}
          littleDesc={"За пользователя/месяц при ежегодном вычставлении счёта"}
          description={
            "Для небольших команд, которым необходимо управлять работой и расширять сотрудничество."
          }
          buttonText={"Попробуйте"}
        />
      </div>
    </div>
  );
};

export default MaperPriced;
