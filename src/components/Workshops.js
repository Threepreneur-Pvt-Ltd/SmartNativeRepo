import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Workshops() {
  return (
    <div>
        <section className="fs-smart-sc">
          <div className="container-fluid">
              <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <Container >
                           <h3 className="fs-heading">Workshops</h3>

                           <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <div className="comment_img leftside">
                                    <img src="assets/img/round1.png" className="blue_img" />
                                    <img src="assets/img/round2.png" className="skyblue_img" />
                                </div>
                            <img src="assets/img/pages/2.png" className="img-map"/>
                            </div>
                                <div className="comment_img rightside">
                                    <img src="assets/img/round1.png" className="blue_img" />
                                    <img src="assets/img/round2.png" className="skyblue_img" />
                                </div>
                        </div>

                        <Row >
                            <Col><h4 className="fs-subheading">Smart Natives organizes co-creation workshops for modern methods, IT-skills and Digital Literacy.</h4></Col>
                            <Col><h4 className="fs-subheading">These workshops can be used to upskill but also to inform and shed light on topics like Cybersecurity, AI Ethics or simply Algorithms. </h4></Col>
                            <Col><h4 className="fs-subheading">Our workshops are creative and engaging because we combine our experience, our diverse background and<br/> our passion to empower and inform so that everybody is competent in the digital world.</h4></Col>
                            <Col><h4 className="fs-subheading">We help both companies and students to innovate their upskilling and education methods. </h4></Col>
                            <Col><h4 className="fs-subheading">Our workshops can be hosted online, in your company or in a school or institution.<br></br> Contact us for further information! </h4></Col>
                          </Row>
                        
                      
                </Container>
                </div>
              </div>
        </div>
    </section> 
    </div>
  );
}
