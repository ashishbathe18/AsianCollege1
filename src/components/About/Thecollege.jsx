import React from "react";
import "./Thecollege.css";

import bgImg from "../../assets/about/image.jpg"
import campusImg from "../../assets/about/about-campus.jpg";

const About = () => {
  return (
    <div
      className="about-wrapper"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="about-content">
        <div className="about-text animate-left">
          <h2>ABOUT US</h2>
          <p>
            Kalyan Jadhav's Educational Institutes (KJEI), the East Coast mecca of
            engineering, management and sciences is the ultimate place for
            information overload, endless possibilities and expanding your
            horizon. The institute within Pune is spread across 110 acres of
            picturesque campus nestled in the green valley, with its near zero
            pollution and fresh air, creates a perfectly conducive low-stress
            climate for learning, research, innovation and character-building.
            With over 8000 students, KJEI has a strong sense of community.
          </p>
        </div>

        <div className="about-image animate-right">
          <img src={campusImg} alt="Campus Building" />
        </div>
      </div>
    </div>
  );
};

export default About;
