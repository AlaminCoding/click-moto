import React from "react";
import Banner from "./components/banner/banner";
import Gallery from "./components/gallery/gallery";
import Navbar from "./components/Navbar/navbar";
import SliderMoto from "./components/slider/slider";
import "./css/style.css";

function App() {
  return (
    <section>
      <Navbar />
      <Banner />
      <div className="photo-wrapper">
        <SliderMoto />
        <Gallery />
      </div>
    </section>
  );
}

export default App;
