"use client";
import BlogSection from "./component/Blog";
import FAQ from "./component/Faq";
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
      <FAQ />
      <BlogSection />
    </>
  );
};

export default HomePage;
