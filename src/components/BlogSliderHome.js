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

  const data = [
      {
          id:1,
          title:"Smart Communication",
          description:"Creating state-of-the-art devices to improve distribution, management and purification of water.",
          image: 'assets/img/slider/1.png',
          class: "skyblue_bg"
      },
      {
          id:2,
          title:"Healthcare & Biomedical devices",
          description:"Designing devices that would help in managing healthcare better.",
          image: 'assets/img/slider/2.png',
          class: "yellow_bg"
      },
      {
          id:3,
          title:"Agriculture Rural Development",
          description:"Designing devices keeping in mind the need to enhance the primary sector of India Agriculture and our Rural Population.",
          image: 'assets/img/slider/7.png',
          class: "blue_bg"
      },
      {
          id:4,
          title:"Smart Vehicles",
          description:"Need to Create intelligent devices to improve commutation sector, transportation and etc.",
          image: 'assets/img/slider/3.png',
          class: "yellow_bg"
      },
      {
          id:5,
          title:"Food Processing",
          description:"Creating state-of-the-art solutions to manage and process our agriculture produce.",
          image: 'assets/img/slider/6.png',
          class: "skyblue_bg"
      },
      {
          id:6,
          title:"Robotics and Drones",
          description:"Need to design drones and robots that can solve some of the pressing challenges of medical emergencies.",
          image: 'assets/img/slider/8.png',
          class: "yellow_bg"
      },
      {
          id:7,
          title:"Waste management",
          description:"Creating state-of-the-art devices to improve distribution, management and purification of water.",
          image: 'assets/img/slider/4.png',
          class: "blue_bg"
      },
      {
          id:8,
          title:"Clean water",
          description:"Creating state-of-the-art devices to improve distribution, management and purification of water.",
          image: 'assets/img/slider/5.png',
          class: "yellow_bg"
      },
      {
          id:9,
          title:"Renewable Energy",
          description:"Innovative ideas that help manage and generate renewable sources more efficiently.",
          image: 'assets/img/slider/8.png',
          class: "skyblue_bg"
      },
      {
          id:10,
          title:"Security Surveillance",
          description:"Creating state-of-the-art safety and security technologies for India.",
          image: 'assets/img/slider/9.png',
          class: "yellow_bg"
      },
      {
          id:11,
          title:"Miscellaneous",
          description:"Technology ideas in tertiary sectors like Hospitality, Financial Services, Entertainment, Tourism and Retail.",
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
