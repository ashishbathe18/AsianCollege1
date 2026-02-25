import React, { useState } from "react";
import "./OurStaff.css";
import { Link, useLocation } from "react-router-dom";

import sapteImg from "../../assets/img/OurStaff/sapte.png";
import Img1 from "../../assets/img/OurStaff/anandSapte.png";
import Img2 from "../../assets/img/OurStaff/img2.png";
import Img3 from "../../assets/img/OurStaff/img3.png";
import Img4 from "../../assets/img/OurStaff/img4.png";
import art1 from "../../assets/img/OurStaff/Art1.png";
import art2 from "../../assets/img/OurStaff/Art2.png";
import art3 from "../../assets/img/OurStaff/Art3.png";
import art4 from "../../assets/img/OurStaff/Art4.png";
import art5 from "../../assets/img/OurStaff/Art5.png";
import art6 from "../../assets/img/OurStaff/Art6.png";
import art7 from "../../assets/img/OurStaff/Art7.png";
import art8 from "../../assets/img/OurStaff/Art8.png";
import commerce1 from "../../assets/img/OurStaff/commerce1.png";
import commerce2 from "../../assets/img/OurStaff/commerce2.png";
import commerce3 from "../../assets/img/OurStaff/commerce3.png";
import commerce4 from "../../assets/img/OurStaff/commerce4.png";
import commerce5 from "../../assets/img/OurStaff/commerce5.png";
import sci1 from "../../assets/img/OurStaff/sci1.png";
import sci2 from "../../assets/img/OurStaff/sci2.png";
import sci3 from "../../assets/img/OurStaff/sci3.png";
import sci4 from "../../assets/img/OurStaff/sci4.png";
import sci5 from "../../assets/img/OurStaff/sci5.png";
import sci6 from "../../assets/img/OurStaff/sci6.png";
import sci7 from "../../assets/img/OurStaff/sci7.png";
import other1 from "../../assets/img/OurStaff/other1.png";
import other2 from "../../assets/img/OurStaff/other2.png";
import other3 from "../../assets/img/OurStaff/other3.png";
import other4 from "../../assets/img/OurStaff/other4.png";
import other5 from "../../assets/img/OurStaff/other5.png";
import p11 from "../../assets/img/OurStaff/p1.png";
import p33 from "../../assets/img/OurStaff/p3.png";
import p44 from "../../assets/img/OurStaff/p4.png";
import p55 from "../../assets/img/OurStaff/p5.png";
import p66 from "../../assets/img/OurStaff/p6.png";
import p77 from "../../assets/img/OurStaff/p7.jpeg";
import p88 from "../../assets/img/OurStaff/p8.jpeg";
import p99 from "../../assets/img/OurStaff/p9.jpeg";


export default function OurStaff() {

  const [activeTab, setActiveTab] = useState("Management");
const location = useLocation();

  const staffData = {
    Management: [
     {
    name: "Dr. Anita Sapte",
    role: "President, AAER",
    qualification: "Ph.D, BE(Industrial Electronics), MBA(Marketing)",
    img: sapteImg,   // 👈 here
  },
  {
    name: "Mr. Anand Sapte",
    role: "Vice-President, AAER",
    qualification: "",
    img: Img1,
  },
  {
    name: "Mr. Anil Sapte",
    role: "",
    qualification: "BE (Civil)",
    img: Img2,
  },
  
  {
    name: "Dr. Savita Singh",
    role: "Principal",
    qualification: "B.A, M.A, M.Phil, Ph.D",
    img: Img4
  },
    ],

    Arts: [
     
      {
  name: "Mrs. Gauri Vijay Ghatge Renuse",
  role: "Assistant Professor",
  qualification: "M.A History, M.A Political Science, B.Ed",
  img: p44,
},
{
  name: "Mrs. Snehal Uchale",
  role: "Assistant Professor",
  qualification:
    "BSL. L L.B LLM",
  img: p66,
},

{
  name: "Gautam Kedarnath Jagtap",
  role: "Assistant Professor",
  qualification:
    "Focused on Holistic Development and Academic Excellence of students with specialization in Marathi and Banking Financial Services Insurance Communication.",
  img: art8,
},

{
  name: "Sushmita Prakash Nikalje ",
  role: "Assistant Professor",
  qualification:
    "M.A in English",
  img: p77,
},
{
  name: "Suryavanshi Jyoti Arun ",
  role: "",
  qualification:
    "MCA, BSC CS, Diploma in IT",
  img: p99,
},


    ],

    Commerce: [

  
     {
  name: "Mrs. Gauri Vijay Ghatge Renuse",
  role: "Assistant Professor",
  qualification: "M.A History, M.A Political Science, B.Ed",
  img: p44,
},
  {
    name: "Tushar Anil Bargaje ",
    role: "Assistant Professor",
    qualification: "",
    experience: "",
    img: p55,
  },
  {
  name: "Mrs. Snehal Uchale",
  role: "Assistant Professor",
  qualification:
    "BSL. L L.B LLM",
  img: p66,
},
{
  name: "Sushmita Prakash Nikalje ",
  role: "Assistant Professor",
  qualification:
    "M.A in English",
  img: p77,
},
{
  name: "Dhanshree Raghavdas More",
  role: "Assistant Professor",
  qualification:
    "",
  img: p88,
},
{
  name: "Suryavanshi Jyoti Arun ",
  role: "",
  qualification:
    "MCA, BSC CS, Diploma in IT",
  img: p99,
},

  
],

   Science: [
  {
    name: " Soumya Kamlesh Malgaonkar",
    role: "Assistant Professor",
    qualification: "MSc Biotechnology",
    experience: "",
    img: p33,
  },
  {
  name: "Gautam Kedarnath Jagtap",
  role: "Assistant Professor",
  qualification:
    "Focused on Holistic Development and Academic Excellence of students with specialization in Marathi and Banking Financial Services Insurance Communication.",
  img: art8,
},
  {
  name: "Sushmita Prakash Nikalje ",
  role: "Assistant Professor",
  qualification:
    "M.A in English",
  img: p77,
},
{
  name: "Suryavanshi Jyoti Arun ",
  role: "",
  qualification:
    "MCA, BSC CS, Diploma in IT",
  img: p99,
},
],

   Other: [
 
  {
    name: "pawar priyanka chandrakant.",
    role: "Office Supritendent ",
    qualification: "B.Com",
    experience: "4 Years Experience",
    img: p11,
  },
],

  };

  return (
    <div className="staff-page">

      {/* Hero Section */}
      <div className="hero-over">
        <div className="hero-overlay">
          <h1>Our Staff</h1>
          <p>Meet Our Experienced Faculty Members</p>
        </div>
      </div>

      <div className="main-container">

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


        {/* Content */}
        <div className="content-area">

          {/* Tabs */}
          <div className="tabs">
            {["Management", "Arts", "Commerce", "Science", "Other"].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? "active-tab" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <h2 className="section-title">{activeTab}</h2>

          <div className="staff-grid">
            {staffData[activeTab].length > 0 ? (
              staffData[activeTab].map((staff, index) => (
                <div className="staff-card" key={index}>
                  <div className="staff-image">
                    <img src={staff.img} alt={staff.name} />
                  </div>

                  <div className="staff-info">
                    <h3>{staff.name}</h3>
                    <p className="role">{staff.role}</p>
                    <p className="qualification">{staff.qualification}</p>
                    {/* <button className="details-btn">
                      View Details
                    </button> */}
                  </div>
                </div>
              ))
            ) : (
              <p>No staff available.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
