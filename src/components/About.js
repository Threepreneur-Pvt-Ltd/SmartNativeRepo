import React from 'react';
import TeamSlider from '../components/TeamSlider.js';
import { Container, Row, Col } from 'react-bootstrap';
import Accordian from '../components/Accordian.js';


export default function About() {
  return (
    <div>
     <section className="fs-smart-sc">
        {/* <div className="container-fluid">
            <div className="row">
               <Container >
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <Row>
                            <h3 className="fs-heading">About Us</h3>    
                            <Col><h4 className="fs-subheading">We are an international team with different domains. <br/>All of us share the passion to work with the younger generation.</h4></Col>
                            <Col><h4 className="fs-subheading">Last year together with a team of students Rinku competed in the biggest German school <br/>Hackathon #wirfuerschule and was one of the15 winner teams out of the 200 teams.</h4></Col>
                            
                        </Row>
                    </div>
                </Container>
            </div>
        </div> */}
        <div className="container-fluid">
            <div className="row">
               <Container >
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <Row>
                            <h3 className="fs-heading">Our Vision</h3>
                            <Col><h4 className="fs-subheading">Smart Natives are prosumers who co-create and inspire people around the globe through the power of sustainable business transformation. We are driving impact across the country to achieve our vision to<br></br><h3 ><strong className="darkblue"> Give every individual the opportunity to attain an excellent skill set and join the journey from Digital to Smart Native. </strong></h3>  </h4></Col>
                            
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    </section>    
    <section className="fs-team-area">
        <div className="container">

            <div className="row">

                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 leftsc">

                    <div className="comment_img">
                        <img src="assets/img/round1.png" className="blue_img" />
                        <img src="assets/img/round2.png" className="skyblue_img" />
                    </div>
                    <div className="fs-team-slideshow">
                        <TeamSlider />
                    </div>

                </div> 


                <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 rightsc">                
                        <h2 className="fs-heading">Passionate Team <br/> Members</h2>
                        {/* <p>The goal of smart Natives is to create functioning software or hardware by the end of the event. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers.</p> */}
                        <p >We are an international team with different domains. All of us share the passion to work with the younger generation.</p>
                       <p >Last year together with a team of students Rinku competed in the biggest German school Hackathon #wirfuerschule and was one of the 15 winner teams out of the 250 teams.<strong> In 2021 Mohammed and Rinku won the 1st. price in the competition "Ideenwettbewerb" of the Frankfurt University of Applied Sciences.</strong> </p>
                        {/* <p>Julian was among these students. Mohammed is a student in university and joined the team shortly after. Adriane, a teacher specialized in career education, supports the team as a link to schools. Constanze advises on all matters of marketing. </p> */}
                </div>

            </div>

        </div>
    </section>

    <section className="fs-partners">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"> 
                    <h2 className="fs-heading">Our Partners</h2>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4"> 
                   <img src="assets/img/threepreneur.png" />
                   <img src="assets/img/clogo2.jpg" />
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4"> 
                   <img src="assets/img/clogo3.jpg" />
                   <img src="assets/img/clogo4.jpg" />
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4"> 
                   <img src="assets/img/clogo5.jpg" />
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4"> 
                   <img src="assets/img/clogo7.jpg" />
                   <img src="assets/img/clogo6.jpg" />
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4"> 
                   <img src="assets/img/clogo8.jpg" />
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4"> 
                   <img src="assets/img/clogo9.jpg" />
                   {/* <img src="assets/img/clogo10.jpg" /> */}
                </div>
            </div>
      </div>
    </section>
   

   

    </div>
  );
}
