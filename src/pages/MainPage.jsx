import "./styles/MainPage.scss";
import MainHeader from "../widgets/MainHeader";
import MainBody from "../widgets/MainBody";
import MainFooter from "../widgets/MainFooter";

const MainPage = () => {
  return (
    <div className="pageContent">
      <MainHeader />
      <MainBody />
      <MainFooter />
    </div>
  );
};

export default MainPage;
