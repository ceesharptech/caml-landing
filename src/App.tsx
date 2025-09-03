import "./App.css";
import TestimonialSection from "./components/TestimonialSection";
import CTASection from "./components/CTASection";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="space-y-20">
      <div className="flex flex-col gap-22 relative mx-auto md:gap-28 p-[2rem] max-w-7xl">
        <Navbar />
        <Hero />
        <Features />
        <TestimonialSection />
        <Pricing />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
