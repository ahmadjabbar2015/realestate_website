import React from "react";

function HeroArea() {
  return (
    <section className="slider-hero">
      <div className="overlay"></div>
      <div className="hero-slider">
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-center js-fullheight"
              style={{ backgroundImage: "url(images/bg_1.jpg)" }}
            >
              <div className="container-xl">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-xl-6">
                    <div
                      className="text text-center"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <h2>Your Property Is Our Priority</h2>
                      <p className="mb-5">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary px-5 py-3">
                          Learn More
                          <span className="ion ion-ios-arrow-round-forward"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-center justify-content-center js-fullheight"
              style={{ backgroundImage: "url(images/bg_2.jpg)" }}
            >
              <div className="container-xl">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-xl-6">
                    <div
                      className="text text-center"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <h2>Let Your Home Be Unique &amp; Stylist</h2>
                      <p className="mb-5">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary px-5 py-3">
                          Learn More
                          <span className="ion ion-ios-arrow-round-forward"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="work">
            <div
              className="img d-flex align-items-center justify-content-center js-fullheight"
              style={{ backgroundImage: "url(images/bg_3.jpg)" }}
            >
              <div className="container-xl">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-xl-6">
                    <div
                      className="text text-center"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <h2>Modern House Make Better Life</h2>
                      <p className="mb-5">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </p>
                      <p>
                        <a href="#" className="btn btn-primary px-5 py-3">
                          Learn More
                          <span className="ion ion-ios-arrow-round-forward"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroArea;
