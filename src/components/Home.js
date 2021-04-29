import React from 'react';
import MainSlider from '../components/MainSlider.js';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Challenges from './Challenges.js';
import About from './About.js';
import Accordian from '../components/Accordian.js';
import { useTranslation } from "react-i18next";
import IntlMessages from '../helpers/IntlMessages';

function Home() {
    const { t, i18n } = useTranslation();
  return (
    <div >
        <section className="fs-banner">
            <div className="container">
            <div className="fs-slideshow">
                <MainSlider />
            </div>
            </div>
        </section>
        <section className="fs-teachstu-sc2 fs-commonsc desktop mobile">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"> 
                    <h2 className="fs-heading"><IntlMessages id="main.mainTitle1" /> </h2>
                    <h3 className="fs-heading"><IntlMessages id="main.mainTitle2" /></h3>
                    {/* <h4 className="fs-heading">#wirfuerschule</h4> */}
                    {/* <h4 className="fs-subheading">Schools don’t prepare enough for modern days’ working environment 
                        Old School is UnCool</h4> */}
                </div>
                
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    {/* <p>Smart Natives is an upskilling and matching platform for teenagers, young adults and companies. </p> */}
                    <p> <IntlMessages id="main.mainSubTitle1" />
<br></br> 
<IntlMessages id="main.mainSubTitle2" /></p>

<p ><IntlMessages id="main.mainSubTitle3" /></p>
               <br></br>
<p><strong className="darkblue">Smart Natvies - The journey from Digtial to Smart.</strong> </p>                </div>
                </div>
        <div className=" container-fluid">
            
            <div className="container">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center ">

                
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
            </div>
        </section>
    <section className="fs-commonsc desktop mobile">
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
                    <p>We organize both online and offline events like hackathons, competitions or bar camps for schools, companies, communal authorities and institutions.  </p>
               
                </div>           
            </div>



              <div className="row fs-commonsc3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    
                    <Link to="/Workshops"><h2 className="fs-heading">Hybrid Workshop</h2></Link>
                    <p>Smart Natives organizes co-creation workshops for modern methods, IT-skills and Digital Literacy.   </p>
                
               
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



            <div className="row fs-commonsc4">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                    <div className="inbox">
                    <figure>
                                <img src="assets/img/icon1.png" />
                                <img src="assets/img/img4.png" />
                            </figure>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    <Link to="/Badges"><h2 className="fs-heading">Badges</h2></Link>
                    <p>By completing a Smart Natives challenge or an upskilling project in our Skill Zone participants receive badges to showcase their skills to themselves, their family or their potential employers! </p>  
                   
                    <div className="comment_img">
                        <img src="assets/img/round1.png" className="blue_img" />
                        <img src="assets/img/round2.png" className="skyblue_img" />
                    </div>
                </div>           
            </div>












            </div>
    </section>

    <section className=" mobile">
        <div className="container">
                <div className="row fs-commonsc1">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"> 
                         <h2 className="fs-heading">One of the Winning Teams of  </h2>
                        <h3 className="fs-heading">Germany's largest Educational Hackathon</h3> 
                       
                        {/* <h4 className="fs-subheading">Schools don’t prepare enough for modern days’ working environment 
                            Old School is UnCool</h4> */}
                    </div>
                    <div className="container" style={{textAlign:'justify'}}>
                    <p>As part of our educational journey, we organize challenges, hackathons, bar camps and workshops.
<br></br>We give access to challenge-based learning: online, offline and hybrid. These challenges, events and workshops enable participants to easily develop 21st Century Skills and help them utilize megatrends and global sustainable goals as important innovation factors. Participants can learn techniques from domains, such as AI, VR, data science or robotics to solve real life challenges. 
</p>

<p>Our Smart Natives Innovation as a Service framework fuels collaboration between the youth and organisations to identify the next big ideas, bridges the gap and leverages the potential. We believe that developing the skills and offering unrestricted access is necessary to thrive in an ever-changing world and changes consumer into prosumer.</p>
               <br></br>
<p><strong className="darkblue">Smart Natvies - The journey from Digtial to Smart.</strong></p> </div>
                    {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center" > */}
                    {/* <iframe width="260" height="166" src="https://www.youtube.com/embed/dVqZQsjkyHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe> */}
                         <iframe style={{marginLeft:'30px'}} width="300" height="166" src="https://www.youtube.com/embed/dVqZQsjkyHw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay allowfullscreen></iframe>
                    {/* </div>  */}<br></br> <br></br>
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
                    <h2 className="fs-heading textimg">Challenges</h2>
                   <div style={{textAlign:'justify'}}> <p >Together with the Smart Native Team companies or institutions submit innovation challenges.</p>
                    <p>Throughout the challenges, students are coached and consulted by experienced Smart Natives mentors. Students can track their progress on the platform.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    <div>
                        <figure>
                            <img style={{marginRight:'100px'}} src="assets/img/light.png" /><br></br>
                            <img style={{marginRight:'250px', width:'370px'}}  src="assets/img/img1.png" />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="row fs-commonsc2" style={{textAlign:'justify'}}>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                        <h2 className="fs-heading textimg">Events</h2>
                        <p>We organize both online and offline events like hackathons, competitions or bar camps for schools, companies, communal authorities and institutions.  </p>
               
                </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <div className="inbox">
                        <figure>
                            <img src="assets/img/icon9.png" />
                            <img style={{marginTop:'-50px'}}src="assets/img/img2.png" />
                        </figure>
                        </div>
                    </div>
            </div>

            <div className="row fs-commonsc3" style={{textAlign:'justify'}}>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                     <br></br>   <h2 className="textimg fs-heading">Hybrid Workshop</h2>
                       <p> Smart Natives organizes co-creation workshops for modern methods, IT-skills and Digital Literacy. </p>
                </div>
                 <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                    <div className="inbox">
                    <figure style={{marginRight:'500px'}} > 
                                <img src="assets/img/icon8.png" />
                                <img  src="assets/img/img3.png" />
                            </figure>
                    </div>
                </div>           
            </div>

            <div className="row fs-commonsc3" style={{textAlign:'justify'}}>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <br></br><h2 className="fs-heading textimg">Badges</h2>
                       <p> By completing a Smart Natives challenge or an upskilling project in our Skill Zone participants receive badges to showcase their skills to themselves, their family or their potential employers! </p>
                </div> 
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                        <div className="comment_img">
                            <img src="assets/img/round1.png" className="blue_img" />
                            <img src="assets/img/round2.png" className="skyblue_img" />
                        </div>
                        <div className="inbox">
                        <figure>
                                <img src="assets/img/icon1.png" />
                                <img src="assets/img/img4.png" />
                            </figure>
                        </div>
                </div>
            </div>

        </div>
    </section>
   

{/* Desktop */}
    <section className="fs-teachstu-sc desktopsc">
        <div className="container">
            <div className="comment_img">
                <img src="assets/img/round1.png" className="blue_img" />
                <img src="assets/img/round2.png" className="skyblue_img" />
            </div>
            <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#teachers">For Corporates</a></li>
              <li><a data-toggle="tab" href="#students">For Students</a></li>
            </ul>

            {/* <section className="fs-commonsc mobile">
        <div className="container">

        <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#teachers1">For Corporates</a></li>
              <li><a data-toggle="tab" href="#students1">For Students</a></li>
            </ul>
               

            </div>
            </section> */}
        </div>
            

 </section>



 {/* Mobile */}

 <section className=" fs-teachstu-sc mobilesc">
        <div className="container">
            <div className="comment_img">
                <img src="assets/img/round1.png" className="blue_img" />
                <img src="assets/img/round2.png" className="skyblue_img" />
            </div>
            <ul className="nav nav-tabs" style={{marginLeft:'30px'}}>
             <br></br> <li className="active"><a data-toggle="tab" href="#teachers1">For Corporates</a></li>
              <li><a data-toggle="tab" href="#students1">For Students</a></li>
            </ul>
        </div>
            

 </section>

  
  
  
                                 {/* DESKTOP */}
  
  <section className="fs-teachstu-sc desktopsc"> 
       <div className="container-fluid">
            <div className="container">

                <div className="tab-content">           
              

               
                
                    <div id="teachers" className="tab-pane fade in active">

               
            <div className="container">
                <div className="text"> 
                
                     <div className="left heading1">               
                    <h1>We Deliver Tailored,<br></br> <br></br>Measurable & Practical <br></br> <br></br>  Business Innovation & <br></br> <br></br>Skills Solutions.</h1> 
                        
                   
                    <div className="form-group">
                               <a href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC"> <input type="submit" className="form-control sub_btn1" value="Contact Us" /></a>
                            </div> 
                        
                        </div>

                        <div class="right"> 
                        <h2 className="heading1">Tailored</h2>              
                    <h4>We turn your project vision into reality by analyzing your needs and 
                        constraints. We build a tailored, end-to-end solution that will meet every one of your KPIs.</h4> 
                        
                        <br></br><br></br>
                        <h2 className="heading1">Measurable</h2>
                        <h4>Like every other business aspect in your company, innovative  projects should provide measurable indicators of effectiveness. Our hands-on approach makes it possible to track and visualize actual needs, available skills and abilities rather than just engagement or completion rates.</h4>
                        <br></br><br></br>

                        <h2 className="heading1">Practical</h2>
                        <h4>Ideas are only good if you can generate & implement them at a reasonable effort and costs. We attract highly specialized mentors and creative young minds to solve your organizational challenges. </h4>
                        <br></br><br></br>

                        <h2 className="heading1">Delivered</h2>
                        <h4>From planning the right format and developing impactful innovation strategy to a full execution: branding and marketing aspects (if needed), content delivery, analysis, and more. We provide you with the ultimate turn-key solution that is tailored to your needs.</h4>


                             
                        </div>
             </div> 
             </div>

                        <div className="row">                      
                            
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                 
                                <div className="inbox text-center" >
                                   
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
                    <div className="container">
                <div className="text"> 
                     <div class="left heading1">               
                    <h1>We Deliver Tailored,<br></br> <br></br>Measurable & Upskilling<br></br> <br></br> Solutions. </h1> 
                       
                    <div className="form-group">
                               <a href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC"> <input type="submit" className="form-control sub_btn1" value="Contact Us" /></a>
                            </div>                        
                        </div>

                        <div class="right"> 
                        <h2 className="heading1">Tailored</h2>              
                    <h4>We turn your learning and personal development vision into reality by analyzing your needs and constraints. Real-life  micro challenges are a great opportunity to explore new things. </h4> 
                        
                        <br></br><br></br>
                        <h2 className="heading1">Measurable</h2>
                        <h4>Learning projects should provide measurable indicators of effectiveness to prepare you for your future. Our hands-on training makes it possible to track and visualize actual skills and abilities rather than just learning by rote.</h4>
                        <br></br><br></br>

                        <h2 className="heading1">Practical</h2>
                        <h4>We provide the space and the right environment for participants to work on challenges, present solutions and get badges for it. Participants can also showcase their work by allowing them to expose to the community their very own innovations or challenges. Can you imagine a world where you could work with Porsche one day and with Spotify the next? </h4>
                        <br></br><br></br>

                        <h2 className="heading1">Delivered</h2>
                        <h4>Practical, hands-on skills training is the core of our expertise. Our blended training combines both self-learning and live mentorship to get the best out of every participant.</h4>

                        </div>
             </div> 
             </div>

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


{/* MOBILE/ */}

 <section className="fs-teachstu-sc  mobilesc ">
     
        <div className="container">
                

                    
                         <div id="teachers1" className="tab-pane fade in active mobtop1 container" > 
                         
                         <h1>We Deliver Tailored,<br></br> <br></br>Measurable & Practical <br></br> <br></br>  Business Innovation & <br></br> <br></br>Skills Solutions.</h1>  
                         <h2 className="heading1">Tailored</h2> 
                         <div style={{textAlign:'justify'}}><h4>We turn your project vision into reality by analyzing your needs and 
                        constraints. We build a tailored, end-to-end solution that will meet every one of your KPIs.</h4> 
                        
                        <br></br><br></br>
                        <h2 className="heading1">Measurable</h2>
                        <h4>Like every other business aspect in your company, innovative  projects should provide measurable indicators of effectiveness. Our hands-on approach makes it possible to track and visualize actual needs, available skills and abilities rather than just engagement or completion rates.</h4>
                        <br></br><br></br>

                        <h2 className="heading1">Practical</h2>
                        <h4>Ideas are only good if you can generate & implement them at a reasonable effort and costs. We attract highly specialized mentors and creative young minds to solve your organizational challenges. </h4>
                        <br></br><br></br>

                        <h2 className="heading1">Delivered</h2>
                        <h4>From planning the right format and developing impactful innovation strategy to a full execution: branding and marketing aspects (if needed), content delivery, analysis, and more. We provide you with the ultimate turn-key solution that is tailored to your needs.</h4>
                         </div>
                         <div className="box"><br></br><br></br>
                             <div className="textimg">
                        <p><b>Innovation as a Service</b></p>
                                    <img src="assets/img/student4.png" /><br></br><br></br>

                        <p><b>Digital Learning</b></p>
                                    <img src="assets/img/teacher2.png" /><br></br><br></br>

                          <p><b>Creative Collaboration</b></p>
                                    <img src="assets/img/teacher3.png" />  <br></br><br></br>

                                <p><b>Expert Guidance</b></p>    
                                <img src="assets/img/teacher4.png" /><br></br><br></br> 
                         </div>
                         </div>


                        <div className="form-group">
                               <a href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC"> <input type="submit" className="form-control sub_btn1" value="Contact Us" /></a>
                            </div>
                             
                    </div>


                            
                           
                                  
                            <div id="students1"  className="tab-pane fade  mobtop2"> 
                           
                           <h1>We Deliver Tailored,<br></br> <br></br>Measurable & <br></br><br></br>Upskilling<br></br> <br></br> Solutions. </h1> 
                          <div style={{textAlign:'justify'}}> <h2 className="heading1">Tailored</h2> 
                         <h4>We turn your learning and personal development vision into reality by analyzing your needs and constraints. Real-life  micro challenges are a great opportunity to explore new things. </h4> 
                        
                        <br></br><br></br>
                        <h2 className="heading1">Measurable</h2>
                        <h4>Learning projects should provide measurable indicators of effectiveness to prepare you for your future. Our hands-on training makes it possible to track and visualize actual skills and abilities rather than just learning by rote.</h4>
                        <br></br><br></br>

                        <h2 className="heading1">Practical</h2>
                        <h4>We provide the space and the right environment for participants to work on challenges, present solutions and get badges for it. Participants can also showcase their work by allowing them to expose to the community their very own innovations or challenges. Can you imagine a world where you could work with Porsche one day and with Spotify the next? </h4>
                        <br></br><br></br>

                        <h2 className="heading1">Delivered</h2>
                        <h4>Practical, hands-on skills training is the core of our expertise. Our blended training combines both self-learning and live mentorship to get the best out of every participant.</h4>
                        </div>
                         <div className="box"><br></br><br></br>
                             <div className="textimg">
                        <p><b>Select Your Own Topics</b></p>
                        <img src="assets/img/student1.png" /><br></br><br></br>

                        <p><b>Decide Yourself</b></p>
                        <img src="assets/img/student2.png" /><br></br><br></br>

                          <p><b>Learn Together</b></p>
                          <img src="assets/img/student3.png" /> <br></br><br></br>

                                <p><b>Project week</b></p>    
                                <img src="assets/img/teacher1.png" /><br></br><br></br> 
                         </div>
                         </div>
                        
                        <div className="form-group">
                               <a href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC"> <input type="submit" className="form-control sub_btn1" value="Contact Us" /></a>
                            </div>
                      
       </div>
        </div>
</section>




    <div class="move">
    <h1 className="fs-heading faq1">FAQ</h1>

    <Accordian/>
    </div>

    

   
    
    


    </div>
  );
}


export default Home;
