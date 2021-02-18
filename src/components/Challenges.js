import React from 'react';
import BlogSliderHome from '../components/BlogSliderHome.js';
import { Container, Row, Col } from 'react-bootstrap';
const data = [{
    "title": "Students learn hard skills like",
    "description": "Coding, Web Development,UX design, Data Analytics, DigitalMarketing."
},
{
    "title": "Students also learn",
    "description": "Design Thinking, Project Management,Entrepreneurship, methods like Fore sigh."
},
{
    "title": "Content",
    "description": "YOUR INNOVATION and mega trends + global goal."
},
{
    "title": "Teams",
    "description": "Students 14y+ closed shop or open innovation."
},
{
    "title": "Aim",
    "description": "Sustainable prototype for your challenge and visibility of skill set."
}]
export default function Challenges() {
    
  return (
    <div>
        <section className="fs-smart-sc">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h3 className="fs-heading">Smart Natives Challenges</h3>
                    <h4 className="fs-heading">Themes</h4>
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
                <Row>
                    <Col><h3 className="fs-subheading">Together with the Smart Native Team companies or institutions submit innovation challenges.</h3></Col>
                    <Col><h3 className="fs-subheading">Throughout the challenges students are coached and consulted by experienced Smart Natives mentors.<br/>Students can track their progress on the platform.</h3></Col>
                    <Col><h4 className="fs-subheading">Please contact us if you want to submit a challenge, get innovative ideas and help upskill students.</h4></Col>
                    </Row>
                {data.map((item, i)=>(
                        <Row className="inbox">
                            <Col><h4 className="fs-subheading">{item.title} : {item.description}</h4></Col>
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
