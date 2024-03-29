import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useTranslation } from "react-i18next";
import IntlMessages from '../helpers/IntlMessages';

function TeamSlider() {
    const team = [
        {
            "image":"assets/img/testi1.png",
            "name":"Rinku Sharma",
            "description":"Rinku is the initiator of Smart Natives. He is a specialist in the IT-sector and very experienced in implementing IT-projects in educating environments. He is also the founder of Techeroes, an IT-school and innovation lab."
        },
        {
            "image":"assets/img/Adriane_Castrinakis.jpg",
            "name":"Adriane Castrinakis",
            "description":"Adriane is a teacher and specialized in career education. She cares about the education of future generations and loves learning with and from young people. She ensures that the content of our products is student-centered."
        },
        {
            "image":"assets/img/Julian_Image.jpeg",
            "name":"Julian ",
            "description":"Julian is a student in middle school and our first real Smart Native. He understands the obstacles and problems of his generation and advises us whenever he can."
        },
        {
            "image":"assets/img/constanze-gerlach.jpg",
            "name":"Constanze gerlach",
            "description":"Constanze is our marketing advisor and helps us with all questions about digital marketing."
        },
        {
            "image":"assets/img/MohammadWaheed.jpeg",
            "name":"Mohammad Waheed",
            "description":"Mohammed is a student of xxxxx and has completed many robotic projects with kids and teenagers. He is an immigrant and wants to see more young talents in the IT-sector."
        }
    ]
  return (
        <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav={true}
            autoplay = {true}
            items = {1}
        >
          <div className="item">  
            <div className="inbox">
            <img src="assets/img/rinku.png" />
                <p><IntlMessages id="team.description1"/></p>
                {/* <p><strong>Innovative, creative and technical heart of smart natives</strong>
</p> */}
                <h3>Rinku Sharma</h3>
            </div>
        </div>
        <div className="item">  
            <div className="inbox">
            <img src="assets/img/Asset2.png" />
            {/* <p><strong>Responsible for ensuring content quality</strong></p> */}
            <p><IntlMessages id="team.description2"/></p>
            <h3>Adriane Castrinakis</h3>
            </div>
        </div>
        <div className="item">  
            <div className="inbox">
            <img src="assets/img/Asset3.png" />
          {/* <p><strong>Our pitch specialist and first real Smart Native.
</strong></p> */}
            <p><IntlMessages id="team.description3"/></p>
            <h3>Julian</h3>
            </div>
        </div>
        
        <div className="item">  
            <div className="inbox">
            <img src="assets/img/Asset5.png" />
           {/* <p><strong>Our structured marketing advisor
</strong></p> */}
            <p><IntlMessages id="team.description4"/></p>
            <h3>Constanze Gerlach</h3>
            </div>
        </div>
        <div className="item">  
            <div className="inbox">
            <img src="assets/img/Asset4.png" />
            {/* <p><strong>Robotics Specialist
</strong></p> */}
            <p><IntlMessages id="team.description5"/></p>
            <h3>Mohammad Waheed</h3>
            </div>
        </div>
        <div className="item">  
            <div className="inbox">
            <img src="assets/img/sachin.png" />
            <p><strong><IntlMessages id="team.description6"/></strong></p>
            <h3>Sachin Pandey</h3>
            </div>
        </div>
        </OwlCarousel>
  );
}

export default TeamSlider;
