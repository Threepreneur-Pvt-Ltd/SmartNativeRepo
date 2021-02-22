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
                        <Row >
                              <Col><h4 className="fs-subheading">By completing a Smart Natives challenge or an Up skill project students receive badges <br/>to showcase their skills to themselves,their family or their potential employers!</h4></Col>
                              <Col><h4 className="fs-subheading">Talent & Skills matter! Students’ progress is visible and they can earn badges and even win prizes. <br/>We cooperate with companies that have an interest in
  diverse teams of young innovators and respect the energy and creativity of young people. <br/>As a Smart Native you learn to work:collaboratively and future-oriented in a safe environment.</h4></Col>
                              
                          </Row>
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
                  </Container>
                </div>
          </div>
        </div>
    </section> 
    </div>
  );
}
