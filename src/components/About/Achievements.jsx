// import React from "react";
// import "./Achievements.css";
// import { Link, useLocation } from "react-router-dom";

// const achievementsData = [
//   {
//     id: 1,
//     title: "Best Education of the Year Award 2023",
//     subtitle: "National Achievers Recognition Forum",
//     desc: "In Recognition of Sterling Merit Excellence Performance and Outstanding contribution for the Progress of the nation and Worldwide",
//     img: "/images/award1.jpg",
//   },
//   {
//     id: 2,
//     title: "Best Private College of the Year",
//     subtitle: "Asian Education Leadership",
//     desc: "Asian Education Leadership",
//     img: "/images/award2.jpg",
//   },
//   {
//     id: 3,
//     title: "Indian Glory Award",
//     subtitle: "IGA Conference",
//     desc: "Most Emerging Higher Education Institute of the Year",
//     img: "/images/award3.jpg",
//   },
//   {
//     id: 4,
//     title: "Bharat Vibhushan Award",
//     subtitle: "National Book of Record",
//     desc: "For their Passionate Commitment Towards Our Society in the Field of Education.",
//     img: "/images/award4.jpg",
//   },
//   {
//     id: 5,
//     title: "Outstanding College Providing Effective Online Classes During Covid-19 Era",
//     subtitle: "World Education Leaders",
//     desc: "Honours for Exemplary Leadership in Education",
//     img: "/images/award5.jpg",
//   },
// ];


// function Achievements() {
//   const location = useLocation();

//   return (
//     <div className="achievements-page">
      
//       {/* Banner */}
//       <div className="achievements-banner">
//         <div className="overlay">
//           <h1>Achievements</h1>
//           <p>Home &gt; About &gt; Achievements</p>
//         </div>
//       </div>

//       <div className="container">
//         <div className="achievements-wrapper">
          
//           {/* Left Sidebar */}
//          <div className="sidebar">
//   <h3>Achievements</h3>
//   <ul>
//     <li className={location.pathname === "/about/college" ? "active" : ""}>
//       <Link to="/about/college">The College</Link>
//     </li>

//     <li className={location.pathname === "/about/presidentDesk" ? "active" : ""}>
//       <Link to="/about/presidentDesk">President’s Desk</Link>
//     </li>

//     <li className={location.pathname === "/about/vision" ? "active" : ""}>
//       <Link to="/about/vision">Vision</Link>
//     </li>

//     <li className={location.pathname === "/about/mission" ? "active" : ""}>
//       <Link to="/about/mission">Mission</Link>
//     </li>

//     <li className={location.pathname === "/about/ourStaff" ? "active" : ""}>
//       <Link to="/about/ourStaff">Our Staff</Link>
//     </li>

//     <li className={location.pathname === "/about/achievements" ? "active" : ""}>
//       <Link to="/about/achievements">Achievements</Link>
//     </li>
//   </ul>
// </div>


//           {/* Right Content */}
//           <div className="content">
//             <h3>Achievements</h3>

//             {achievementsData.map((item) => (
//               <div className="achievement-card" key={item.id}>
//                 <img src={item.img} alt={item.title} />
//                 <div className="achievement-text">
//                   <h4>{item.title}</h4>
//                   <h5>{item.subtitle}</h5>
//                   <p>{item.desc}</p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Achievements;




import React from "react";
import "./Achievements.css";
import { Link } from "react-router-dom";
const achievementsData = [
  {
    id: 1,
    title: "Best Education of the Year Award 2023",
    org: "National Achievers Recognition Forum",
    desc: "In recognition of sterling merit excellence performance and outstanding contribution.",
    img: "https://via.placeholder.com/80x100",
  },
  {
    id: 2,
    title: "Best Private College of the Year",
    org: "Asian Education Leadership",
    desc: "Asian Education Leadership Award",
    img: "https://via.placeholder.com/80x100",
  },
  {
    id: 3,
    title: "Indian Glory Award",
    org: "IGC Conference",
    desc: "Most Emerging Higher Education Institute of the Year",
    img: "https://via.placeholder.com/80x100",
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

        {/* LEFT SIDEBAR */}
        {/* <div className="sidebar">
          <div className="sidebar-box">The College</div>
          <div className="sidebar-box">President’s Desk</div>
          <div className="sidebar-box">Vision</div>
          <div className="sidebar-box">Mission</div>
          <div className="sidebar-box">Our Staff</div>
          <div className="sidebar-box active">Achievements</div>
        </div> */}


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
