import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function InnovationLab() {
  return (
    <div>
        <section className="fs-smart-sc">
        <div className="container-fluid">
              <div className="row text-center">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                    <Container >
                          <h3 className="fs-heading">INNOVATION LAB</h3>
                        <Row className="inbox">
                            <Col><h4 className="fs-subheading">A maker space is a place where you can explore and experiment both digital and analog.</h4></Col>
                            <Col><h4 className="fs-subheading">We have one maker space in Bad Vilbel and the mobileTecTruck which covers events all over Germany.</h4></Col>
                            
                            <Col><h4 className="fs-subheading">Our innovation lab is a shelter and a room for ideas both digital and analog that gives Smart Natives a second home in the real world.<br/>Coworking space for our local partners and of course an out-of-school learning center where school classes can work on extracurricular projects.</h4></Col>
                           
                        </Row>
                </Container>
                </div>
              </div>
        </div>
    </section> 
    </div>
  );
}
