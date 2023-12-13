import MainHeader from "../widgets/MainHeader";
import MainFooter from "../widgets/MainFooter";
import MainPageLayout from "./MainPageLayout";
import Intro from "../widgets/MainPageContent/Intro";
import ProductivityPowerhouse from "../widgets/MainPageContent/ProductivityPowerhouse";
import MoreWithMaper from "../widgets/MainPageContent/MoreWithMaper";


import MaperPriced from "../widgets/MainPageContent/MaperPriced";
import GetStartedWithMaper from "../widgets/MainPageContent/GetStartedWithMaper";

import LogRegPage from "./LogRegPage";

const MainPage = () => {
  return (
    <MainPageLayout 
        header={<MainHeader />} 
        footer={<MainFooter />}
    >
      <Intro />
      <ProductivityPowerhouse />
      <MoreWithMaper />
      <MaperPriced />
      <GetStartedWithMaper />
      <LogRegPage />
    </MainPageLayout>
  );
};

export default MainPage;
