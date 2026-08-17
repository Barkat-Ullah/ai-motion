"use client";
import FeatureSection from "./component/Feature";
import HowItWorks from "./component/HowItWork";
import IntegrationSection from "./component/Integration";

const HomePage = () => {
  return (
    <>
      <FeatureSection />
      <HowItWorks />
      <IntegrationSection/>
    </>
  );
};

export default HomePage;
