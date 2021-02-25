import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function Badges() {
  return (
    <div>
        <section className="fs-smart-sc">
          <div className="container-fluid">
              <div className="row text-center">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                      <h3 className="fs-heading">BADGES</h3>
                      <Container >


                      <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                <div className="comment_img leftside">
                                    <img src="assets/img/round1.png" className="blue_img" />
                                    <img src="assets/img/round2.png" className="skyblue_img" />
                                </div>
                            <img src="assets/img/pages/3.png" className="img-map"/>
                            </div>
                                <div className="comment_img rightside">
                                    <img src="assets/img/round1.png" className="blue_img" />
                                    <img src="assets/img/round2.png" className="skyblue_img" />
                                </div>
                        </div>

                        <Row >
                              <Col><h4 className="fs-subheading">By completing a Smart Natives challenge or an upskilling project in our Skill Zone participants receive badges to <br></br>showcase their skills.</h4></Col>
                              <Col><h4 className="fs-subheading">We use elements of gamification to make progress visible and motivating. The badges prove which skills <br></br> and methods each student earned by completing a case or a challenge. </h4></Col>
                              <Col><h4 className="fs-subheading">We cooperate with companies and institutions that have an interest in diverse teams of young innovators and respect<br></br> the energy and creativity of young people.<br></br> As a Smart Native you learn to work: collaboratively and future-oriented in a safe environment.</h4></Col>
                          </Row>
                         
                  </Container>
                </div>
          </div>
        </div>
    </section> 
    </div>
  );
}
