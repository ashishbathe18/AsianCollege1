import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Vision.css";
import visionImg from "../../assets/about/vision.png";

const Vision = () => {
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
      { threshold: 0.2 }
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
    <div className="vision-page">
      {/* Hero Section */}
      <div className="vision-hero">
        <div className="vision-overlay fade-down">
          <h1>Vision</h1>
          
        </div>
      </div>

      <div className="vision-container">
        {/* Sidebar */}
        <div
          ref={addToRefs}
          data-id="sidebar"
          className={`vision-sidebar slide-left ${
            visible["sidebar"] ? "show" : ""
          }`}
        >
          <h3>About</h3>
          <ul>
            <li><Link to="/about/college">The College</Link></li>
            <li><Link to="/about/president">President’s Desk</Link></li>
            <li className="active"><Link to="#">Vision</Link></li>
            <li><Link to="/about/mission">Mission</Link></li>
            <li><Link to="#">Our Staff</Link></li>
            <li><Link to="#">Achievements</Link></li>
          </ul>
        </div>

        {/* Content */}
        <div
          ref={addToRefs}
          data-id="content"
          className={`vision-content fade-up ${
            visible["content"] ? "show" : ""
          }`}
        >
          <h2>Vision</h2>

          <div
            ref={addToRefs}
            data-id="image"
            className={`vision-image zoom-in ${
              visible["image"] ? "show" : ""
            }`}
          >
            <img src={visionImg} alt="Vision" />
          </div>

          <div
            ref={addToRefs}
            data-id="quote"
            className={`vision-quote slide-right ${
              visible["quote"] ? "show" : ""
            }`}
          >
            <p>
              “The vision of AAER’s Asian College of Science and Commerce is to
              provide all the facilities and training to students to enable them
              to become good Managers, Entrepreneurs and Citizens.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
