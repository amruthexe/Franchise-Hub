import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ScrollingLogos from './components/ScrollingLogos';
import ContactForm from './components/ContactForm';
import ConnectWithUs from './components/ConnectWithUs';
import './custom-cursor.css';  // Import the custom cursor CSS
import './custom-cursor.js';

const App = () => {
  useEffect(() => {
    // Import and execute the custom cursor script
    const script = document.createElement('script');
    script.src = './custom-cursor.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <ScrollingLogos />
        <Testimonials />
        <ContactForm />
        <ConnectWithUs />
        <Footer />
        <p> made with ❤️ amruthexe</p>
      </div>
    </>
  );
};

export default App;
