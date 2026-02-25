

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

import dance from "../../assets/home/dance.png";
import swami from "../../assets/home/swami.png";
import bose from "../../assets/home/bose.png";
import hero1 from "../../assets/home/hero1.png";
import hero2 from "../../assets/home/hero2.png";
import hero3 from "../../assets/home/hero3.png";
import open from "../../assets/home/open.png";
import about from "../../assets/home/about.png";

/* ================= FINANCIAL YEAR FUNCTION ================= */
function getAcademicYear() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // Jan = 0

  const startYear = currentMonth >= 5 ? currentYear : currentYear - 1;
  const endYear = startYear + 1;

  return `${startYear}-${endYear}`;
}

const Home = () => {
  const [current, setCurrent] = useState(0);

  const academicYear = getAcademicYear();

  const images = [hero1, hero2, hero3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ================= SLIDER ================= */}
      <div className="slider">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="college"
            className={index === current ? "slide active" : "slide"}
          />
        ))}

        <div className="slider-text">
          <h2>Shaping Futures, Building Leaders</h2>
          <p>Proud Moment for Asian College</p>
        </div>
      </div>

      {/* ================= NOTIFICATIONS ================= */}
      <section className="notification-wrapper">
        <h2 className="notification-title fw-bold">Notifications</h2>

        <div className="notification-box">

          {/* ===== LEFT SECTION ===== */}
          <div className="course-buttons">

            {/* Admission Open Line */}
            <h3 className="admission-text  fw-bold pb-3 fs-8px">
              ADMISSION OPEN {academicYear}
            </h3>

            {/* Courses Title */}
            <h2 className="course-heading pb-2 fw-bold">Our Courses</h2>

            {/* Buttons - Each New Line */}
            <Link to="/courses/com" onClick={scrollToTop}>
              <button className="course-btn pb-4">B.Com</button>
            </Link>

            <Link to="/courses/art" onClick={scrollToTop}>
              <button className="course-btn pb-4">B.A</button>
            </Link>

            <Link to="/courses/sci" onClick={scrollToTop}>
              <button className="course-btn pb-4">B.Sc</button>
            </Link>

          </div>

          {/* ===== RIGHT SECTION ===== */}
          <div className="notification-right">
            <img
              className="mt-2"
              src={open}
              alt="student"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="about-wrapper">
        <div className="about-left">
          <img src={about} alt="College Building" />
        </div>

        <div className="about-right">
          <h2 className="about-title">About Us</h2>
          <div className="title-line"></div>

          <p className="about-text">
           Asian College is a premier institution committed to delivering quality higher education and nurturing future-ready professionals. Established with a vision to bridge academic learning with real-world industry demands, the college provides a dynamic and student-centered learning environment.

We offer diverse undergraduate programs including B.Com, B.A, and B.Sc, designed to equip students with strong theoretical knowledge and practical skills. Our experienced faculty members focus on academic excellence, innovation, and research-driven learning.

The college emphasizes holistic development through co-curricular activities, leadership programs, cultural events, and community engagement initiatives. With modern infrastructure, digital classrooms, and a supportive campus atmosphere, we ensure that students are well-prepared for competitive global careers.

At Asian College, we believe in shaping responsible citizens, confident leaders, and skilled professionals who contribute positively to society.
          </p>
        </div>
      </section>

    {/* ================= NEWS / ANNOUNCEMENTS / UPDATES ================= */}
<section className="triple-section">

 {/* NEWS */}
<div className="info-box">
  <div className="info-header">NEWS</div>

  <div className="info-body">

    <Link to="/academics/newspeper" className="news-link">
      <div className="info-item">
        <img src={dance} alt="Annual Gathering" />
        <div>
          <h4>Annual Gathering 2025-26</h4>
          <p>
            Annual Gathering 2025-26 is celebrated with great Enthusiasm and support.
          </p>
        </div>
      </div>
    </Link>

    <Link to="/academics/newspeper" className="news-link">
      <div className="info-item">
        <img src={swami} alt="Swami Vivekanand Jayanti" />
        <div>
          <h4>Swami Vivekanand Jayanti</h4>
          <p>
            Swami Vivekananda was a great spiritual leader who introduced Indian philosophy and Vedanta to the Western world.
          </p>
        </div>
      </div>
    </Link>

    <Link to="/academics/newspeper" className="news-link">
      <div className="info-item">
        <img src={bose} alt="Netaji Subhash Chandra Bose Jayanti" />
        <div>
          <h4>Netaji Subhash Chandra Bose Jayanti</h4>
          <p>
            Celebration of Netaji Subhash Chandra Bose Jayanti “Give me blood, and I will give you freedom,” and played a key role in leading the Indian National Army.
          </p>
        </div>
      </div>
    </Link>

  </div>
</div>


  {/* SPPU UPDATES */}
  <div className="info-box p-2">
    <div className="info-header">SPPU UPDATES</div>

    <div className="info-body">
      <div className="date-item">
        <div className="date-box">
          <span>APR</span>
          <strong>11</strong>
        </div>
        <div>
          <h4>SPPU Exam Dates for March/April 2026</h4>
          <p>Exam Dates are available here</p>
        </div>
      </div>

      <div className="date-item">
        <div className="date-box">
          <span>NOV</span>
          <strong>21</strong>
        </div>
        <div>
          <h4>Exam Dates for Various Courses jan/fab 2026</h4>
          <p>Dates for Oct/Nov 2024 are displayed on SPPU Website.</p>
        </div>
      </div>

      <div className="date-item">
        <div className="date-box">
          <span>SEP</span>
          <strong>11</strong>
        </div>
        <div>
          <h4>Exam Form jan/march 2026</h4>
          <p>Exam Form to All Courses is open online</p>
        </div>
      </div>
    </div>

   
  </div>

</section>
    </>
  );
};

export default Home;