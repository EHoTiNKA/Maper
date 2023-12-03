import MainHeader from "../widgets/MainHeader";
import MainFooter from "../widgets/MainFooter";
import MainPageLayout from "./MainPageLayout";
import Intro from "../widgets/MainPageContent/Intro";

const MainPage = () => {
  return (
    <MainPageLayout 
        header={<MainHeader />} 
        footer={<MainFooter />}
    >
      <Intro />
    </MainPageLayout>
  );
};

export default MainPage;
