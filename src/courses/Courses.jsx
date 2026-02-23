import { Link } from "react-router-dom";
import "./Courses.css";
import heroImg from "../../src/assets/students/courses.png";
import com from "../../src/assets/students/com.png";
import art from "../../src/assets/students/art.png";
import sci from "../../src/assets/students/sci.png";

function Courses() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    

      {/* ================= COURSES SECTION ================= */}
      <section className="courses-section">
        <div className="container">
          <div className="section-header">
            <h2 className="fw-bold">our courses</h2>
           
          </div>

          <div className="courses-grid">
            {/* Card 1 */}
            <div className="course-card">
              <div className="course-img">
                <img src={com} alt="BCom" />
              </div>
              <div className="course-content">
                <h4>B.Com – Banking, Costing, Marketing</h4>
                <p>
                  Three years degree program under NEP 2020 with strong
                  foundation in commerce and finance.
                </p>
                <Link to="/courses/com" onClick={scrollToTop}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="course-card">
              <div className="course-img">
                <img src={art} alt="BA" />
              </div>
              <div className="course-content">
                <h4>BA – Economics & Political Science</h4>
                <p>
                  Undergraduate program focusing on economics systems,
                  political theory and public administration.
                </p>
                <Link to="/courses/art" onClick={scrollToTop}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="course-card">
              <div className="course-img">
                <img src={sci} alt="BSc" />
              </div>
              <div className="course-content">
                <h4>B.Sc – Microbiology, Electronics, Chemistry</h4>
                <p>
                  Science based undergraduate program focusing on practical
                  and research-oriented subjects.
                </p>
                <Link to="/courses/sci" onClick={scrollToTop}>
                  <button>View Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;