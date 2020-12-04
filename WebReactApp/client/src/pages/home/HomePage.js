import React from "react";
import News from "../../components/news/News";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="main col">
          <h1>Main COntent</h1>
          <section class="jumbotron text-center">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <h1>List group item heading</h1>
                  <p class="lead text-muted">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <p>
                    <a
                      class="btn btn-primary my-2"
                      asp-controller="Announcement"
                      asp-action="AddAnnouncement"
                    >
                      Button
                    </a>
                  </p>
                </div>
                <div class="carousel-item  ">
                  <h1>List group item heading</h1>
                  <p class="lead text-muted">
                    Donec id elit non mi porta gravida at eget metus. Maecenas
                    sed diam eget risus varius blandit.
                  </p>
                  <p>
                    <a
                      class="btn btn-primary my-2"
                      id="register"
                      asp-area="Identity"
                      asp-page="/Account/Register"
                    >
                      Button
                    </a>
                    <a
                      class="btn btn-secondary my-2"
                      id="login"
                      asp-area="Identity"
                      asp-page="/Account/Login"
                    >
                      Button
                    </a>
                  </p>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span class="carousel-control-prev" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span class="carousel-control-next" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
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
