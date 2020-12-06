import React from "react";
import Category from "../../components/category/Category";
import News from "../../components/news/News";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main col">
          <h1>Main COntent</h1>
          <Category />
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
