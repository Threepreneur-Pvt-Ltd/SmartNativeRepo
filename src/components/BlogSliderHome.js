import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from "react-i18next";
import IntlMessages from '../helpers/IntlMessages';

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

  const data = [
      {
          id:1,
          title:<IntlMessages id="challenge.title1"/>,
          description:<IntlMessages id="challenge.description1"/>,
          image: 'assets/img/slider/1.png',
          class: "skyblue_bg"
      },
      {
          id:2,
          title:<IntlMessages id="challenge.title2"/>,
          description:<IntlMessages id="challenge.description2"/>,
          image: 'assets/img/slider/2.png',
          class: "yellow_bg"
      },
      {
          id:3,
          title:<IntlMessages id="challenge.title3"/>,
          description:<IntlMessages id="challenge.description3"/>,
          image: 'assets/img/slider/7.png',
          class: "blue_bg"
      },
      {
          id:4,
          title:<IntlMessages id="challenge.title4"/>,
          description:<IntlMessages id="challenge.description4"/>,
          image: 'assets/img/slider/3.png',
          class: "yellow_bg"
      },
      {
          id:5,
          title:<IntlMessages id="challenge.title5"/>,
          description:<IntlMessages id="challenge.description5"/>,
          image: 'assets/img/slider/6.png',
          class: "skyblue_bg"
      },
      {
          id:6,
          title:<IntlMessages id="challenge.title6"/>,
          description:<IntlMessages id="challenge.description6"/>,
          image: 'assets/img/slider/8.png',
          class: "yellow_bg"
      },
      {
          id:7,
          title:<IntlMessages id="challenge.title7"/>,
          description:<IntlMessages id="challenge.description7"/>,
          image: 'assets/img/slider/4.png',
          class: "blue_bg"
      },
      {
          id:8,
          title:<IntlMessages id="challenge.title8"/>,
          description:<IntlMessages id="challenge.description8"/>,
          image: 'assets/img/slider/5.png',
          class: "yellow_bg"
      },
      {
          id:9,
          title:<IntlMessages id="challenge.title9"/>,
          description:<IntlMessages id="challenge.description9"/>,
          image: 'assets/img/slider/8.png',
          class: "skyblue_bg"
      },
      {
          id:10,
          title:<IntlMessages id="challenge.title10"/>,
          description:<IntlMessages id="challenge.description10"/>,
          image: 'assets/img/slider/9.png',
          class: "yellow_bg"
      },
      {
          id:11,
          title:<IntlMessages id="challenge.title11"/>,
          description:<IntlMessages id="challenge.description11"/>,
          image: 'assets/img/slider/7.png',
          class: "blue_bg"
      },

  ]

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
            {data.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="inbox">
                            <figure className={item.class}>
                                <img class="img-size" src={item.image} />
                            </figure>
                            <h3>{item.title}</h3>
                            <p >{item.description} </p>
                        </div>
                    </div>
                    ))}
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
