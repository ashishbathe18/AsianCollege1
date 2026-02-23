import React from "react";
import "./sci.css";
import heroImg from "../../src/assets/students/courses.png";

function Bsc() {
  return (
    <>
    

      {/* ===== COURSE DETAILS ===== */}
      <section className="bsc-section">
        <div className="container">

          {/* About */}
          <div className="section-title">
            <h2 className="fw-bold">About the Course</h2>
            <p>
              Bachelor of Science (B.Sc) is a three-year undergraduate program
              focusing on scientific research, laboratory practice and
              real-world applications in Microbiology, Electronics and
              Chemistry fields.
            </p>
          </div>

          {/* Info Cards */}
          <div className="info-grid">
            <div className="info-card">
              <h3>📅 Duration</h3>
              <p>3 Years (6 Semesters)</p>
            </div>
            <div className="info-card">
              <h3>🎓 Eligibility</h3>
              <p>12th Pass (Science Stream)</p>
            </div>
            <div className="info-card">
              <h3>📚 Pattern</h3>
              <p>NEP 2020 | CBCS System</p>
            </div>
          </div>

          {/* Subjects */}
          <h2 className="mt">Core Subjects</h2>

          <div className="subjects-grid">

            <div className="subject-card">
              <h4>🧫 Microbiology</h4>
              <ul>
                <li>General Microbiology</li>
                <li>Medical Microbiology</li>
                <li>Industrial Microbiology</li>
                <li>Immunology</li>
                <li>Biotechnology</li>
              </ul>
            </div>

            <div className="subject-card">
              <h4>🔌 Electronics</h4>
              <ul>
                <li>Basic Electronics</li>
                <li>Digital Electronics</li>
                <li>Microprocessors</li>
                <li>Circuit Theory</li>
                <li>Embedded Systems</li>
              </ul>
            </div>

            <div className="subject-card">
              <h4>⚗ Chemistry</h4>
              <ul>
                <li>Organic Chemistry</li>
                <li>Inorganic Chemistry</li>
                <li>Physical Chemistry</li>
                <li>Analytical Chemistry</li>
                <li>Environmental Chemistry</li>
              </ul>
            </div>

          </div>

          {/* Skills */}
          <h2 className="mt">Skills Developed</h2>
          <div className="skills-grid">
            <span>Laboratory Skills</span>
            <span>Scientific Research</span>
            <span>Problem Solving</span>
            <span>Technical Knowledge</span>
            <span>Data Analysis</span>
            <span>Innovation Thinking</span>
          </div>

          {/* Career */}
          <h2 className="mt">Career Opportunities</h2>
          <div className="career-grid">
            <div className="career-card">Research Scientist</div>
            <div className="career-card">Lab Technician</div>
            <div className="career-card">Quality Control Officer</div>
            <div className="career-card">Electronics Engineer</div>
            <div className="career-card">Chemical Analyst</div>
            <div className="career-card">Pharmaceutical Industry</div>
          </div>

          {/* Salary */}
          <div className="salary-box">
            <h2>Salary Scope</h2>
            <p>
              Average starting salary ranges between <strong>₹3 LPA – ₹10 LPA</strong>.
              Research and technical fields offer strong growth opportunities
              in India and abroad.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Bsc;