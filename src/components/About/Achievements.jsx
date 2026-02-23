
import React from "react";
import "./Achievements.css";
import { Link } from "react-router-dom";
import achiv from "../../assets/about/achiv.png";
import achiv2 from "../../assets/about/achiv2.png";
import achiv3 from "../../assets/about/achiv3.png";
import achiv4 from "../../assets/about/achiv4.png";
const achievementsData = [
  {
    id: 1,
    title: "Best Education of the Year Award 2023",
    org: "National Achievers Recognition Forum",
    desc: "In recognition of sterling merit excellence performance and outstanding contribution.",
   img: achiv,
  },
  {
    id: 2,
    title: "Best Private College of the Year",
    org: "Asian Education Leadership",
    desc: "Asian Education Leadership Award",
    img: achiv2,
  },
  {
    id: 3,
    title: "Indian Glory Award",
    org: "IGC Conference",
    desc: "Most Emerging Higher Education Institute of the Year",
    img:achiv3,
  },
 {
    id: 4,
    title: "Shiksha Bharati Award",
    org: "Indian Achiever Forum",
    desc: "Outstanding Professional Achievement & Contribution in Nation Building",
    img:achiv4,
  },

];

export default function Achievements() {
  return (
    <div className="achievements-page">

      {/* HERO SECTION */}
      <div className="achievements-hero">
        <h1>Achievements</h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="achievements-container">


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
        </div>


        {/* RIGHT CONTENT */}
        <div className="content">
          <h2 className="page-title">Achievements</h2>
          <div className="title-line"></div>

          {achievementsData.map((item) => (
            <div key={item.id} className="achievement-card">
              <img src={item.img} alt={item.title} />
              <div className="card-text">
                <h4>{item.title}</h4>
                <p className="org">{item.org}</p>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
