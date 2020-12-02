import React from "react";
import News from "../../components/news/News";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main col">
          <h1>Main COntent</h1>
        </div>
        <div className="news col-2 ">
          <News />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
