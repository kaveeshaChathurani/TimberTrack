import React from "react";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import Features from './components/features/Features';
import Service from './components/service/Service';
import Selects from "./components/selects/Selects";
import SelectImg from "./components/selectImg/SelectImg";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Service/>
      <Selects />
      <SelectImg />
      <ImgCarousel />
      <Footer />
    </div>
  );
}

export default App;
