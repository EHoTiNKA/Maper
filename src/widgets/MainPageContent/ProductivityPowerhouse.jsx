import "./styles/ProductivityPowerhouse.scss";
import ContentColumn from "../../components/ContentColumn";
import ProductivityPowerhouseCard from "../../components/ProductivityPowerhouseCard";
import WinterImg from "../../assets/WinterImg.jpeg";

const ProductivityPowerhouse = () => {
  return (
    <ContentColumn>
      <div className="ProductivityPowerhouse">
        <h1>Мощный инструмент повышения производительности</h1>
        <p className="ProductivityPowerhouseParagr">
          Простой, гибкий и мощный. Все, что требуется, - это доски объявлений,
          списки и карточки, чтобы получить четкое представление о том, кто что
          делает и что необходимо сделать. Узнайте больше в нашем руководстве по
          началу работы.
        </p>
        <div className="ProductivityPowerhouseGrid">
          <ProductivityPowerhouseCard
            title={"Доски"}
            desciption={
              "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
            }
          />
          <ProductivityPowerhouseCard
            title={"Доски"}
            desciption={
              "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
            }
          />
          <ProductivityPowerhouseCard
            title={"Доски"}
            desciption={
              "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
            }
          />
          <div className="ProductivityPowerhouseImg"></div>
        </div>
        {/* <div className="ProductivityPowerhouseBlock">
          <div className="ProductivityPowerhouseCards">
            <ProductivityPowerhouseCard
              title={"Доски"}
              desciption={
                "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
              }
            />
            <ProductivityPowerhouseCard
              title={"Доски"}
              desciption={
                "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
              }
            />
            <ProductivityPowerhouseCard
              title={"Доски"}
              desciption={
                "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
              }
            />
          </div>
          <div className="ProductivityPowerhouseImg">
            <img src={WinterImg} alt="dad" />
          </div>
        </div> */}
      </div>
    </ContentColumn>
  );
};

export default ProductivityPowerhouse;
