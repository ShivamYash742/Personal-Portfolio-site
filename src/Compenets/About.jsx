import React from "react";
import profile from "../img/about.jpg";
const About = () => {
  return (
    <div>
      {/* About */}
      <section className="about" id="about">
        <div className="heading">
          <h2>About</h2>
          <span>Introduction</span>
        </div>
        {/* About Content */}
        <div className="about-container">
          <div className="about-img">
            <img src={profile} alt />
          </div>
          <div className="about-text">
            <p>
              Hi. I am a Web Developer, Tech Enthusiast,FrontEnd designer. and
              Learning Backend Development Currently i am pursing B-Tech From
              MSIT batch 2023-2027 I have learnt HTML , CSS, JavaScript,
              React,MongoDB , basic knowledge of C ,C++ ,Python in python i have
              some major projects like a snake game (i lost it in my old laptop)
              , A scientific Calulator and Many more... however, I am still
              learning and improving my skills.
            </p>
            <div className="information">
              <div className="info-box">
                <i className="bx bxs-user" />
                <span>Shivam Mishra</span>
              </div>
              
            </div>
            <a href="#" className="btn">
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
