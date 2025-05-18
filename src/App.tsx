import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import FaqSection from "./components/FaqSection";
import ShowcaseSection from "./components/ShowcaseSection";
import PricingSection from "./components/PricingSection";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import React from "react";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <StatsSection />
                <FaqSection />
                <ShowcaseSection />
                <PricingSection />
                <Footer />
              </>
            }
          />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
