import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import image from "../../assets/logo/image.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [studentOpen, setStudentOpen] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCloseMenu = () => {
    setMobileOpen(false);
    setAboutOpen(false);
    setStudentOpen(false);
    setActivityOpen(false);
    scrollToTop();
  };

  return (
    <>


{/* /* ===== HEADER SECTION ===== */}
<div className="top-header">
  <div className="top-header-inner">

    {/* MOBILE TOGGLE - LEFT */}
    <div
      className="hamburger"
      onClick={() => setMobileOpen(!mobileOpen)}
    >
      ☰
    </div>

    {/* LOGO CENTER */}
    <div className="logo-wrapper ">
      <img src={image} alt="College Logo" className="logo" />
    </div>

  </div>
</div>

      {/* ===== MENU BAR ===== */}
      <nav className={`menu-bar  ${mobileOpen ? "active" : ""}`}>
        <NavLink to="/" className="menu-btn " onClick={handleCloseMenu}>
          Home
        </NavLink>

        {/* ABOUT DROPDOWN */}
        <div className="dropdown ">
          <div className="menu-btn " onClick={() => setAboutOpen(!aboutOpen)}>
            About ▾
          </div>

          <div className={`dropdown-menu ${aboutOpen ? "show" : ""}`}>
            <NavLink to="/about/college " onClick={handleCloseMenu}>
              The College
            </NavLink>
            <NavLink to="/about/presidentDesk" onClick={handleCloseMenu}>
              President Desk
            </NavLink>
            <NavLink to="/about/vision" onClick={handleCloseMenu}>
              Vision
            </NavLink>
            <NavLink to="/about/mission" onClick={handleCloseMenu}>
              Mission
            </NavLink>
            <NavLink to="/about/ourStaff" onClick={handleCloseMenu}>
              Our Staff
            </NavLink>
            <NavLink to="/about/achievements" onClick={handleCloseMenu}>
              Achievements
            </NavLink>
          </div>
        </div>

 <NavLink 
  to="/Courses" 
  className="menu-btn "
  onClick={handleCloseMenu}
>
  Courses
</NavLink>

        {/* STUDENTS DROPDOWN */}
        <div className="dropdown">
          <div
            className="menu-btn "
            onClick={() => setStudentOpen(!studentOpen)}
          >
            Students ▾
          </div>

          <div className={`dropdown-menu ${studentOpen ? "show" : ""}`}>
            <NavLink to="/students/NoticeBoard" onClick={handleCloseMenu}>
              NoticeBoard
            </NavLink>
          
          </div>
        </div>

        {/* ACTIVITIES DROPDOWN */}
        <div className="dropdown">
          <div
            className="menu-btn "
            onClick={() => setActivityOpen(!activityOpen)}
          >
            Activities ▾
          </div>

          <div className={`dropdown-menu ${activityOpen ? "show" : ""}`}>
            <NavLink to="/academics/gallery" onClick={handleCloseMenu}>
              Gallery
            </NavLink>
            <NavLink to="/academics/blog" onClick={handleCloseMenu}>
              Post / Blog
            </NavLink>
            <NavLink to="/academics/nss" onClick={handleCloseMenu}>
              NSS
            </NavLink>
            <NavLink to="/academics/newspeper" onClick={handleCloseMenu}>
              Newspaper Publication
            </NavLink>
          </div>
        </div>

       

        <NavLink to="/iqac" className="menu-btn " onClick={handleCloseMenu}>
          Placement
        </NavLink>


        <NavLink to="/life" className="menu-btn " onClick={handleCloseMenu}>
          Life on Campus
        </NavLink>

        <NavLink to="/contact" className="menu-btn " onClick={handleCloseMenu}>
          Contact Us
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
