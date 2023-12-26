import "./styles/Slider.scss";
import { useState } from "react";
import { SliderContext } from "../components/SliderContext";
import SliderFrame from "../components/SliderFrame";

const Slider = ({ content, controls }) => {
  const [currentFrameNumber, setCurrentFrameNumber] = useState(0);

  return (
    <>
      <SliderContext.Provider
        value={{ currentFrameNumber, setCurrentFrameNumber }}
      >
        {controls}
      </SliderContext.Provider>
      <SliderFrame frames={content} currentFrameNumber={currentFrameNumber} />
    </>
  ); 
};

export default Slider;
