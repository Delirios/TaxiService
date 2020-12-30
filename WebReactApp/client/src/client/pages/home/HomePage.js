import React from "react";
import CarouselComponent from "../../components/carousel/Carousel";
import News from "../../components/news/News";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid home-background">
      <div className="row">
        <div className="main col">
          <CarouselComponent />
        </div>
        <div className="news col-3">
          <News />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
