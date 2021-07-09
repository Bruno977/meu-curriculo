import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import Pintado from "../../assets/Pintado.jpeg";
import Pirarucu from "../../assets/pirarucu.jpeg";
import Pirapitinga from "../../assets/pirapitinga.jpeg";
import Eu from "../../assets/eu.jpeg";

export default function FishingCarousel() {
  return (
    <Carousel autoPlay infiniteLoop>
      <div>
        <img src={Pintado} alt="Pintado" className="teste" />
      </div>
      <div>
        <img src={Pirarucu} alt="Pirarucu" />
      </div>
      <div>
        <img src={Pirapitinga} alt="Pirapitinga" />
      </div>
      <div>
        <img src={Eu} alt="Bruno Rodrigues" />
      </div>
    </Carousel>
  );
}
