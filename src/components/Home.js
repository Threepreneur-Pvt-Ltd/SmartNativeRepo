import React from 'react';
import MainSlider from '../components/MainSlider.js';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Challenges from './Challenges.js';
import About from './About.js';
function Home() {
  return (
    <div >
        <section className="fs-banner">
            <div className="container">
            <div className="fs-slideshow">
                <MainSlider />
            </div>
            </div>
        </section>
        <section className="fs-teachstu-sc2 ">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"> 
                    <h2 className="fs-heading">One of the winning team of </h2>
                    <h3 className="fs-heading">Germany’s largest education hackathon</h3>
                    {/* <h4 className="fs-heading">#wirfuerschule</h4> */}
                    {/* <h4 className="fs-subheading">Schools don’t prepare enough for modern days’ working environment 
                        Old School is UnCool</h4> */}
                </div>
                
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <p>Smart Natives is an upskilling and matching platform for teenagers, young adults <br/>and companies that organizes challenges, hackathons and upskilling workshops.</p>
                    <p>The platform gives access to challenge-based learning online, offline and hybrid. <br/>These challenges and trainings enable students to easily develop 21st century skills and <br/>help them utilize mega trends and global sustainable goals as important innovation factors. <br/>Participants can learn techniques from domains, such as AI, data science or robotics to solve real life challenges.</p>
                </div>
                </div>
        <div className=" container-fluid">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center ">
                    <iframe width="800" height="456" src="https://www.youtube.com/embed/dVqZQsjkyHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
                </div> 
                {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    <div className="inbox">
                        <figure>
                            <img src="assets/img/light.png" />
                            <img src="assets/img/img1.png" />
                        </figure>
                    </div>
                </div> */}
                </div>
            </div>
        </section>
    <section className="fs-commonsc desktop">
        <div className="container ">
           
            <div className="row fs-commonsc1">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                    <div className="comment_img">
                        <img src="assets/img/round1.png" className="blue_img" />
                        <img src="assets/img/round2.png" className="skyblue_img" />
                    </div>
                    <Link to="/Challenges"><h2 className="fs-heading">Challenges</h2></Link>
                    <p>Together with the Smart Native Team companies or institutions submit innovation challenges.</p>
                    <p>Throughout the challenges, students are coached and consulted by experienced Smart Natives mentors. Students can track their progress on the platform.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    <div className="inbox">
                        <figure>
                            <img src="assets/img/light.png" />
                            <img src="assets/img/img1.png" />
                        </figure>
                    </div>
                </div>
            </div>
            <div className="row fs-commonsc2">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                    <div className="inbox">
                        <figure>
                            <img src="assets/img/icon9.png" />
                            <img src="assets/img/img2.png" />
                        </figure>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    <Link to="/Events"><h2 className="fs-heading">Events</h2></Link>
                    <p>We organize both online and offline events for schools,companies,communal authorities and institutions.</p>
                </div>           
            </div>
            <div className="row fs-commonsc3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                <Link to="/Badges"><h2 className="fs-heading">Badges</h2></Link>
                    <p>By completing a Smart Natives challenge or an Up skill project students receive badges to showcase their skills to themselves,their family or their potential employers!</p>  
                </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <div className="inbox">
                            <figure>
                                <img src="assets/img/icon1.png" />
                                <img src="assets/img/img4.png" />
                            </figure>
                        </div> 
                    </div>
            </div>
            <div className="row fs-commonsc4">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                        <div className="inbox">
                            <figure>
                                <img src="assets/img/icon8.png" />
                                <img src="assets/img/img3.png" />
                            </figure>
                        </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <h2 className="fs-heading">Hybrid Workshop</h2>
                        <p>Smart Natives organizes an online and offline platform with workshops for 21st century skills, methods and IT-skills. </p>
                
                        <div className="comment_img rightsc">
                        <img src="assets/img/round1.png" className="blue_img" />
                        <img src="assets/img/round2.png" className="skyblue_img" />
                    </div>
                </div> 
            </div>

        </div>
    </section>

    <section className="fs-commonsc mobile">
        <div className="container">
                <div className="row fs-commonsc1">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"> 
                        <h2 className="fs-heading">One of the winning team of </h2>
                        <h3 className="fs-heading">Germany’s largest education hackathon</h3>
                        {/* <h4 className="fs-heading">#wirfuerschule</h4> */}
                        {/* <h4 className="fs-subheading">Schools don’t prepare enough for modern days’ working environment 
                            Old School is UnCool</h4> */}
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 fs-banner-caption">
                        <p>Smart Natives is an up skilling and matching platform for teenagers, young adults and companies that organizes challenges, hackathons and up skilling workshops.</p>
                        <p>The platform gives access to challenge-based learning online, offline and hybrid. These challenges and trainings enable students to easily develop 21st century skills and help them utilize mega trends and global sustainable goals as important innovation factors. Participants can learn techniques from domains, such as AI, data science or robotics to solve real life challenges.</p>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <iframe width="300" height="206" src="https://www.youtube.com/embed/dVqZQsjkyHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
                    </div> 
                    {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <div className="inbox">
                            <figure>
                                <img src="assets/img/light.png" />
                                <img src="assets/img/img1.png" />
                            </figure>
                        </div>
                    </div> */}
                </div>
            <div className="row fs-commonsc1">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                    <div className="comment_img">
                        <img src="assets/img/round1.png" className="blue_img" />
                        <img src="assets/img/round2.png" className="skyblue_img" />
                    </div>
                    <h2 className="fs-heading">Challenges</h2>
                    <p>We help organizations to run their open innovation challenges</p>
                    <p>Join the most exciting challenges, contribute to innovative technological solutions and become a real champion .</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    <div className="inbox">
                        <figure>
                            <img src="assets/img/light.png" />
                            <img src="assets/img/img1.png" />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="row fs-commonsc2">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                        <h2 className="fs-heading">Hybrid Workshop</h2>
                        <p>The Smart Natives organise a online and a offline workshops platform that can be freely selected depending on your interests. They allow an intensive examination of a topic, the exploration of different perspectives and the exploration of your own questions. Are you a student? Then you can submit your own desired topics for future Smart Natives online or offline workshops. </p>
                </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <div className="inbox">
                            <figure>
                                <img src="assets/img/icon8.png" />
                                <img src="assets/img/img3.png" />
                            </figure>
                        </div>
                    </div>
            </div>

            <div className="row fs-commonsc3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <h2 className="fs-heading">Badges</h2>
                        <p>In Smart Natives polishing your skills for a while and want to find out how good you are? Take the Smart Natives quiz and get a badge to showcase your skill to the world! Have fun working and win prizes in all our challenges.</p>
                </div>
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                    <div className="inbox">
                        <figure>
                            <img src="assets/img/icon1.png" />
                            <img src="assets/img/img4.png" />
                        </figure>
                    </div>
                </div>           
            </div>

            <div className="row fs-commonsc4">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <h2 className="fs-heading">Conferences</h2>
                        <p>Build up your Folio based on evaluations from a selected panel of experts. Our token-based award system rewards the best projects based on the competition results.</p>
                </div> 
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                        <div className="comment_img">
                            <img src="assets/img/round1.png" className="blue_img" />
                            <img src="assets/img/round2.png" className="skyblue_img" />
                        </div>
                        <div className="inbox">
                            <figure>
                                <img src="assets/img/icon9.png" />
                                <img src="assets/img/img2.png" />
                            </figure>
                        </div>
                </div>
            </div>

        </div>
    </section>

    <section className="fs-teachstu-sc">
        <div className="container">
            <div className="comment_img">
                <img src="assets/img/round1.png" className="blue_img" />
                <img src="assets/img/round2.png" className="skyblue_img" />
            </div>
            <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#teachers">For Corporates</a></li>
              <li><a data-toggle="tab" href="#students">For Students</a></li>
            </ul>
        </div>
      
        <div className="container-fluid">
            <div className="container">
                <div className="tab-content">
                    <div id="teachers" className="tab-pane fade in active">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3>Innovation as <br/>a Service</h3>
                                    <img src="assets/img/student4.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3>Digital <br/> Learning</h3>
                                    <img src="assets/img/teacher2.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3>Creative <br/> Collaboration</h3>
                                    <img src="assets/img/teacher3.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3>Expert <br/> Guidance</h3>
                                    <img src="assets/img/teacher4.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="students" className="tab-pane fade">
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3>Select Your <br/> Own Topics</h3>
                                    <img src="assets/img/student1.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3>Decide <br/> Yourself</h3>
                                    <img src="assets/img/student2.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3>Learn <br/> Together</h3>
                                    <img src="assets/img/student3.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3>Project <br/> week</h3>
                                    <img src="assets/img/teacher1.png" />
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
            </div> 
        </div>
    </section>
    
    </div>
  );
}

export default Home;
