import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactSection from "./sections/ContactSection";
import PricingSection from "./sections/PricingSection";
import AboutSection from "./sections/AboutSection";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto py-4">
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
