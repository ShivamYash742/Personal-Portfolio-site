import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [navbarActive, setNavbarActive] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);
  const darkmodeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle("shadow", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (navbarRef.current) {
        navbarRef.current.classList.remove("active");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuClick = () => {
    setNavbarActive(!navbarActive);
  };

  const handleDarkModeClick = () => {
    setDarkMode(!darkMode);
    if (darkmodeRef.current) {
      darkmodeRef.current.classList.toggle("bx-moon");
      darkmodeRef.current.classList.toggle("bx-sun");
    }
    document.body.classList.toggle("active");
  };

  return (
    <div>
      {/* Navbar */}
      <header ref={headerRef}>
        <a href="#" className="logo">
          Shivam Mishra
        </a>
        <div className="bx bx-menu" id="menu-icon" ref={menuRef} onClick={handleMenuClick} />
        <ul className={`navbar ${navbarActive ? "active" : ""}`} ref={navbarRef}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <div className={`bx ${darkMode ? "bx-sun" : "bx-moon"}`} id="darkmode" ref={darkmodeRef} onClick={handleDarkModeClick} />
        </ul>
      </header>
    </div>
  );
};

export default Header;