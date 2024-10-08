import { useState } from "react";

import "./styles/ProductivityPowerhouse.scss";
import ContentColumn from "../../components/ContentColumn";
import Slider from "../Slider";
import ProductivityPowerhouseCard from "../../components/ProductivityPowerhouseCard";

const ProductivityPowerhouse = () => {
  const content = [
    "/src/assets/1.png",
    "/src/assets/3.jpg",
    "/src/assets/4.png",
  ];

  // const [currentFrameNumber, setCurrentFrameNumber] = useState(0);

  // const frames = content;

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
          <Slider
            content={content}
            controls={
              <>
                <ProductivityPowerhouseCard
                  number={0}
                  title="Доски"
                  desciption="Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
                />
                <ProductivityPowerhouseCard
                  number={1}
                  title="Доски"
                  desciption="Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
                />
                <ProductivityPowerhouseCard
                  number={2}
                  title="Доски"
                  desciption="Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
                />
              </>
            }
          />
          {/* <ProductivityPowerhouseCard
            isActive={currentFrameNumber == 0}
            onClick={() => {
              setCurrentFrameNumber(0);
            }}
            title={"Доски"}
            desciption={
              "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
            }
          />
          <ProductivityPowerhouseCard
            isActive={currentFrameNumber == 1}
            onClick={() => {
              setCurrentFrameNumber(1);
            }}
            title={"Доски"}
            desciption={
              "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
            }
          />
          <ProductivityPowerhouseCard
            isActive={currentFrameNumber == 2}
            onClick={() => {
              setCurrentFrameNumber(2);
            }}
            title={"Доски"}
            desciption={
              "Доски Maper позволяют систематизировать задачи и продвигать работу вперед. Одним взглядом вы увидите все, от что нужно сделать до о, да, мы сделали это!"
            }
          /> */}
        </div>
      </div>
    </ContentColumn>
  );
};

export default ProductivityPowerhouse;
