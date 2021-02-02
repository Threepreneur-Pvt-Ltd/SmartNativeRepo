import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function TeamSlider() {
  return (
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav={true}
            items = {1}
        >
          <div className="item">  
            <div className="inbox">
            <img src="assets/img/testi1.png" />
                <p>Smart Natives connected me to the best builders who I learn from every day. I owe a lot of who I am to this community.</p>
                <h3>Rinku Sharma</h3>
            </div>
        </div>
        <div className="item">  
            <div className="inbox">
            <img src="assets/img/testi1.png" />
            <p>Smart Natives connected me to the best builders who I learn from every day. I owe a lot of who I am to this community.</p>
            <h3>Rinku Sharma</h3>
            </div>
        </div>
        <div className="item">  
            <div className="inbox">
            <img src="assets/img/testi1.png" />
            <p>Smart Natives connected me to the best builders who I learn from every day. I owe a lot of who I am to this community.</p>
            <h3>Rinku Sharma</h3>
            </div>
        </div>
        </OwlCarousel>
  );
}

export default TeamSlider;
