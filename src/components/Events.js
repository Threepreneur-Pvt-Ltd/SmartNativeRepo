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
      image: 'assets/img/student2.png',
      class: "skyblue_bg"
  },
  {
    id:2,
    title:"HackonFest For Kids",
    description:"One Month Long Bug Bounty Learning Bootcamps for Kids.",
    image: 'assets/img/Hackonfest2020logo.png',
    class: "yellow_bg"
},

]
export default function Events() {
  const size = useWindowSize();
  let item = 2;
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
                        <Row className="inbox">
                                <Col><h4 className="fs-subheading">We organize both online and offline events for schools,companies,communal authorities and institutions.</h4></Col>
                                <Col><h4 className="fs-subheading">We try to work interdisciplinary and combine both digital tools,hands-on technology tools<br/> or simple things like actual wood, colors or up-cycling materials because we believe that the combination of all this is key to learning. <br/>In our Innovation Labs we can create pretty much everything. If you want to organize an event contact us!</h4></Col>
                                
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
                                  // autoplay = {true}
                                  autoplayTimeout = {3000}
                              >
                            {data.map((item) => (
                              <div className="owl-theme " key={item.id}>
                                <div className="item" >
                                    <div className="inbox">
                                        <figure className={item.class}>
                                            <img class="img-size" src={item.image} />
                                        </figure>
                                        <h3>{item.title}</h3>
                                        <p >{item.description} </p>
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
