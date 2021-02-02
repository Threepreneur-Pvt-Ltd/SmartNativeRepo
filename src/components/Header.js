import React from 'react';

function Header() {
  return (
        <header id="fs-main-header" className="fs-header">
            <div className="container">

                <div className="fs-btm-headarea">
                    <nav className="navbar navbar-default" role="navigation">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#fs-main-menu">
                                Menu
                                <img src="assets/img/menu-img.png" className="fs-menu-icon" alt="Smart Native Menu icon" />
                            </button>
                            <a className="navbar-brand" href="#"><img src="assets/img/logo.png" alt="Smart Native Logo"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="fs-main-menu">
                            <ul className="fs-social-icon list-inline navbar-right">
                                <li><a href="#." target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#." target="_blank"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#." target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#." target="_blank"><i className="fab fa-youtube"></i></a></li>
                            </ul>  

                            <div className="dropdown">
                              <button className="dropbtn">
                                <img src="assets/img/english-flag.jpg" title="English" />
                              </button>
                              <div className="dropdown-content">
                                <a href="#"><img src="assets/img/french-flag.jpg" title="French" /></a>
                                <a href="#"><img src="assets/img/german-flag.jpg" title="German" /></a>
                              </div>
                            </div> 


                            <ul className="fs-navbar">
                                <li><a href="#">Challenges</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Organisation Challenge</a></li>
                                <li><a href="#">Sign In <i className="fas fa-user"></i></a></li>
                            </ul>   
                                           
                        </div>
                    </nav>
                </div>

            </div>
        </header>
  );
}

export default Header;
