import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from "react-i18next";
import IntlMessages from '../helpers/IntlMessages';

const data = [
  {
      id:1,
      title:"Frankfurt Datascience Youth Hackathon",
      description:"",
      image: 'assets/img/frankurt.jpg',
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
                                <Col><h4 className="fs-subheading"><IntlMessages id="event.col1"/></h4></Col>
                                <Col><h4 className="fs-subheading"><IntlMessages id="event.col2.a1"/>
                                 <br/> <IntlMessages id="event.col2.a2"/> 
                                 <br/> <IntlMessages id="event.col2.a3"/>
                                 <br></br> <IntlMessages id="event.col2.a4"/>
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
                        <h4 className="fs-heading "><IntlMessages id="event.heading"/></h4>
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
                                        {/* <a href="https://www.eventbrite.co.uk/e/girlsinai2021-hackathon-frankfurt-tickets-137136102775?utm_campaign=new_attendee&utm_medium=email&utm_source=eb_email&utm_term=event_name">{item.URL1}</a> */}
                                        
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
