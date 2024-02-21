import React from "react";
import "./App.css";
import Header from "./common/header/Header";
import Pricing from "./common/pricing/Pricing";
import HeroSection from "./components/hero-section/HeroSection";
import { CtaSection } from "./components/cta/cta-section";

function App() {
  return (
    <div className='w-full h-full section-hidden'>
      <Header />
      <HeroSection />
      <Pricing />
      <CtaSection
        topInput=' "Transforming ideas into'
        middleInput='digital reality, one line of code'
        bottomInput='at a time"'
      />
    </div>
  );
}

export default App;
