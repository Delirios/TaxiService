import React from "react";
import CarouselComponent from "../../components/carousel/Carousel";
import News from "../../components/news/News";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main col">
          <h1>Main COntent</h1>
          <CarouselComponent />
        </div>
        <div className="news col-3">
          <h1>News COntent</h1>
          <News />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
