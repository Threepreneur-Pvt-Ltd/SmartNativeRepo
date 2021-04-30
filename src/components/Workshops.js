import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import IntlMessages from '../helpers/IntlMessages';

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
                            <Col><h4 className="fs-subheading"><IntlMessages id="workshop.col1"/></h4></Col>
                            <Col><h4 className="fs-subheading"> <IntlMessages id="workshop.col2.a1"/><br></br><IntlMessages id="workshop.col2.a2"/></h4></Col>
                            <Col><h4 className="fs-subheading"><IntlMessages id="workshop.col3.a1"/><br/><IntlMessages id="workshop.col3.a2"/></h4></Col>
                            <Col><h4 className="fs-subheading"><IntlMessages id="workshop.col4"/></h4></Col>
                            <Col><h4 className="fs-subheading"><IntlMessages id="workshop.col5.a1"/><br></br> <IntlMessages id="workshop.col5.a2"/></h4></Col>
                          </Row>
                        
                      
                </Container>
                </div>
              </div>
        </div>
    </section> 
    </div>
  );
}
