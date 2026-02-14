import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import image from "../../assets/image.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* ===== TOP HEADER ===== */}
      <div className="top-header">
        <div className="header-container">
          <div className="left-section">
            <img src={image} alt="Logo" className="logo" />

            <div className="college-text">
              <h6>ASIAN COLLEGE OF COMMERCE AND ARTS</h6>
              <h6>MANAGEMENT & RESEARCH, AKURDI</h6>
              <p>
                Accredited by NAAC | ISO 21001:2018 <br />
                Approved by AICTE | Affiliated to SPPU
              </p>
            </div>
          </div>

          <div className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            ☰
          </div>
        </div>
      </div>

      {/* ===== MENU BAR ===== */}
      <nav className={`menu-bar ${mobileOpen ? "active" : ""}`}>

        <NavLink to="/" className="menu-btn">Home</NavLink>

        {/* ABOUT DROPDOWN */}
        <div className="dropdown">
          <span className="menu-btn">About ▾</span>
          <div className="dropdown-menu">
            <NavLink to="/about/college">The College</NavLink>
            <NavLink to="/about/vision/mission">Vision/mission</NavLink>
           
          </div>
        </div>

        {/* STUDENTS DROPDOWN */}
        <div className="dropdown">
          <span className="menu-btn">Students ▾</span>
          <div className="dropdown-menu">
            <NavLink to="/students/ug">UG</NavLink>
            <NavLink to="/students/pg">PG</NavLink>
            <NavLink to="/students/phd">PhD</NavLink>
          </div>
        </div>

       {/* ACTIVITIES DROPDOWN */}
<div className="dropdown">
  <span className="menu-btn">Activities ▾</span>
  <div className="dropdown-menu">
    <NavLink to="/academics/gallery">Gallery</NavLink>
    <NavLink to="/academics/blog">Post/blog</NavLink>
    <NavLink to="/academics/nss">NSS</NavLink>
    <NavLink to="/academics/newspeper">News pepar publication</NavLink>
  </div>
</div>
        <NavLink to="/examination" className="menu-btn">Examination</NavLink>
        <NavLink to="/iqac" className="menu-btn">placement</NavLink>
        <NavLink to="/careers" className="menu-btn">Careers</NavLink>
        <NavLink to="/life" className="menu-btn">life on campus</NavLink>
        <NavLink to="/contact" className="menu-btn">Contact Us</NavLink>

      </nav>

      {/* ===== ANNOUNCEMENT ===== */}
      <div className="announcement">
        A Brand New Hostel at Asian College Residency
      </div>
    </>
  );
};

export default Navbar;
