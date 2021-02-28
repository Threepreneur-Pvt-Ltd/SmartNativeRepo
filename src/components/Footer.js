import React from 'react';

function Footer() {
  return (
         <footer className="fs-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <h4>Contact us</h4>
                        <ul>
                            <li><a href="#." target="_blank"><i className="fas fa-map-marker-alt"></i>Lärchenstraße 12 | 61118 Bad Vilbel | Deutschland</a></li>
                            <li><a href="#." target="_blank"><i className="fas fa-phone"></i>+49 162 9107481</a></li>
                            <li><a href="#." target="_blank"><i className="fas fa-envelope"></i>training@smart-natives.de</a></li> 
                        </ul>
                        <ul className="fs-social-icon list-inline">
                            <li><a href="#." target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#." target="_blank"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#." target="_blank"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#." target="_blank"><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <h4>Quick Links</h4>
                        <ul>
                            {/* <li><a href="#.">About Us</a></li>
                            <li><a href="#.">Blogs</a></li> */}
                            <li><a href="https://techeroes.de/impressum/">Impressum</a></li>
                            <li><a href="https://techeroes.de/datenschutz/">Datenschutz</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <h4>Community</h4>
                        <ul>
                            <li><a href="Challenges">Challenge Organisation</a></li>
                            <li><a href="Events">Explore Hackathon</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <h4>Be In Touch</h4>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="form-control sub_btn" value="Submit" />
                            </div>                        
                        </form>
                    </div>
                    
                </div>
            </div>
            <div className="container">
            <div className="row">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                        <p >Copyright &copy; 2021 All Rights Reserved by 
                    <a href="#"> Smart Native</a>.
                        </p>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 rightsc">
                        <p class="design-by">Design & Developed by 
                        <a href="http://threepreneur.in/"> Threepreneur Global Pvt. Ltd</a>.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
