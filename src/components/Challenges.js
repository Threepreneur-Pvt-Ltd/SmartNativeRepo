import React from 'react';
import BlogSliderHome from '../components/BlogSliderHome.js';
import { Container, Row, Col } from 'react-bootstrap';
import IntlMessages from '../helpers/IntlMessages';
import { useTranslation } from "react-i18next";


const data = [{
    "title": <IntlMessages id="challenge.subtitle1"/>,
    "description": <IntlMessages id="challenge.subdescription1"/>
},
{
    "title": <IntlMessages id="challenge.subtitle2"/>,
    "description": <IntlMessages id="challenge.subdescription2"/>
},
{
    "title": <IntlMessages id="challenge.subtitle3"/>,
    "description": <IntlMessages id="challenge.subdescription3"/>
},
{
    "title": <IntlMessages id="challenge.subtitle4"/>,
    "description": <IntlMessages id="challenge.subdescription4"/>
},
{
    "title": <IntlMessages id="challenge.subtitle5"/>,
    "description": <IntlMessages id="challenge.subdescription5"/>
}]
export default function Challenges() {
    
  return (
    <div>
        <section className="fs-smart-sc">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h3 className="fs-heading">Smart Natives <IntlMessages id="menu.challenges" /></h3>
                    {/* <h4 className="fs-heading">Themes</h4> */}
                    {/* <h3 className="fs-subheading"> No Problem is too Big.. No Problem is Too Small</h3> */}
                    <div className="fs-smartnative-carousel ">
                        <BlogSliderHome />
                    </div>
                </div> 
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <Container >
                <Row className="gap">
                   <p><strong><IntlMessages id="challenge.heading1"/><br></br><IntlMessages id="challenge.heading2"/></strong></p>
                    <p><strong><IntlMessages id="challenge.heading3"/></strong></p>
<br></br>                    
            <p><strong><IntlMessages id="challenge.heading4"/> </strong></p>
                    <p><strong> <IntlMessages id="challenge.heading5"/></strong></p>
                    </Row>
                {data.map((item, i)=>(
                        <Row >
                            <Col><h4 className="fs-subheading darkblue" >{item.title} : {item.description}</h4></Col>
                        </Row>
                    ))}
                </Container>
                </div>
             </div>
        </div>
    </section>
    {/* <section className="fs-dashboard">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2 className="fs-heading">Dashboard</h2>
                </div> 
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <img src="assets/img/dashboard_img.png" />
                </div>
            </div>
        </div>
    </section> */}
    </div>
  );
}
