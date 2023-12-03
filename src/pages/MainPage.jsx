import MainHeader from "../widgets/MainHeader";
import MainBody from "../widgets/MainBody";
import MainFooter from "../widgets/MainFooter";
import MainPageLayout from "./MainPageLayout";

const MainPage = () => {
  return (
    <MainPageLayout 
        header={<MainHeader />} 
        footer={<MainFooter />}
    >
      <MainBody />
    </MainPageLayout>
  );
};

export default MainPage;
