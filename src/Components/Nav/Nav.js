import React, { useState, useEffect } from "react";
import "./Nav.css";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        if (!section.id) return; // Avoid sections without an id
        const sectionTop = section.offsetTop - 150; // Adjust for navbar height
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><a href="#home" className={activeSection === "home" ? "active" : ""}>Home</a></li>
          <li><a href="#aboutMe" className={activeSection === "aboutMe" ? "active" : ""}>About Me</a></li>
          <li><a href="#whatIDo" className={activeSection === "whatIDo" ? "active" : ""}>What I Do</a></li>
          <li><a href="#resume" className={activeSection === "resume" ? "active" : ""}>Resume</a></li>
          <li><a href="#work" className={activeSection === "work" ? "active" : ""}>Work</a></li>
          <li><a href="#blogs" className={activeSection === "blogs" ? "active" : ""}>Blogs</a></li>
          <li><a href="#contactMe" className={activeSection === "contactMe" ? "active" : ""}>Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
