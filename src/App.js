import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import Challenges from './components/Challenges.js';
import About from './components/About.js';
import SkillZone from './components/SkillZone.js';
import InnovationLab from './components/InnovationLab.js';
import Badges from './components/Badges.js';
import Workshops from './components/Workshops.js';
import Events from './components/Events.js';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';
function App(props) {
  const { locale } = props;
  const currentAppLocale = AppLocale[locale];
  return (  
    <div className="Home">
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <Header/>

      <main id="fs-main" className="fs-content">   
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Challenges" >
              <Challenges />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/SkillZone">
              <SkillZone />
            </Route>
            <Route exact path="/InnovationLab">
              <InnovationLab />
            </Route>
            <Route exact path="/Badges">
              <Badges />
            </Route>
            <Route exact path="/Events">
              <Events />
            </Route>
            <Route exact path="/Workshops">
              <Workshops />
            </Route>
          </Switch>
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
        </IntlProvider>
  </div>
  );
}

const mapStateToProps = ({ settings }) => {
  const { locale } = settings;
  return { locale };
};
const mapActionsToProps = {};
export default connect(mapStateToProps, mapActionsToProps)(App);
