"use client"
import React from 'react';
import Wrapper from '@/layout/Wrapper';
import ScrollIndicator from '@/components/common/ScrollIndicator';
import HeaderSix from '@/layout/headers/HeaderSix';
import HeaderOne from '@/layout/headers/HeaderOne';
import BannerHomeOne from './BannerHomeOne';
import ServicesAreaHomeFour from './ServicesAreaHomeFour';
import BrandAreaHomeFour from './BrandAreaHomeFour';
import FooterFour from '@/layout/footers/FooterFour';
import ContactAreaHomeFour from './ContactAreaHomeFour';
import CounterAreaHomeFour from './CounterAreaHomeFour';
import PortfolioAreaHomeFour from './PortfolioAreaHomeFour';
import TestimonialAreaHomeOne from './TestimonialAreaHomeOne';
import PricingAreaHomeFour from './PricingAreaHomeFour';
import useMediaQuery from './useMediaQuery';

const HomeOne: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 529px)');

  return (
    <Wrapper>
      <ScrollIndicator />
      {isMobile ? <HeaderOne /> : <HeaderSix />}
      <main className="overflow-hidde">
        <BannerHomeOne />
        <ServicesAreaHomeFour />
        <CounterAreaHomeFour />
        <BrandAreaHomeFour />
        <PortfolioAreaHomeFour />
        <PricingAreaHomeFour />
        <TestimonialAreaHomeOne />
        <ContactAreaHomeFour />
      </main>
      <FooterFour />
    </Wrapper>
  );
};

export default HomeOne;
