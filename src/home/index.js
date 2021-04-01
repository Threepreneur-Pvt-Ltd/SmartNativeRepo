import React from "react";
import "./App.css";
import "./index.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import Challenges from "./components/Challenges.js";
import About from "./components/About.js";
import SkillZone from "./components/SkillZone.js";
import InnovationLab from "./components/InnovationLab.js";
import Badges from "./components/Badges.js";
import Workshops from "./components/Workshops.js";
import Events from "./components/Events.js";

const HomePage = () => {
  return (
    <div className="Home">
      <Header />

      <main id="fs-main" className="fs-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Challenges">
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
          <Route exact path="/Worksh">
            <Workshops />
          </Route>
        </Switch>

        <section className="fs-subscribe">
          <div className="container">
            <div className="row">
              <div className="comment_img">
                <img
                  src="assets/img/round1.png"
                  className="blue_img"
                  alt="blue-circle"
                />
                <img
                  src="assets/img/round2.png"
                  className="skyblue_img"
                  alt="blue-circle"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 leftsc">
                <h2 className="fs-heading">
                  Subscribe Our <br /> Newsletter
                </h2>
                <p>
                  Want to bring Smart Natives to more participants? Then
                  subscribe this page with teachers and friends.
                </p>
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
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
