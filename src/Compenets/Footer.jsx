import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <section className="contact" id="contact">
          <div className="heading">
            <h2>Contact</h2>
            <span>Connect With Me</span>
          </div>
          <div className="contact-form">
            <form action>
              <input type="text" placeholder="Your Name" />
              <input type="email" name id placeholder="Your Email" />
              <textarea
                name
                id
                cols={30}
                rows={10}
                placeholder="Write Message Here..."
                defaultValue={""}
              />
              <input
                type="button"
                defaultValue="Send"
                className="contact-button"
              />
            </form>
            <div className="info-box">
              <i className="bx bxs-phone" />
              <span>+91 987 157 6382</span>
              <br />
            </div>
            <div className="info-box">
              <i className="bx bxs-envelope" />
              <span> shivamyash742@gmail.com</span>
            </div>
          </div>
        </section>
        {/* Footer */}
        <div className="footer">
          <h2>Shivam Mishra</h2>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61560241367042">
              <i className="bx bxl-facebook" />
            </a>
            <a href="https://x.com/ShivamYash742">
              <i className="bx bxl-twitter" />
            </a>
            <a href="https://instagram.com/ShivamYash742">
              <i className="bx bxl-instagram" />
            </a>
            <a href="https://github.com/ShivamYash742">
              <i className="bx bxl-github" />
            </a>
            <a href="https://www.linkedin.com/in/shivamyash742/">
              <i className="bx bxl-linkedin" />
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="copyright">
          <p>© Shivam Mishra All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
