"use client";
import FeatureSection from "./component/Feature";
import HowItWorks from "./component/HowItWork";
import IntegrationSection from "./component/Integration";
import Price from "./component/Price";

const HomePage = () => {
  return (
    <>
      <FeatureSection />
      <HowItWorks />
      <IntegrationSection />
      <Price />
    </>
  );
};

export default HomePage;
