import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const data = [
  {
      id:1,
      title:"GirlsinAI Hackathon",
      description:"GirlsinAI Hackathon in cooperation with Teens in AI 11 - 12 March.",
      image: 'assets/img/teensai.jpeg',
      class: "yellow_bg",
      URL1: "Check now"
  },
  {
    id:2,
    title:"HackonFest For Kids",
    description:"One Month Long Bug Bounty Learning Bootcamps for Kids.",
    image: 'assets/img/Hackonfest2020logo.png',
    class: "yellow_bg",
    URL2: "Check now"
},

{
  id:3,
    title:"Zero Waste Challenge",
    description:"Go Kidogo means small steps - big change.",
    image: 'assets/img/gokid1.jpeg',
    class: "yellow_bg",
    URL: "Check now"
    
},


]
export default function Events() {
  const size = useWindowSize();
  let item = 3;
  if(size.width < 500){
        item = 1;
  }else if(size.width < 767){
        item = 2;
  }else if(size.width < 991){
        item = 3;
  }
  return (
      <div>
        <section className="fs-smart-sc">
            <div className="container-fluid">
              <div className="row text-center">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <h3 className="fs-heading">Events</h3>
                        <Container >
                        <Row >
                                <Col><h4 className="fs-subheading">We organize events like hackathons, robotic competitions or bar camps both online and offline.</h4></Col>
                                <Col><h4 className="fs-subheading">We work interdisciplinary and combine both digital tools, hands-on methodology. <br/>We believe that the combination of analog and digital, tradition and modernity, is key to learning.  <br/>If you want to organize an event contact us!<br></br> Also check out our workshops and contact us for further information.
</h4></Col>
                                
                            </Row>
                    </Container>
                  </div>
                </div>
              </div>
            <div className="fs-smartnative-carousel container-fluid">
              <div className="row text-center">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                <Container>
                    <Row>
                        <h4 className="fs-heading ">Upcoming Events</h4>
                            {/* <Col><h4 className="fs-subheading">GirlsinAI Hackathon in cooperation with Teens in AI 11 - 12 March</h4></Col> */}
                            <OwlCarousel
                                  className="owl-theme"
                                  // loop
                                  
                                   
                                  margin={10}
                                  nav={true}
                                  items = {item}
                                  autoplay = {true}
                                  // autoplayTimeout = {3000}
                                  
                              >
                            {data.map((item) => (
                              <div className="owl-theme" key={item.id}>
                                <div className="item" >
                                    <div className="inbox">
                                        <figure className={item.class}>
                                            <img class="img-size" src={item.image} />
                                           
                                        </figure>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                        <a  href="https://gokidogo.de">{item.URL}</a>
                                        <a href="https://hackonfest.com">{item.URL2}</a>
                                        
                                    </div>
                                </div>
                              </div>
                              ))}
                          </OwlCarousel>
                        </Row>
                </Container>
              </div>
            </div>
        </div>
      </section> 
    </div>
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
