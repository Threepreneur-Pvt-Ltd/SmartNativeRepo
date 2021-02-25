import React from 'react';
import BlogSliderHome from '../components/BlogSliderHome.js';
import { Container, Row, Col } from 'react-bootstrap';
const data = [{
    "title": "Participants learn skills like",
    "description": " Coding, Web Development, UX Design, Data Analytics, Digital Marketing"
},
{
    "title": "Participants also learn ",
    "description": "Design Thinking, Project Management, Entrepreneurship, Methods from Future Studies"
},
{
    "title": "Content",
    "description": "YOUR INNOVATION and megatrends + global goals"
},
{
    "title": "Teams",
    "description": "teenagers and young adults 14y+ closed shop or open innovation"
},
{
    "title": "Aim",
    "description": "sustainable prototype for your challenge and visibility of skillset. "
}]
export default function Challenges() {
    
  return (
    <div>
        <section className="fs-smart-sc">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h3 className="fs-heading">Smart Natives Challenges</h3>
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
                   <p><strong>Skilled professionals are the key to innovation and competitiveness, to growth and employment. <br></br>We see a gap between the shortage of young skilled workers in the job market and the qualification of teenagers and young adults to prepare adequately for later job assignments.</strong></p>
                    <p><strong>Our partners submit innovation challenges after we identified, clarified and set the goal each partner has. The Smart Native Team then creates roadmaps with the cooperating partners to find an individual solution.</strong></p>
<br></br>                    
            <p><strong>Throughout the challenges participants are coached by experienced Smart Natives mentors usually in collaboration with employees of our partners. </strong></p>
                    <p><strong>Please contact us if you want to submit a challenge, get innovative ideas, to upskill your prospective future employees and if you believe in diversity and inclusion. </strong></p>
                    </Row>
                {data.map((item, i)=>(
                        <Row >
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
