import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./AboutCollege.css";

const AboutCollege = () => {
  const contentRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="about-college-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay">
          <h1>The College</h1>
          <p>
            <Link to="/">Home</Link> /{" "}
            <Link to="/about">About</Link> / The College
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="about-container">
        {/* Sidebar */}
        <div className="about-sidebar">
          <h3>About</h3>
          <ul>
            <li className="active">
              <Link to="/about">The College</Link>
            </li>
            <li><Link to="/about/presidentDesk">President’s Desk</Link></li>
            <li><Link to="/about/vision">Vision</Link></li>
            <li><Link to="/about/mission">Mission</Link></li>
            <li><Link to="/about/ourStaff">Our Staff</Link></li>
            <li><Link to="/about/achievements">Achievements</Link></li>
          </ul>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`about-content ${visible ? "show" : ""}`}
        >
          <h2 className="text-center"><b>Welcome To Our College</b></h2>

          <img
            src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200"
            alt="College"
            className="about-image"
          />

          <p>
            Our institution was established with the objective of providing
            quality education and enhancing employability skills through
            innovation and excellence.
          </p>

          <p>
            Education and training aim to increase knowledge, develop
            professional competence, and shape responsible citizens who can
            contribute positively to society.
          </p>

          <p>
            We focus on academic excellence, leadership, discipline, and
            holistic development to prepare students for global challenges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCollege;
