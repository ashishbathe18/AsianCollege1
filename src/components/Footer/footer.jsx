import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import image from "../../assets/Footer/image.png";

const Footer = () => {
  // Scroll To Top Function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="footer">
        
        {/* ================= Address Section ================= */}
        <div className="footer-col">
          <h3>Address</h3>
          <p >
            Gat No.240,86, Velhe Market, Maval Chowk,<br />
            Tal. Velhe, Dist. Pune 412212
          </p>

          <p>
            <strong>Contact:</strong>{" "}
            <a href="tel:+919975976605">
              99759 76605 / 93226 04649
            </a>
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:asiancollegevelhe@gmail.com">
              asiancollegevelhe@gmail.com
            </a>
          </p>
        </div>

        {/* ================= Quick Links ================= */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to="/" onClick={scrollToTop}>Home</NavLink></li>
            <li><NavLink to="/about/College" onClick={scrollToTop}>About</NavLink></li>
            <li><NavLink to="/courses" onClick={scrollToTop}>courses</NavLink></li>
          
            <li><NavLink to="/students/noticeboard" onClick={scrollToTop}>Students</NavLink></li>
              </ul>
              </div>
               {/* ================= Quick Links ================= */}
        <div className="footer-col">
          <h3>Quick Links</h3>
              <ul>
            <li><NavLink to="/academics/gallery" onClick={scrollToTop}>Activities</NavLink></li>
            <li><NavLink to="/iqac" onClick={scrollToTop}>Placement</NavLink></li>
            <li><NavLink to="/Life" onClick={scrollToTop}>Life on Campus</NavLink></li>
            <li><NavLink to="/contact" onClick={scrollToTop}>Contact Us</NavLink></li>
          </ul>
        </div>

        {/* ================= Infrastructure ================= */}
        <div className="footer-col">
          <h3>Infrastructure</h3>
          <div className="infra-grid">
            <NavLink to="/infrastructure" onClick={scrollToTop}>
              <img src={image} alt="Infrastructure" />
            </NavLink>
          </div>
        </div>

      </footer>

  
    </>
  );
};

export default Footer;