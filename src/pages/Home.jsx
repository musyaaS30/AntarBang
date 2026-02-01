import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Coverage from "../components/Converage";
import Pricing from "../components/Pricing";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Coverage />
      <Pricing />
      {/* <WhyChooseUs /> */}
      <Testimonials />
      <CTA />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
  