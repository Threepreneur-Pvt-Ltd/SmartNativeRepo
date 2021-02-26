import React from 'react';
import Button from 'react-bootstrap/Button'
import { Container, Row, Col } from 'react-bootstrap';

export default function SkillZone() {
  return (
    <div>
        <section className="fs-smart-sc">
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <div className="comment_img leftside">
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
                                <Col><h4 className="fs-subheading">Most young professionals especially from a diverse background struggle with their first job experience. The Smart Native Skill Zone helps <br></br>participants to prepare for their first job assignment by upskilling them. <br></br>The aim is to bring companies and potential employees closer together by giving them an equal access to our platform to collaborate on a <br></br>specific project and therefore introducing future employers to a more diverse and inclusive pool of applicants.</h4></Col>
                                <Col><h4 className="fs-subheading">Together with our partners we </h4></Col>
                                <Col><p className="darkblue">a. design cases similar to first job assignments (case-based)</p></Col>
                                <Col><p className="darkblue">b. define a skill set and an age group</p></Col>
                                <Col><p className="darkblue">c. define a course program</p></Col>
                                <Col><h4 className="fs-subheading">Participants can register for these assignments and work as a team on a case. </h4></Col>
                                <Col><h4 className="fs-subheading">Smart Native mentors support and monitor the progress.<br/> Afterwards we give students the chance to apply for an internship.</h4></Col>
                                {/* <Col><h4 className="fs-subheading">Afterwards we give students the chance to apply for an internship.</h4></Col> */}
                                <Col><h4 className="fs-subheading">Please contact us if you want to submit a case or a challenge and benefit from a more diverse pool of applicants. </h4></Col>
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
                    <h2 className="fs-heading">Features of our Smart Natives Platform </h2>
                </div> 
            </div>

            <div className="row">

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="inbox">
                        <figure><img src="assets/img/challange5.png" /></figure>
                        <h3>Create your folio</h3>
                        <p>Showcase to the world your skills, links to your social profile, where you have worked and what you have worked on and the projects you have built.</p>  
                    </div>
                    <div className="inbox">
                        <figure><img src="assets/img/challange1.png" /></figure>
                        <h3>Team Matching</h3>
                        <p>Find your teammates or get invited by other teams to participate in the competitions </p>  
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="inbox">
                        <figure><img src="assets/img/challange4.png" /></figure>
                        <h3>Add Your Project</h3>
                        <p>Give your weekend projects, side projects, hobby projects, serious ventures a place to breathe, invite collaborators and inspire other builders. </p>  
                    </div>
                    <div className="inbox">
                        <figure><img src="assets/img/challange6.png" /></figure>
                        <h3>Networking</h3>
                        <p>We Collaborate with prestigious companies for our events </p>  
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="inbox">
                        <figure><img src="assets/img/challange3.png" /></figure>
                        <h3>Browse all hackathons</h3>
                        <p>Applying to hackathons is as simple as a click of a button. We save all the required info so that you don’t have to fill them over and over again.</p>  
                    </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <div className="inbox">
                        <figure><img src="assets/img/challange2.png" /></figure>
                        <h3>Take a Quiz</h3>
                        <p>Take our quiz, earn a badge and see where you stand among the rest of the builders</p>  
                    </div>
                    <div className="inbox">
                        <figure><img src="assets/img/challange7.png" /></figure>
                        <h3>Dashboard</h3>
                        <p>Showcase your ideas and database in dashboard .How much you have raised and participation history</p>  
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
