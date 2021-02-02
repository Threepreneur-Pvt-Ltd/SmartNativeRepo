import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function BlogSliderHome() {
 
  const size = useWindowSize();
  let item = 4;
  if(size.width < 500){
        item = 1;
  }else if(size.width < 767){
        item = 2;
  }else if(size.width < 991){
        item = 3;
  }

  return (
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav={true}
            items = {item}
            autoplay = {true}
            autoplayTimeout = {3000}
        >
          <div className="item">
                        <div className="inbox">
                            <figure className="yellow_bg">
                                <img src="assets/img/icon2.png" />
                            </figure>
                            <h4>Sustainability</h4>
                            <p>avoidance of the depletion of natural resources in order to maintain an ecological balance. <br/> "the pursuit of global environmental sustainability"</p>
                            <p>Every interaction will have different outcomes defined, which are important deliverables of the innovation process… </p>
                            <a href="#." className="btn">View more</a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="inbox">
                            <figure className="blue_bg">
                                <img src="assets/img/icon5.png" />
                            </figure>
                            <h4>Hybrid Challenges</h4>
                            <p>avoidance of the depletion of natural resources in order to maintain an ecological balance. <br/> "the pursuit of global environmental sustainability"</p>
                            <p>Every interaction will have different outcomes defined, which are important deliverables of the innovation process… </p>
                            <a href="#." className="btn">View more</a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="inbox">
                            <figure className="skyblue_bg">
                                <img src="assets/img/icon3.png" />
                            </figure>
                            <h4>Innovative Ideas</h4>
                            <p>avoidance of the depletion of natural resources in order to maintain an ecological balance. <br/> "the pursuit of global environmental sustainability"</p>
                            <p>Every interaction will have different outcomes defined, which are important deliverables of the innovation process… </p>
                            <a href="#." className="btn">View more</a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="inbox">
                            <figure className="yellow_bg">
                                <img src="assets/img/icon4.png" />
                            </figure>
                            <h4>AI & Robotics</h4>
                            <p>avoidance of the depletion of natural resources in order to maintain an ecological balance. <br/> "the pursuit of global environmental sustainability"</p>
                            <p>Every interaction will have different outcomes defined, which are important deliverables of the innovation process… </p>
                            <a href="#." className="btn">View more</a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="inbox">
                            <figure className="blue_bg">
                                <img src="assets/img/icon6.png" />
                            </figure>
                            <h4>Futurology </h4>
                            <p>avoidance of the depletion of natural resources in order to maintain an ecological balance. <br/> "the pursuit of global environmental sustainability"</p>
                            <p>Every interaction will have different outcomes defined, which are important deliverables of the innovation process… </p>
                            <a href="#." className="btn">View more</a>
                        </div>
                    </div>

                    <div className="item">
                        <div className="inbox">
                            <figure className="skyblue_bg">
                                <img src="assets/img/icon7.png" />
                            </figure>
                            <h4>Code Race</h4>
                            <p>avoidance of the depletion of natural resources in order to maintain an ecological balance. <br/> "the pursuit of global environmental sustainability"</p>
                            <p>Every interaction will have different outcomes defined, which are important deliverables of the innovation process… </p>
                            <a href="#." className="btn">View more</a>
                        </div>
                    </div>
        </OwlCarousel>
  );
}

// Hook
function useWindowSize() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []); 

  return windowSize;
}

export default BlogSliderHome;
