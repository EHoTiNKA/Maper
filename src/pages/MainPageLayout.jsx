import "./styles/MainPageLayout.scss";


const MainPageLayout = ({ header, footer, children }) => {
  return (
    <div className="mainPageLayout">
      <div className="header">{header}</div>
      <div className="body">
        <div className="headerPlug"></div>
        {children}
      </div>
      <div className="footer">{footer}</div>
    </div>
  );
};

export default MainPageLayout
