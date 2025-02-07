import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Nav.css";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        if (!section.id) return;
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
    <header className="navheader">
      <nav>
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={menuOpen ? "nav-links open" : "nav-links"}>
          <li><Link smooth to="/#home" className={activeSection === "home" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link smooth to="/#aboutMe" className={activeSection === "aboutMe" ? "active" : ""} onClick={() => setMenuOpen(false)}>About Me</Link></li>
          <li><Link smooth to="/#whatIDo" className={activeSection === "whatIDo" ? "active" : ""} onClick={() => setMenuOpen(false)}>What I Do</Link></li>
          <li><Link smooth to="/#resume" className={activeSection === "resume" ? "active" : ""} onClick={() => setMenuOpen(false)}>Resume</Link></li>
          <li><Link smooth to="/#work" className={activeSection === "work" ? "active" : ""} onClick={() => setMenuOpen(false)}>Work</Link></li>
          <li><Link smooth to="/#blogs" className={activeSection === "blogs" ? "active" : ""} onClick={() => setMenuOpen(false)}>Blogs</Link></li>
          <li><Link smooth to="/#contactMe" className={activeSection === "contactMe" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact Me</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
