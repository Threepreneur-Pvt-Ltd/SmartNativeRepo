import React from 'react';
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import IntlMessages from '../helpers/IntlMessages';

export default function SkillZone() {
  return (
    <div>
        <section className="fs-smart-sc">
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <div className="comment_img leftside1">
                        <img src="assets/img/round1.png" className="blue_img" />
                        <img src="assets/img/round2.png" className="skyblue_img" />
                    </div>
                    <h2 className="fs-heading">Smart Natives Skill Zone</h2>
                <img src="assets/img/image-map.png" className="img-map"/>
                    <div className="comment_img rightside">
                        <img src="assets/img/round1.png" className="blue_img" />
                        <img src="assets/img/round2.png" className="skyblue_img" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <Container >
                            <Row >
                                <Col><h4 className="fs-subheading"><IntlMessages id="skillzone.col1.a1"/><br></br><IntlMessages id="skillzone.col1.a2"/> <br></br> <IntlMessages id="skillzone.col1.a3"/> <br></br><IntlMessages id="skillzone.col1.a4"/></h4></Col>
                                <Col><h4 className="fs-subheading"> <IntlMessages id="skillzone.col2"/> </h4></Col>
                                <Col><p className="darkblue"><strong> <IntlMessages id="skillzone.col3"/></strong></p></Col>
                                <Col><p className="darkblue"><strong><IntlMessages id="skillzone.col4"/></strong> </p></Col>
                                <Col><p className="darkblue"><strong><IntlMessages id="skillzone.col5"/></strong></p></Col>
                                <Col><h4 className="fs-subheading"> <IntlMessages id="skillzone.col6"/> </h4></Col>
                                <Col><h4 className="fs-subheading"> <IntlMessages id="skillzone.col7.a1"/><br/>  <IntlMessages id="skillzone.col7.a2"/> </h4></Col>
                                {/* <Col><h4 className="fs-subheading">Afterwards we give students the chance to apply for an internship.</h4></Col> */}
                                <Col><h4 className="fs-subheading"> <IntlMessages id="skillzone.col8"/> </h4></Col>
                            </Row>
                    </Container>
                </div>
            </div>
        </div>
    </section> 
    <section className="fs-explore-sc">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2 className="fs-heading"><IntlMessages id="skill.subheading"/></h2>
                </div> 
            </div>

            <div className="row">

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="inbox">
                        <figure><img src="assets/img/challange5.png" /></figure>
                        <h3><IntlMessages id="skill.image1.title"/></h3>
                        <p><IntlMessages id="skill.image1.description"/></p>  
                    </div>
                    <div className="inbox">
                        <figure><img src="assets/img/challange1.png" /></figure>
                        <h3><IntlMessages id="skill.image2.title"/></h3>
                        <p><IntlMessages id="skill.image2.description"/> </p>  
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="inbox">
                        <figure><img src="assets/img/challange4.png" /></figure>
                        <h3><IntlMessages id="skill.image3.title"/></h3>
                        <p><IntlMessages id="skill.image3.description"/></p>  
                    </div>
                    <div className="inbox">
                        <figure><img src="assets/img/challange6.png" /></figure>
                        <h3><IntlMessages id="skill.image4.title"/></h3>
                        <p><IntlMessages id="skill.image4.description"/> </p>  
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="inbox">
                        <figure><img src="assets/img/challange3.png" /></figure>
                        <h3><IntlMessages id="skill.image5.title"/></h3>
                        <p><IntlMessages id="skill.image5.description"/></p>  
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="inbox">
                        <figure><img src="assets/img/challange2.png" /></figure>
                        <h3><IntlMessages id="skill.image6.title"/></h3>
                        <p><IntlMessages id="skill.image6.description"/></p>  
                    </div>
                    <div className="inbox">
                        <figure><img src="assets/img/challange7.png" /></figure>
                        <h3><IntlMessages id="skill.image7.title"/></h3>
                        <p><IntlMessages id="skill.image7.description"/></p>  
                    </div>
                </div>

            </div>
        </div>
    </section>
   
    <section className="fs-explore-globally">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    {/* <h2 className="fs-heading">Explore Smart Natives Globally</h2> */}
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <form action="" className="text-center">
                        <Button variant="outline-success" href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC">Post Challenges</Button>
                    </form>
                    {/* <img src="assets/img/custom_map.png" /> */}
                  </div>
             </div>
        </div>
    </section>
    </div>
  );
}
