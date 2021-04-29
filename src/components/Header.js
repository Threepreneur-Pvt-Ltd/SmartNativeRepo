    import React, {useState, useEffect} from 'react';
import Challenges from './Challenges.js';
import About from './About.js';
import SkillZone from './SkillZone.js';
import InnovationLab from './InnovationLab.js';
import Badges from './Badges.js';
import Workshops from './Workshops.js';
import Events from './Events.js';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import IntlMessages from '../helpers/IntlMessages';
import {
    changeLocale,
  } from '../redux/actions';
import {
    localeOptions,
  } from '../constants/defaultValues';

function Header(props) {
    const handleChangeLocale = (e) => {
        // console.log(e.target.value)
        e.preventDefault();
        changeLocale(e.target.value);
    
        // const currentDirection = getDirection().direction;
        // if (direction !== currentDirection) {
        //   setDirection(direction);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        // }
      };
      console.log(localeOptions)
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
                            
                            <div className="dropdown">
                            <select value={props.locale} onClick={handleChangeLocale}>
                            {localeOptions.map((l) => (
                                <option key={l.id} value={l.id}>{l.name}</option>
                            ))}
                            </select>
                            </div>
                            {/* <div className="dropdown">
                              <button className="dropbtn">
                                <img src="assets/img/english-flag.jpg" title="English" />
                                <h6>En</h6>
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
                                <li><a href="/Challenges"><IntlMessages id="menu.challenges" /></a></li>
                                <li><a href="/SkillZone"><IntlMessages id="menu.skillZone" /></a></li>
                                <li><a href="/InnovationLab"><IntlMessages id="menu.innovationLab" /></a></li>
                                <li><a href="/Badges"><IntlMessages id="menu.badges" /></a></li>
                                <li><a href="/Events"><IntlMessages id="menu.events" /></a></li>
                                <li><a href="/Workshops"><IntlMessages id="menu.workshops" /></a></li>
                                <li><a href="/About"><IntlMessages id="menu.about" /></a></li>
                            </ul>   
                                           
                        </div>
                    </nav>
                </div>

            </div>
        </header>
  );
}

// export default Header;
const mapStateToProps = ({ settings }) => {
    const { locale } = settings;
    return {
      locale,
    };
  };
  export default injectIntl(
    connect(mapStateToProps, {
      changeLocaleAction: changeLocale,
    })(Header)
  );