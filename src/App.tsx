import React from "react";
import "./App.css";
import Header from "./common/header/Header";
import HeroSection from "./components/hero-section/HeroSection";

function App() {
  return (
    <div className="w-full h-full section-hidden">
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
