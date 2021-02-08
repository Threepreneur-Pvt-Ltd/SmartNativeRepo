import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import MainSlider from '../components/MainSlider.js';
import TeamSlider from '../components/TeamSlider.js';
import BlogSliderHome from '../components/BlogSliderHome.js';
import Button from 'react-bootstrap/Button'
function Home() {
  return (
    <div className="Home">
      <Header/>

<main id="fs-main" className="fs-content">

    <section className="fs-banner">
        <div className="container">
          <div className="fs-slideshow">
               <MainSlider />
          </div>
        </div>
    </section>

    <section className="fs-commonsc desktop">
        <div className="container">
            <div className="row fs-commonsc1">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"> 
                    <h2 className="fs-heading">One of the winning Team of </h2>
                    <h3 className="fs-heading">Germany’s largest Education Hackathon</h3>
                    <h4 className="fs-heading">#wirfuerschule</h4>
                    <h4 className="fs-subheading">Schools don’t prepare enough for modern days’ working environment 
                        Old School is UnCool</h4>
                </div>
                
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 fs-banner-caption">
                    <p>Smart Natives is an upskilling and matching platform <br/> for teenagers, young adults, and companies.</p>
                    <p>The platform gives access to challenge-based learning: online, offline, and hybrid. These challenges and training enable students to easily develop 21st-century skills and help them utilize megatrends and global sustainable goals as important innovation factors. Participants can learn techniques from domains, such as AI, data science or Robotics to solve real-life challenges.</p>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                <iframe width="600" height="356" src="https://www.youtube.com/embed/dVqZQsjkyHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
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
                                <img src="assets/img/icon8.png" />
                                <img src="assets/img/img3.png" />
                            </figure>
                        </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <h2 className="fs-heading">Hybrid Workshop</h2>
                        <p>The Smart Natives organise a online and a offline workshops platform that can be freely selected depending on your interests. They allow an intensive examination of a topic, the exploration of different perspectives and the exploration of your own questions. Are you a student? Then you can submit your own desired topics for future Smart Natives online or offline workshops. </p>
                </div> 
            </div>

            <div className="row fs-commonsc3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                    <h2 className="fs-heading">Badges</h2>
                    <p>In Smart Natives polishing your skills for a while and want to find out how good you are? Take the Smart Natives quiz and get a badge to showcase your skill to the world! Have fun working and win prizes in all our challenges.</p>  
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
                            <img src="assets/img/icon9.png" />
                            <img src="assets/img/img2.png" />
                        </figure>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    <div className="comment_img">
                        <img src="assets/img/round1.png" className="blue_img" />
                        <img src="assets/img/round2.png" className="skyblue_img" />
                    </div>
                    <h2 className="fs-heading">Events</h2>
                    <p>Build up your Folio based on evaluations from a selected panel of experts. Our token-based award system rewards the best projects based on the competition results.</p>
                </div>           
            </div>
        </div>
    </section>

    <section className="fs-commonsc mobile">
        <div className="container">
                <div className="row fs-commonsc1">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"> 
                        <h2 className="fs-heading">One of the winning Team of </h2>
                        <h3 className="fs-heading">Germany’s largest Education Hackathon</h3>
                        <h4 className="fs-heading">#wirfuerschule</h4>
                        <h4 className="fs-subheading">Schools don’t prepare enough for modern days’ working environment 
                            Old School is UnCool</h4>
                    </div>
                    
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 fs-banner-caption">
                        <p>Smart Natives is an upskilling and matching platform <br/> for teenagers, young adults, and companies.</p>
                        <p>The platform gives access to challenge-based learning: online, offline, and hybrid. These challenges and training enable students to easily develop 21st-century skills and help them utilize megatrends and global sustainable goals as important innovation factors. Participants can learn techniques from domains, such as AI, data science or Robotics to solve real-life challenges.</p>
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
                                    <h3>Project <br/> week</h3>
                                    <img src="assets/img/teacher1.png" />
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
                                    <h3>Select your <br/> Own topics</h3>
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
                                    <h3>Futuristic <br/> Design</h3>
                                    <img src="assets/img/student4.png" />
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
            </div> 
        </div>
    </section>
     
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
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <h3 className="fs-heading">Smart Natives Challenges</h3>
                    <h4 className="fs-heading">Themes</h4>
                    <h3 className="fs-subheading"> No Problem is too Big.. No Problem is Too Small</h3>
                    <div className="fs-smartnative-carousel ">
                        <BlogSliderHome />
                    </div>
                </div> 
            </div>
        </div>
    </section>   

    <section className="fs-explore-sc">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h2 className="fs-heading">Explore Smart Natives <br/> & participate in the challenges</h2>
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
                        <h3>Take a Quize</h3>
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
                    <h2 className="fs-heading">Explore Smart Natives Globally</h2>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mapsc">
                    <form action="" className="text-center">
                        <Button variant="outline-success" href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC">Post Challenges</Button>
                    </form>
                    <img src="assets/img/custom_map.png" />
                  </div>
             </div>
        </div>
    </section>

    <section className="fs-dashboard">
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
                        <p>The goal of smart Natives is to create functioning software or hardware by the end of the event. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers.</p>
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

    <section className="fs-subscribe">
        <div className="container">
            <div className="row">
                <div className="comment_img">
                    <img src="assets/img/round1.png" className="blue_img" />
                    <img src="assets/img/round2.png" className="skyblue_img" />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc"> 
                    <h2 className="fs-heading">Subscribe Our <br/> Newsletter</h2>
                    <p>Want to bring Smart Natives to more participants? Then subscribe this page with teachers and friends.</p>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc"> 
                    <form action="">
                        <input type="email" placeholder="Email Id" />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </div>
       </div>
    </section>
  
    <Footer/>
   
   </main>
    </div>
  );
}

export default Home;
