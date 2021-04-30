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
                   <p><IntlMessages id="challenges1"/></p>
                   <p><IntlMessages id="challenges2"/></p>
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
                    <p><IntlMessages id="events"/> </p>
               
                </div>           
            </div>



              <div className="row fs-commonsc3">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                    
                    <Link to="/Workshops"><h2 className="fs-heading">Hybrid Workshop</h2></Link>
                    <p><IntlMessages id="workshop"/></p>
                
               
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
                    <Link to="/Badges"><h2 className="fs-heading"><IntlMessages id="title.badge"/></h2></Link>
                    <p><IntlMessages id="badge.description"/></p>  
                   
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
                         <h2 className="fs-heading"><IntlMessages id="main.mainTitle1" /> </h2>
                        <h3 className="fs-heading"><IntlMessages id="main.mainTitle2" /></h3> 
                       
                        {/* <h4 className="fs-subheading">Schools don’t prepare enough for modern days’ working environment 
                            Old School is UnCool</h4> */}
                    </div>
                    <div className="container" style={{textAlign:'justify'}}>
                    <p> <IntlMessages id="main.mainSubTitle1" /></p>

                   <p><IntlMessages id="main.mainSubTitle2" /></p>
                 <p>  <IntlMessages id="main.mainSubTitle3" /></p>               <br></br>
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
                   <div style={{textAlign:'justify'}}>   <p><IntlMessages id="challenges1"/></p>
                   <p><IntlMessages id="challenges2"/></p>  </div>
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
                        <p><IntlMessages id="events"/> </p>
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
                     <p><IntlMessages id="workshop"/></p>     </div>
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
                        <br></br><h2 className="fs-heading textimg"><IntlMessages id="title.badge"/></h2>
                        <p><IntlMessages id="badge.description"/></p>          </div> 
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
              <li className="active"><a data-toggle="tab" href="#teachers" ><IntlMessages id="corporate.title"/></a></li>
              <li><a data-toggle="tab" href="#students" ><IntlMessages id="student.title"/></a></li>
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
             <br></br> <li className="active"><a data-toggle="tab" href="#teachers1"><IntlMessages id="corporate.title"/></a></li>
              <li><a data-toggle="tab" href="#students1"><IntlMessages id="student.title"/></a></li>
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
                    <h1><IntlMessages id="corporate.subtitle1"/><br></br> <br></br><IntlMessages id="corporate.subtitle2"/> <br></br> <br></br>  <IntlMessages id="corporate.subtitle3"/> <br></br> <br></br><IntlMessages id="corporate.subtitle4"/></h1> 
                        
                   
                    <div className="form-group">
                               <a href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC"> <input type="submit" className="form-control sub_btn1" value="Contact Us" /></a>
                            </div> 
                        
                        </div>

                        <div class="right"> 
                        <h2 className="heading1"><IntlMessages id="corporate.heading1"/></h2>              
                    <h4><IntlMessages id="corporate.subheading1"/></h4> 
                        
                        <br></br><br></br>
                        <h2 className="heading1"><IntlMessages id="corporate.heading2"/></h2>
                        <h4><IntlMessages id="corporate.subheading2"/></h4>
                        <br></br><br></br>

                        <h2 className="heading1"><IntlMessages id="corporate.heading3"/></h2>
                        <h4><IntlMessages id="corporate.subheading3"/></h4>
                        <br></br><br></br>

                        <h2 className="heading1"><IntlMessages id="corporate.heading4"/></h2>
                        <h4><IntlMessages id="corporate.subheading4"/></h4>


                             
                        </div>
             </div> 
             </div>

                        <div className="row">                      
                            
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                 
                                <div className="inbox text-center" >
                                   
                                    <h3><IntlMessages id="corporate.image1.title1"/> <br/><IntlMessages id="corporate.image1.title2"/></h3>
                                    <img src="assets/img/student4.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3><IntlMessages id="corporate.image2.title1"/><br/><IntlMessages id="corporate.image2.title2"/></h3>
                                    <img src="assets/img/teacher2.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3><IntlMessages id="corporate.image3.title1"/><br/><IntlMessages id="corporate.image3.title2"/></h3>
                                    <img src="assets/img/teacher3.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3><IntlMessages id="corporate.image4.title1"/> <br/><IntlMessages id="corporate.image4.title2"/></h3>
                                    <img src="assets/img/teacher4.png" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="students" className="tab-pane fade">
                    <div className="container">
                <div className="text"> 
                     <div class="left heading1">               
                    <h1><IntlMessages id="student.subtitle1"/><br></br> <br></br>
                    <IntlMessages id="student.subtitle2"/> <br></br><br></br>
                    <IntlMessages id="student.subtitle3"/><br></br> <br></br>
                    <IntlMessages id="student.subtitle4"/><br></br> <br></br> 
                    <IntlMessages id="student.subtitle5"/></h1> 
                       
                    <div className="form-group">
                               <a href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC"> <input type="submit" className="form-control sub_btn1" value="Contact Us" /></a>
                            </div>                        
                        </div>

                        <div class="right"> 
                        <h2 className="heading1"><IntlMessages id="corporate.heading1"/></h2>              
                    <h4><IntlMessages id="student.subheading1"/></h4> 
                        
                        <br></br><br></br>
                        <h2 className="heading1"><IntlMessages id="corporate.heading2"/></h2>
                        <h4><IntlMessages id="student.subheading2"/></h4>
                        <br></br><br></br>

                        <h2 className="heading1"><IntlMessages id="corporate.heading3"/></h2>
                        <h4><IntlMessages id="student.subheading3"/></h4>
                        <br></br><br></br>

                        <h2 className="heading1"><IntlMessages id="corporate.heading4"/></h2>
                        <h4><IntlMessages id="student.subheading4"/></h4>

                        </div>
             </div> 
             </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3><IntlMessages id="student.image1.title1"/><br/><IntlMessages id="student.image1.title2"/></h3>
                                    <img src="assets/img/student1.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3><IntlMessages id="student.image2.title1"/><br/><IntlMessages id="student.image2.title2"/></h3>
                                    <img src="assets/img/student2.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3><IntlMessages id="student.image3.title1"/><br/><IntlMessages id="student.image3.title2"/></h3>
                                    <img src="assets/img/student3.png" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                <div className="inbox text-center">
                                    <h3><IntlMessages id="student.image4.title1"/><br/><IntlMessages id="student.image4.title2"/></h3>
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
                         
                         <h1><IntlMessages id="corporate.subtitle1"/><br></br> <br></br><IntlMessages id="corporate.subtitle2"/><br></br> <br></br><IntlMessages id="corporate.subtitle3"/><br></br> <br></br><IntlMessages id="corporate.subtitle4"/></h1>  
                         <h2 className="heading1"><IntlMessages id="corporate.heading1"/></h2> 
                         <div style={{textAlign:'justify'}}><h4><IntlMessages id="corporate.subheading1"/></h4> 
                        
                        <br></br><br></br>
                        <h2 className="heading1"><IntlMessages id="corporate.heading2"/></h2>
                        <h4><IntlMessages id="corporate.subheading2"/></h4>
                        <br></br><br></br>

                        <h2 className="heading1"><IntlMessages id="corporate.heading3"/></h2>
                        <h4><IntlMessages id="corporate.subheading3"/></h4>
                        <br></br><br></br>

                        <h2 className="heading1"><IntlMessages id="corporate.heading4"/></h2>
                        <h4><IntlMessages id="corporate.subheading4"/></h4>
                         </div>
                         <div className="box"><br></br><br></br>
                             <div className="textimg">
                        <p><b>
                        <IntlMessages id="corporate.image1.title1"/>
                        <IntlMessages id="corporate.image1.title2"/></b></p>
                                    <img src="assets/img/student4.png" /><br></br><br></br>

                        <p><b>                       <IntlMessages id="corporate.image2.title1"/>
                        <IntlMessages id="corporate.image2.title2"/></b></p>
                                    <img src="assets/img/teacher2.png" /><br></br><br></br>

                          <p><b>                       <IntlMessages id="corporate.image3.title1"/>
                        <IntlMessages id="corporate.image3.title2"/></b></p>
                                    <img src="assets/img/teacher3.png" />  <br></br><br></br>

                                <p><b>                       <IntlMessages id="corporate.image4title1"/>
                        <IntlMessages id="corporate.image4.title2"/></b></p>    
                                <img src="assets/img/teacher4.png" /><br></br><br></br> 
                         </div>
                         </div>


                        <div className="form-group">
                               <a href="https://wnc0tb5cjoh.typeform.com/to/JzSYqWTC"> <input type="submit" className="form-control sub_btn1" value="Contact Us" /></a>
                            </div>
                             
                    </div>


                            
                           
                                  
                            <div id="students1"  className="tab-pane fade  mobtop2"> 
                           
                           <h1><IntlMessages id="student.subtitle1"/><br></br> <br></br><IntlMessages id="student.subtitle2"/><br></br><br></br><IntlMessages id="student.subtitle3"/><br></br> <br></br><IntlMessages id="student.subtitle4"/></h1> 
                          <div style={{textAlign:'justify'}}> <h2 className="heading1"><IntlMessages id="corporate.heading1"/></h2> 
                         <h4><IntlMessages id="student.subheading1"/></h4> 
                        
                        <br></br><br></br>
                        <h2 className="heading1"><IntlMessages id="corporate.heading2"/></h2>
                        <h4><IntlMessages id="student.subheading2"/></h4>
                        <br></br><br></br>

                        <h2 className="heading1"><IntlMessages id="corporate.heading3"/></h2>
                        <h4><IntlMessages id="student.subheading3"/></h4>
                        <br></br><br></br>

                        <h2 className="heading1"><IntlMessages id="corporate.heading4"/></h2>
                        <h4><IntlMessages id="student.subheading4"/></h4>
                        </div>
                         <div className="box"><br></br><br></br>
                             <div className="textimg">
                        <p><b><IntlMessages id="student.image1.title1"/>
                        <IntlMessages id="student.image1.title2"/></b></p>
                        <img src="assets/img/student1.png" /><br></br><br></br>

                        <p><b><IntlMessages id="student.image2.title1"/>
                        <IntlMessages id="student.image2.title2"/></b></p>
                        <img src="assets/img/student2.png" /><br></br><br></br>

                          <p><b><IntlMessages id="student.image3.title1"/>
                        <IntlMessages id="student.image3.title2"/></b></p>
                          <img src="assets/img/student3.png" /> <br></br><br></br>

                                <p><b><IntlMessages id="student.image4.title1"/>
                        <IntlMessages id="student.image4.title2"/></b></p>    
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
