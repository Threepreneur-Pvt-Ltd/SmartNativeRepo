import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function MainSlider() {
  return (
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            items = {1}
            autoplay = {true}
            autoplayTimeout = {5000}
        >
              <div className="item">
                <div className="inbox">
                    <div className="fs-banner-caption">
                        <h2>Competitive Advantages</h2>
                        <p>The Smart Natives organise a online and a offline workshops platform that can be freely selected depending on your interests. They allow an intensive A company with strong competitive advantages are likely to survive in the long term.</p>
                    </div>
                    <div className="fs-bannerthumb">
                        <img src="assets/img/slider1.png" alt="Smart Natives Slider Image" />
                    </div>
                </div>
              </div>
              <div className="item slide2">
                <div className="inbox">
                  <div className="fs-banner-caption">
                      <h2>The Journey from Digital to Smart</h2>
                  </div>
                  <div className="fs-bannerthumb">
                      <img src="assets/img/slider2.png" alt="Smart Natives Slider Image" />
                  </div>
                </div>
              </div>
              <div className="item slide3">
                <div className="inbox">
                  <div className="fs-banner-caption">
                      <p>We <br/> Students are the future! <br/> Poets, thinkers, smart natives!</p>
                      <a href="#." className="btn">Learn More</a>
                  </div>
                  <div className="fs-bannerthumb">
                      <img src="assets/img/slider3.png" alt="Smart Natives Slider Image" />
                  </div>
                </div>
              </div>
        </OwlCarousel>
  );
}

export default MainSlider;
