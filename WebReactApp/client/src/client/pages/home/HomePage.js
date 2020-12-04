import React from "react";
import News from "../../components/news/News";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main col">
          <h1>Main COntent</h1>
          <section className="jumbotron text-center">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <h1>List group item heading</h1>
                  <p className="lead text-muted">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <p>
                    <a
                      className="btn btn-primary my-2"
                    >
                      Button
                    </a>
                  </p>
                </div>
                <div className="carousel-item  ">
                  <h1>List group item heading</h1>
                  <p className="lead text-muted">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <p>
                    <a
                      className="btn btn-primary my-2"
                    >
                      Button
                    </a>
                    <a
                      className="btn btn-secondary my-2"
                    >
                      Button
                    </a>
                  </p>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span className="carousel-control-prev" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span className="carousel-control-next" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </section>
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
