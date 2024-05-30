import Wrapper from "@/layout/Wrapper"; 
import ScrollIndicator from "@/components/common/ScrollIndicator"; 
import HeaderSix from "@/layout/headers/HeaderSix"; 
import HeaderOne from "@/layout/headers/HeaderOne"; 
import BannerHomeOne from "./BannerHomeOne"; 
import ServicesAreaHomeFour from "./ServicesAreaHomeFour";
import BrandAreaHomeFour from "./BrandAreaHomeFour";
import FooterFour from "@/layout/footers/FooterFour"; 
import ContactAreaHomeFour from "./ContactAreaHomeFour";
import CounterAreaHomeFour from "./CounterAreaHomeFour";
import PortfolioAreaHomeFour from "./PortfolioAreaHomeFour";
import Header from '@/components/header';
const HomeOne = () => {
  return (
    <Wrapper>
      <ScrollIndicator /> 
      <HeaderSix /> 
      <main className="overflow-hidden">
        <BannerHomeOne />             
        <ServicesAreaHomeFour />
        <CounterAreaHomeFour />
        <BrandAreaHomeFour />
        <PortfolioAreaHomeFour />
        <ContactAreaHomeFour />        
      </main>
      <FooterFour />
    </Wrapper>
  );
};

export default HomeOne;
