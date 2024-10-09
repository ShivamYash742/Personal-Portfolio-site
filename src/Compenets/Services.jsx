import React from "react";

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
            <img src="src/img/p1.jpg" alt />
          </div>
          <div className="portfolio-img">
            <img src="src/img/p2.jpg" alt />
          </div>
          <div className="portfolio-img">
            <img src="src/img/p3.jpg" alt />
          </div>
          <div className="portfolio-img">
            <img src="src/img/p4.jpg" alt />
          </div>
          <div className="portfolio-img">
            <img src="src/img/p5.jpg" alt />
          </div>
          <div className="portfolio-img">
            <img src="src/img/p6.jpg" alt />
          </div>
          <div className="portfolio-img">
            <img src="src/img/p7.jpg" alt />
          </div>
          <div className="portfolio-img">
            <img src="src/img/p8.jpg" alt />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
