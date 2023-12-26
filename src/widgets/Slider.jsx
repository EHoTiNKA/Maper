import "./styles/Slider.scss";
import { useState } from "react";

const Slider = () => {
  const content = [
    "/src/assets/1.png",
    "/src/assets/3.jpg",
    "/src/assets/4.png",
  ];

  const [currentFrameNumber, setCurrentFrameNumber] = useState(0);

  const frames = content;

  return (
    <div className="slider">
      <div className="frameContainer">
        {/* <p className="frameNumber">{currentFrameNumber}</p> */}
        {frames.map((image, index) => (
          <div
            key={index}
            className={"frame"}
            style={{
              transform: `translateX(-${currentFrameNumber * 100}%)`,
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
