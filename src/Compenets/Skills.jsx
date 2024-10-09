import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="skills" id="skills">
        <div className="heading">
          <h2>Skills</h2>
          <span>My Skills</span>
        </div>
        {/* Skills Content */}
        <div className="skills-container">
          <div className="bars">
            {/* Box 1 */}
            <div className="bars-box">
              <h3>HTML</h3>
              <span>94%</span>
              <div className="light-bar" />
              <div className="percent-bar html-bar" />
            </div>
            {/* Box 2 */}
            <div className="bars-box">
              <h3>CSS</h3>
              <span>84%</span>
              <div className="light-bar" />
              <div className="percent-bar css-bar" />
            </div>
            {/* Box 3 */}
            <div className="bars-box">
              <h3>JavaScript</h3>
              <span>74%</span>
              <div className="light-bar" />
              <div className="percent-bar js-bar" />
            </div>
            {/* Box 4 */}
            <div className="bars-box">
              <h3>React</h3>
              <span>80%</span>
              <div className="light-bar" />
              <div className="percent-bar react-bar" />
            </div>
          </div>
          <div className="skills-img">
            <img src="img/skills.png" alt />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
