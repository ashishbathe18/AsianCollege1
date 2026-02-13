// import React from "react";
// import "./OurStaff.css";

// const staff = [
//   {
//     name: "Dr. Amit Saple",
//     role: "Principal",
//     img: "https://via.placeholder.com/120",
//   },
//   {
//     name: "Mr. Anand Saple",
//     role: "Vice Principal",
//     img: "https://via.placeholder.com/120",
//   },
//   {
//     name: "Mr. Anil Saple",
//     role: "HOD - Management",
//     img: "https://via.placeholder.com/120",
//   },
//   {
//     name: "Shruti Bage",
//     role: "HOD - Engineering",
//     img: "https://via.placeholder.com/120",
//   },
//   {
//     name: "Dr. Swati Singh",
//     role: "HOD - Science",
//     img: "https://via.placeholder.com/120",
//   },
// ];

// export default function OurStaff() {
//   return (
//     <div className="page">

//       {/* Top Navbar */}
     

//       {/* Banner */}
//       <div className="banner">
//         <div className="overlay">
//           <h1>Our Staff</h1>
//           <p>Meet Our Experienced Faculty Members</p>
//         </div>
//       </div>

//       <div className="main">

//         {/* Sidebar */}
//         <div className="sidebar">
//           <h3>About</h3>
//           <ul>
//             <li>The College</li>
//             <li>President's Desk</li>
//             <li>Vision</li>
//             <li>Mission</li>
//             <li className="active">Our Staff</li>
//             <li>Achievements</li>
//           </ul>
//         </div>

//         {/* Content */}
//         <div className="content">
//           <div className="tabs">
//             <button className="active-tab">Management</button>
//             <button>Arts</button>
//             <button>Commerce</button>
//             <button>Science</button>
//           </div>

//           <div className="staff-grid">
//             {staff.map((item, index) => (
//               <div
//                 className="staff-card"
//                 key={index}
//                 style={{ animationDelay: `${index * 0.15}s` }}
//               >
//                 <div className="img-box">
//                   <img src={item.img} alt={item.name} />
//                 </div>
//                 <div className="info">
//                   <h4>{item.name}</h4>
//                   <p>{item.role}</p>
//                   <button>View Profile</button>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }




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
    name: "Shruti Rege",
    role: "Vice-Principal",
    qualification: "MCA (Engineering)",
    img:Img3
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
        name: "Mr. Mayur Dilip More",
        role: "Assistant Professor",
        qualification: "MA (Economics)",
        img: art1,
      },
      {
        name: "Mr. Ankush Jadhav",
        role: "HOD B.A",
        qualification: "MA Political Science",
        img: art2
      },
      {
        name: "Mr. Balasaheb Shingare",
        role: "Assistant Professor",
        qualification: "MA (Marathi)",
        img: art3,
      },
      {
        name: "Suashma Nikale",
        role: "Assistant Professor",
        qualification: "MA (English), B.Ed",
        img: art4,
      },
      {
  name: "Mrs. Gauri Vijay Ghatge Renuse",
  role: "Assistant Professor",
  qualification: "M.A History, M.A Political Science, B.Ed",
  img: art5,
},
{
  name: "Shraddha Devidas Hingane",
  role: "Assistant Professor",
  qualification: "M.A Geography",
  img: art6,
},
{
  name: "Kengar Revansiddha Shankar",
  role: "Assistant Professor",
  qualification: "M.A, B.Ed",
  img: art7,
},
{
  name: "Gautam Kedarnath Jagtap",
  role: "Assistant Professor",
  qualification:
    "Focused on Holistic Development and Academic Excellence of students with specialization in Marathi and Banking Financial Services Insurance Communication.",
  img: art8,
},

    ],

    Commerce: [
  {
    name: "Mrs. Swati C. Kale",
    role: "HOD, BBA, BBA-IB, BCA",
    qualification: "M.Com, MBA (Finance & HR)",
    experience: "6 Years Experience",
    img: commerce1,
  },
  {
    name: "Mrs. Latika Shankar Sharma",
    role: "HOD, BBA(CA), B.Sc(CS)",
    qualification: "MCA, M.Sc",
    experience: "5 Years Experience",
    img: commerce2,
  },
  {
    name: "Mrs. Shradha Sampy Mandhare",
    role: "Assistant Professor",
    qualification: "MBA Finance",
    experience: "1 Year 5 Months Experience",
    img:commerce3,
  },
  {
    name: "Mrs. Ashwini Wagh",
    role: "Assistant Professor",
    qualification: "LLM",
    experience: "3 Years Experience",
    img: commerce4,
  },
  {
    name: "Mrs. Aarti Harachandra Khade",
    role: "Assistant Professor",
    qualification: "M.Com, SET, NET",
    experience: "4 Years Experience",
    img: commerce5,
  },
],

   Science: [
  {
    name: "Vaishnavi Mahendra Joshi",
    role: "Assistant Professor",
    qualification: "M.Sc",
    experience: "2 Years Experience",
    img: sci1,
  },
  {
    name: "Mrs. Rupali Bhushan Dakhale",
    role: "HOD",
    qualification: "M.Sc (Biotechnology), SET, GATE",
    experience: "",
    img: sci2,
  },
  {
    name: "Mrs. Akanksha Umbare",
    role: "HOD B.Sc",
    qualification: "M.Sc Microbiology, B.Ed",
    experience: "",
    img: sci3,
  },
  {
    name: "Mrs. Nalini Parakhit Nark",
    role: "Assistant Professor",
    qualification: "M.Sc Biotechnology (Pune University)",
    experience: "",
    img:sci4,
  },
  {
    name: "J. Eshwar Kumar",
    role: "Assistant Professor",
    qualification: "M.Sc (Physical Chemistry), GATE, Ph.D (Pursuing)",
    experience: "",
    img: sci5,
  },
  {
    name: "Mrs. Uttamkare Mamata",
    role: "Assistant Professor",
    qualification: "M.Sc Chemistry",
    experience: "",
    img: sci6,
  },
  {
    name: "Nandini Siddharthkankar Kale",
    role: "Assistant Professor",
    qualification: "M.Sc Inorganic Chemistry",
    experience: "",
    img: sci7,
  },
],

   Other: [
  {
    name: "Mrs. Shailendra Karve",
    role: "TBC Placement Cell",
    qualification: "M.Com, 4 Years Experience",
    img:other1,
  },
  {
    name: "Ms. Nikita Kishor Dubey",
    role: "Office Clerk",
    qualification: "M.A, D.Ed",
    img: other2,
  },
  {
    name: "Mr. Umesh Bhalerao",
    role: "Office Superintendent",
    qualification: "B.Com",
    img:other3,
  },
  {
    name: "Sahil Bharat Maral",
    role: "Office Clerk",
    qualification: "B.Com",
    img: other4,
  },
  {
    name: "Urugade Swati Madhukar",
    role: "Office Clerk",
    qualification: "B.Sc Statistics",
    img: other5,
  },
],

  };

  return (
    <div className="staff-page">

      {/* Hero Section */}
      <div className="hero">
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
                    <button className="details-btn">
                      View Details
                    </button>
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
