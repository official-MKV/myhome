import React from "react";
import { Routes, Route } from "react-router-dom";
import Properties from "./Properties";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchSection from "./components/SearchSection";
import NewListings from "./components/NewListing";
import AboutUs from "./components/AboutUs";
import FeaturedListings from "./components/FeaturedListings";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQsection";
import GetInTouchSection from "./components/GetInTouchSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Properties" element={<Properties />} />
      </Routes>
      <Hero />
      <SearchSection />
      <NewListings />
      <AboutUs />
      <FeaturedListings />
      <TestimonialSection />
      <FAQSection />
      <GetInTouchSection />
      <FooterSection />
    </div>
  );
};

export default App;
