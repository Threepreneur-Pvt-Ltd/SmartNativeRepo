import React from 'react';
import Challenges from './Challenges.js';
import About from './About.js';
import SkillZone from './SkillZone.js';
import InnovationLab from './InnovationLab.js';
import Badges from './Badges.js';
import Workshops from './Workshops.js';
import Events from './Events.js';

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
                            <a className="navbar-brand" href="https://smart-natives.de"><img src="assets/img/logo.png" alt="Smart Native Logo"/></a>
                        </div>
                        <div className="collapse navbar-collapse" id="fs-main-menu">
                            <ul className="fs-social-icon list-inline navbar-right">
                                {/* <li><a href="#." target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#." target="_blank"><i className="fab fa-twitter"></i></a></li> */}
                                <li><a href="https://instagram.com/smartnatives2020?igshid=19v1ya2dngp3n" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#." target="_blank"><i className="fab fa-youtube"></i></a></li>
                                <li><a href="#." target="_blank"><i className="fab fa-linkedin"></i></a></li>
                            </ul>  

                            {/* <div className="dropdown">
                              <button className="dropbtn">
                                <img src="assets/img/english-flag.jpg" title="English" />
                              </button>
                              <div className="dropdown-content">
                                <a href="#"><img src="assets/img/french-flag.jpg" title="French" /></a>
                                <a href="#"><img src="assets/img/german-flag.jpg" title="German" /></a>
                              </div>
                            </div>  */}
                            {/* .fs-navbar li:nth-child(4) a,
                            .fs-navbar li:nth-child(5) a {
                                margin-bottom: 8px;
                                display: inline-block;
                            } */}

                            <ul className="fs-navbar">
                                <li><a href="/Challenges">Challenges</a></li>
                                <li><a href="/SkillZone">Skill Zone</a></li>
                                <li><a href="/InnovationLab">Innovation Lab</a></li>
                                <li><a href="/Badges">Badges</a></li>
                                <li><a href="/Events">Events</a></li>
                                <li><a href="/Workshops">Workshops</a></li>
                                <li><a href="/About">About</a></li>
                            </ul>   
                                           
                        </div>
                    </nav>
                </div>

            </div>
        </header>
  );
}

export default Header;
