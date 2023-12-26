import "./styles/SliderFrame.scss";

const SliderFrame = ({ frames, currentFrameNumber }) => {
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

export default SliderFrame;
