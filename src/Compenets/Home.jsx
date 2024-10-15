import React from "react";
import profile from "../img/profile.png"

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className="social">
          <a href="https://github.com/ShivamYash742">
            <i className="bx bxl-github" />
          </a>
        </div>
        <div className="home-img">
          <img src={profile} alt />
        </div>
        <div className="home-text">
          <span>Hello, I'm</span>
          <h1 className="typing-animation">Shivam Mishra</h1>
          <h2>Frontend & Backend Developer</h2>
          <p>
            {" "}
            Hi. I am a Student at MSIT'27,
            <br /> Tech Enthusiast, Quick Learner &amp; <br /> Web
            Designer.
          </p>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
        <div className="scroll-down">
          <a href="#about">
            <i className="bx bx-mouse" />
            <span>Scroll Down</span>
            <i className="bx bxs-down-arrow-alt" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
