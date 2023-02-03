import React from "react";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";
import { tns } from "tiny-slider/src/tiny-slider";

function HeroArea() {
  const slider = function () {
    var heroSlider = document.querySelectorAll(".hero-slider");
    if (heroSlider.length > 0) {
      var heroSlider = tns({
        container: ".hero-slider",
        items: 1,
        mode: "carousel",
        autoplay: true,
        animateIn: "tns-fadeIn",
        animateOut: "tns-fadeOut",
        speed: 1000,
        nav: false,
        controls: false,
        autoplayButtonOutput: false,
      });
    }
  };
  slider();

  var elements;
  var windowHeight;

  function init() {
    elements = document.querySelectorAll(".ftco-about-section");
    windowHeight = window.innerHeight;
  }

  var counter = function () {
    function countUp(elem) {
      var current = elem.innerHTML;

      var timeIntervalBeforeIncrement = 2000 / elem.getAttribute("data-count");

      var interval = setInterval(increase, timeIntervalBeforeIncrement);

      function increase() {
        elem.innerHTML = current++;
        if (current > elem.getAttribute("data-count")) {
          clearInterval(interval);
        }
      }
    }

    var span = document.querySelectorAll("[id^='count']");

    var i = 0;
    for (i = 0; i < span.length; i++) {
      countUp(span[i]);
    }
  };

  function checkPosition() {
    var i;
    for (i = 0; i < elements.length; i++) {
      var element = elements[i];
      var positionFromTop = elements[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        if (!element.classList.contains("viewed")) {
          element.classList.add("viewed");
          counter();
        } else {
          if (element.classList.contains("viewed")) {
          }
        }
        // console.log('igo');
      }
    }
  }
  window.addEventListener("scroll", checkPosition);
  window.addEventListener("resize", init);

  init();
  checkPosition();

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
