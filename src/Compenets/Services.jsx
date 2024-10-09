import React from "react";
import p1 from "../img/p1.jpg"
import p2 from "../img/p2.jpg"
import p3 from "../img/p3.jpg"
import p4 from "../img/p4.jpg"
import p5 from "../img/p5.jpg"
import p6 from "../img/p6.jpg"
import p7 from "../img/p7.jpg"
import p8 from "../img/p8.jpg"

const Services = () => {
  return (
    <div>
      {/* Services */}
      <section className="services" id="services">
        <div className="heading">
          <h2>Services</h2>
          <span>Services</span>
        </div>
        <div className="services-content">
          {/* Box 1 */}
          <div className="services-box">
            <i className="bx bx-code-alt" />
            <h3>
              Web <br />
              Development
            </h3>
            <a href="#">Learn More</a>
          </div>
          {/* Box 2 */}
          <div className="services-box">
            <i className="bx bx-server" />
            <h3>
              Backend <br />
              Development
            </h3>
            <a href="#">Learn More</a>
          </div>
          {/* Box 3 */}
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
      {/* Portfolio */}
      <section className="portfolio" id="portfolio">
        <div className="heading">
          <h2>Portfolio</h2>
          <span>Our Recent Work</span>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-img">
            <img src={p1} alt />
          </div>
          <div className="portfolio-img">
            <img src={p2} alt />
          </div>
          <div className="portfolio-img">
            <img src={p3} alt />
          </div>
          <div className="portfolio-img">
            <img src={p4} alt />
          </div>
          <div className="portfolio-img">
            <img src={p5} alt />
          </div>
          <div className="portfolio-img">
            <img src={p6} alt />
          </div>
          <div className="portfolio-img">
            <img src={p7} alt />
          </div>
          <div className="portfolio-img">
            <img src={p8} alt />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
