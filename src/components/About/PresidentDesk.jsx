import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./PresidentDesk.css";
import presidentImg from "../../assets/about/president.png";
import { useLocation } from "react-router-dom";

const PresidentDesk = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

const location = useLocation();
  return (
    <div className="president-page">
      {/* Hero Section */}
      <div className="president-hero">
        <div className="hero-overlay">
          <h1>President Desk</h1>
        </div>
      </div>

      <div className="president-container">
        {/* Sidebar */}
       <div className="president-sidebar">
  <h3>About</h3>
  <ul>
    <li className={location.pathname === "/about/college" ? "active" : ""}>
      <Link to="/about/college">The College</Link>
    </li>

    <li className={location.pathname === "/about/presidentDesk" ? "active" : ""}>
      <Link to="/about/presidentDesk">President’s Desk</Link>
    </li>

    <li className={location.pathname === "/about/vision" ? "active" : ""}>
      <Link to="/about/vision">Vision</Link>
    </li>

    <li className={location.pathname === "/about/mission" ? "active" : ""}>
      <Link to="/about/mission">Mission</Link>
    </li>

    <li className={location.pathname === "/about/ourStaff" ? "active" : ""}>
      <Link to="/about/ourStaff">Our Staff</Link>
    </li>

    <li className={location.pathname === "/about/achievements" ? "active" : ""}>
      <Link to="/about/achievements">Achievements</Link>
    </li>
  </ul>
</div>


        {/* Content */}
        <div
          ref={addToRefs}
          data-id="main"
          className={`president-content ${
            visibleSections["main"] ? "show" : ""
          }`}
        >
          <h2>President Desk</h2>

          <div className="president-top-section">
            {/* Slide Left */}
           <div
  ref={addToRefs}
  data-id="image"
  className={`president-image slide-left ${
    visibleSections["image"] ? "show" : ""
  }`}
>
  <img 
    src={presidentImg}
    alt="President"
  />
</div>

            {/* Slide Right */}
            <div
              ref={addToRefs}
              data-id="quote"
              className={`president-quote slide-right ${
                visibleSections["quote"] ? "show" : ""
              }`}
            >
              <p>
                Swami Vivekananda always encouraged students to believe in themselves and their inner strength. He said that every individual has immense potential, and success comes from awakening that power within. His famous message, “Arise, awake, and stop not till the goal is reached,” inspires students to stay focused on their goals.

He believed that education is not just about earning a livelihood but about building strong character and developing the mind. Discipline, concentration, and hard work are essential for success. According to him, fear is the biggest obstacle, and students must overcome it with courage and confidence.

Swami Vivekananda also taught that failures are stepping stones to success. One should never give up but keep trying with determination. He considered youth as the greatest strength of a nation and believed that dedicated, well-educated students can shape a bright future for their country.
              </p>
              <span>– Swami Vivekananda</span>
            </div>
          </div>

          {/* Zoom Animation */}
          <div
            ref={addToRefs}
            data-id="text"
            className={`president-text zoom-in ${
              visibleSections["text"] ? "show" : ""
            }`}
          >
            <h4>President's Message</h4>

            <p>
            Today, the world is moving towards globalization. Increased competition among businesses has raised minimum competency levels of manpower. It has become almost important to generate quality and competent knowledge managers. Education is considered the foundation of an excellent career. ASIAN ACADEMY values parents' and students' concerns for quality education and excellent career. ASIAN ACADEMY provides a conducive learning environment for the fundamental growth of the student.

ASIAN ACADEMY believes that students’ career growth comes from the synergy of quality teaching and an excellent earning environment. ASIAN ACADEMY is committed to facilitating our student's career development through quality teaching. Our teaching staff and nonteaching staff are well qualified and experts in the field motivated to undertake fundamental development of and are our students. The youngest nation on the planet needs career based practical education system.
            </p>

            <strong>
              Dr. Manjiri Karekar  <br />
             Principal  <br />
              M.B.A (Marketing) <br />
              Ph.D
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresidentDesk;
