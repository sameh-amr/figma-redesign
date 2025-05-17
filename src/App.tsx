import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import FaqSection from "./components/FaqSection";
import ShowcaseSection from "./components/ShowcaseSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <StatsSection />
      <FaqSection />
      <ShowcaseSection />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
