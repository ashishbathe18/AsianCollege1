import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Mission.css";
import missionImg from "../../assets/about/mission.png";

const Mission = () => {
  const [visible, setVisible] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  return (
    <div className="mission-page">
      {/* HERO */}
      <div className="mission-hero">
        <div className="hero-overlay">
          <h1>Mission</h1>
         
        </div>
      </div>

      <div className="mission-container">
        {/* SIDEBAR */}
        <nav className="mission-sidebar">
          <h3>About</h3>
          <ul>
            <li><Link to="/about/college">The College</Link></li>
              <li><Link to="/about/presidentDesk">President’s Desk</Link></li>
                              <li><Link to="/about/vision">Vision</Link></li>
                              <li><Link to="/about/mission">Mission</Link></li>
                              <li><Link to="/about/ourStaff">Our Staff</Link></li>
                              <li><Link to="/about/achievements">Achievements</Link></li>
          </ul>
        </nav>

        {/* CONTENT */}
        <main className="mission-content">
          <h2
            ref={addToRefs}
            data-id="heading"
            className={`fade-in ${visible["heading"] ? "visible" : ""}`}
          >
            Our Mission
          </h2>

          <div
            ref={addToRefs}
            data-id="img"
            className={`fade-in mission-image ${visible["img"] ? "visible" : ""}`}
          >
            <img src={missionImg} alt="Mission" />
          </div>

          <blockquote
            ref={addToRefs}
            data-id="quote"
            className={`fade-in mission-quote ${visible["quote"] ? "visible" : ""}`}
          >
            “Provide greater opportunities and access to higher education with
            equity to all the eligible students/persons and in particular to
            underprivileged sections thereby contributing to the development
            of society and nation.”
          </blockquote>
        </main>
      </div>
    </div>
  );
};

export default Mission;
