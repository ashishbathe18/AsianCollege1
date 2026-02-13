import { useEffect, useState } from "react";
import "./home.css";
import Footer from "../Footer/footer";
import precident from "../../assets/home/president.png"
import asian from "../../assets/home/asian.png";
import achive from "../../assets/home/achiv.png";
import croom from "../../assets/home/croom.png";
import dance from "../../assets/home/dance.png";
import swami from "../../assets/home/swami.png";
import bose from "../../assets/home/bose.png";
import hero1 from "../../assets/home/hero1.png";
import hero2 from "../../assets/home/hero2.png";
import hero3 from "../../assets/home/hero3.png";
import open from "../../assets/home/open.png";
import sppu from "../../assets/home/sppu.png";
import ai from "../../assets/home/ai.png";
import about from "../../assets/home/about.png"
import Ai1 from "../../assets/home/Ai1.png";
import react from "../../assets/home/react.png";
// 

// 

const Home = () => {
  /* ===== SLIDER STATE ===== */
  const [current, setCurrent] = useState(0);

  /* ===== EVENTS STATE ===== */
  const [eventIndex, setEventIndex] = useState(0);

  /* ===== AUTO IMAGE SLIDER ===== */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  /* ===== EVENT NAVIGATION ===== */
  const nextEvent = () => {
    setEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setEventIndex((prev) =>
      prev === 0 ? events.length - 1 : prev - 1
    );
  };
const images = [hero1,hero2,hero3
];
// 

// 
  return (
    <>
      {/* 🔵 Announcement Bar */}
      {/* <div className="announcement-bar">
        <marquee>
          A Brand New Hostel at Asian Residency
        </marquee>
      </div> */}

       {/* 🖼️ Image Slider */}
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="college"
            className={
              index === current ? "slide active" : "slide"
            }
          />
        ))}

        <div className="slider-text">
          <h2>Shaping Futures, Building Leaders</h2>
          <p>Proud Moment for Asian College</p>
        </div>
      </div>
  {/* 🔔 Notifications Section */}
      <section className="notification-wrapper">
        <h2 className="notification-title">Notifications</h2>

        <div className="notification-box">
          {/* Left Panel */}
          <div className="notification-left">
            <div className="notify active">
              Admissions 2026-27
            </div>
            <div className="notify">
              Ph.D Programme Entrance Test 2025-26
            </div>
            <div className="notify">
              17th Convocation Notification
            </div>
          </div>

          {/* Center Content */}
          <div className="notification-center">
            <h3>
              Applications are invited for All India Proctor Based online
              <br />
              Entrance Test - 2026
            </h3>

            <div className="tag-buttons">
              <button>Biotech</button>
              <button>GBSRC</button>
              <button>School of Design</button>
              <button>Allied Health Sciences</button>
              <button>Science and Technology</button>
            </div>
          </div>

          {/* Right Banner */}
          <div className="notification-right">
            <div className="admission-badge">2025-26</div>
            <h3>ADMISSIONS OPEN</h3>
            <img
              src={open}
              alt="student"
            />
           
          </div>
        </div>
      </section>
      {/* ================= ABOUT US SECTION ================= */}
<section className="about-wrapper">
  <div className="about-left">
    <img
      src={about}
      alt="College Building"
      className="about-building"
    />

  
    {/* <div className="est-year">EST 2003</div> */}
  </div>

  <div className="about-right">
    <h2 className="about-title">About Us</h2>
    <div className="title-line"></div>

    <p className="about-text">
    Here is a detailed and professional description you can use for your website or brochure:

Asian College has been accredited with a NAAC B+ Grade, recognizing the institution’s commitment to maintaining quality standards in higher education. This accreditation reflects strong performance in key areas such as teaching-learning processes, infrastructure, governance, student support services, research initiatives, and overall institutional development.

The B+ grade signifies that the college meets national benchmarks set by the National Assessment and Accreditation Council (NAAC) and continuously strives for academic excellence, innovation, and holistic student growth.
   Through quality enhancement practices, modern facilities, experienced faculty, and transparent administration, Asian College remains dedicated to delivering value-based and career-oriented education. </p>
  </div>

  {/* <div className="enquiry-vertical">Enquiry</div> */}
</section>
{/* ================= DPU EVENTS SECTION ================= */}
 {/* ================= INFO CARDS SECTION ================= */}
<section className="info-section">
  <div className="info-card">
    <img
      src={precident}
      alt="President"
    />
    <div className="info-content">
      <h3>President's Message</h3>
      <p>
        Today, the world is moving towards globalization. Increased
        competition among businesses has raised minimum competency levels
        of manpower. It has become almost important to generate quality
        and competent knowledge managers.
      </p>
      <button className="info-btn">Read More</button>
    </div>
  </div>

  <div className="info-card">
    <img
      src={asian}
      alt="Media"
    />
    <div className="info-content">
      <h3>Media Coverage</h3>
      <p>
        As a premier higher education institution, Asian College regularly
        features in the news. From various events organised to feats
        accomplished by students, Asian College is a common sight in
        newspapers.
      </p>
      <button className="info-btn">View Coverages</button>
    </div>
  </div>

  <div className="info-card">
    <img
      src={achive}
      alt="Achievements"
    />
    <div className="info-content">
      <h3>Achievements</h3>
      <p>
        Asian College is one of the top colleges in India. This is a direct
        result of the hard work and dedication of students and faculty.
        From awards to competitions, Asian has excelled in all fields.
      </p>
      <button className="info-btn">View Achievements</button>
    </div>
  </div>
</section>


{/* ================= QUICK LINKS SECTION ================= */}
{/* <section className="quicklinks-section">
  <div className="quicklinks-overlay"></div> */}
{/* 
  <div className="quicklinks-container">

    <div className="quick-card">
      <div className="icon-circle">📅</div>
      <h3>Examination Timetable</h3>
    </div>

    <div className="quick-card">
      <div className="icon-circle">📄</div>
      <h3>Examination Notification</h3>
    </div>

    <div className="quick-card">
      <div className="icon-circle">📘</div>
      <h3>Information Brochure</h3>
    </div>

    <div className="quick-card">
      <div className="icon-circle">📈</div>
      <h3>Extra-mural Funding<br />Opportunities</h3>
    </div>

    <div className="quick-card">
      <div className="icon-circle">📑</div>
      <h3>UGC Public<br />Self-Disclosure</h3>
    </div>

  </div> */}

  {/* Enquiry Button */}
  {/* <div className="quick-enquiry">Enquiry</div>
</section> */}


{/* ================= NEWS / ANNOUNCEMENTS / UPDATES ================= */}
<section className="triple-section">

  {/* NEWS */}
  <div className="info-box">
    <div className="info-header">NEWS</div>

    <div className="info-body">
      <div className="info-item">
        <img src={dance} alt="" />
        <div>
          <h4>Annual Gathering 2025-26</h4>
          <p>
          Annual Gathering 2025-26 is celebrated with great Enthusiasm and support.
          </p>
        </div>
      </div>

      <div className="info-item">
        <img src={swami} alt="" />
        <div>
          <h4> Swami Vivekanand Jayanti</h4>
          <p>
           Swami Vivekananda was a great spiritual leader who introduced Indian philosophy and Vedanta to the Western world.
          </p>
        </div>
      </div>

      <div className="info-item">
        <img src={bose} alt="" />
        <div>
          <h4>Netaji Subhash Chandra Bose Jayanti</h4>
          <p>Celebration of Netaji Subhash Chandra Bose Jayanti</p>
        </div>
      </div>
    </div>

    <button className="info-footer-btn mt-12">Read More</button>
  </div>

  {/* ANNOUNCEMENTS */}
  <div className="info-box">
    <div className="info-header">ANNOUNCEMENTS</div>

    <div className="info-body">
      <div className="info-item">
        <img src={sppu} alt="" />
        <div>
          <h4>SPPU Startup Talk Series</h4>
          <p>
SPPU Startup Talk Series
The Startup Talk Series aims to inspire young minds by sharing real-world entrepreneurial experiences, innovative</p>
        </div>
      </div>

      <div className="info-item">
        <img src={ai} alt="" />
        <div>
          <h4>
Guest Lecture on industrial Knowledge and Practical Exposure in Automative Manufacturing</h4>
          <p>Guest Speaker: Mr. Sohan Kabade & Mr. Sanket Shikhare Founders of Precision Interface</p>
        </div>
      </div>

      <div className="info-item">
        <img src={Ai1} alt="" />
        <div>
          <h4>Certificate Course of Agentic AI</h4>
          <p>Start Date: 15/12/2025</p>
        </div>
      </div>

   
    </div>

    <button className="info-footer-btn">Read More</button>
  </div>

  {/* PU UPDATES */}
  <div className="info-box">
    <div className="info-header">PU UPDATES</div>

    <div className="info-body">
      <div className="date-item">
        <div className="date-box">
          <span>APR</span>
          <strong>11</strong>
        </div>
        <div>
          <h4>SPPU Exam Dates for March/April 2025</h4>
          <p>Exam Dates are available here</p>
        </div>
      </div>

      <div className="date-item">
        <div className="date-box">
          <span>NOV</span>
          <strong>21</strong>
        </div>
        <div>
          <h4>Exam Dates for Various Courses Oct/Nov 2024</h4>
          <p>Dates for Oct/Nov 2024 are displayed on SPPU Website.</p>
        </div>
      </div>

      <div className="date-item">
        <div className="date-box">
          <span>SEP</span>
          <strong>11</strong>
        </div>
        <div>
          <h4>Exam Form Oct/Nov 2024</h4>
          <p>Exam Form to All Courses is open online</p>
        </div>
      </div>
    </div>

    <button className="info-footer-btn mb-8">Read More</button>
  </div>

</section>
    </>
    
  );
};

export default Home;
