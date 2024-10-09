import React from "react";

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
            <img src="img/about.png" alt />
          </div>
          <div className="about-text">
            <p>
              Hi. I am a Web Developer, Tech Enthusiast,FrontEnd designer. and Learning Backend Development
            </p>
            <div className="information">
              {/* Box 1 */}
              <div className="info-box">
                <i className="bx bxs-user" />
                <span>Shivam Mishra</span>
              </div>
              {/* Box 2 */}
              <div className="info-box">
                <i className="bx bxs-phone" />
                <span>+91 987 157 6382</span>
              </div>
              {/* Box 3 */}
              <div className="info-box">
                <i className="bx bxs-envelope" />
                <span>shivamyash742@gmail.com</span>
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
