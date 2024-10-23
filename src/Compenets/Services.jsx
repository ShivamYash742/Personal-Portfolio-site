import React from "react";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";
import p7 from "../img/p7.jpg";
import p8 from "../img/p8.jpg";

const Services = () => {
  return (
    <div>
      <section className="services" id="services">
        <div className="heading">
          <h2>Services</h2>
        </div>
        <div className="services-content">
          <div className="services-box">
            <i className="bx bx-code-alt" />
            <h3>
              Web <br />
              Development
            </h3>
            <a href="#">Learn More</a>
          </div>
          <div className="services-box">
            <i className="bx bx-server" />
            <h3>
              Backend <br />
              Development
            </h3>
            <a href="#">Learn More</a>
          </div>
          <div className="services-box">
            <i className="bx bx-brush" />
            <h3>
              UI/UX <br />
              Design
            </h3>
            <a href="#">Learn More</a>
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="heading">
          <h2>Portfolio</h2>
          <span>my Recent Work</span>
        </div>
        <div className="portfolio-content">
          <a href="https://calculator-shivam-mishras-projects-b54fd7b1.vercel.app/">
            <div className="portfolio-img">
              <img src={p1} alt />
              <br />
              <h1 className="center">Calculator in react</h1>
            </div>
          </a>
          <a href="https://login-page-sable-three.vercel.app/">
            <div className="portfolio-img">
              <img src={p2} alt />
              <br />
              <h1 className="center">Login / SignUp Page</h1>
            </div>
          </a>
          <div className="portfolio-img">
            <img src={p3} alt />
            <br />
            <h1 className="center">Adding Soon...</h1>
          </div>
          <div className="portfolio-img">
            <img src={p4} alt />
            <br />
            <h1 className="center">Adding Soon...</h1>
          </div>
          <div className="portfolio-img">
            <img src={p5} alt />
            <br />
            <h1 className="center">Adding Soon...</h1>
          </div>
          <div className="portfolio-img">
            <img src={p6} alt />
            <br />
            <h1 className="center">Adding Soon...</h1>
          </div>
          <div className="portfolio-img">
            <img src={p7} alt />
            <br />
            <h1 className="center">Adding Soon...</h1>
          </div>
          <div className="portfolio-img">
            <img src={p8} alt />
            <br />
            <h1 className="center">Adding Soon...</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
