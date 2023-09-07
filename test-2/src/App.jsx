import { useState } from "react";
import Navbar from "./components/Navbar";
import ContactSection from "./sections/ContactSection";
import PricingSection from "./sections/PricingSection";
import AboutSection from "./sections/AboutSection";
import { LoginModal } from "./components/LoginModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="scroll-smooth">
      <LoginModal open={showModal} setOpen={setShowModal} />
      <Navbar handleShowModal={() => setShowModal(true)} />
      <div className="mx-auto pt-4">
        <AboutSection />
        <PricingSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;
