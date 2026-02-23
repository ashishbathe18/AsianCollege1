import React from "react";
import { Link } from "react-router-dom";
import "./art.css";
import heroImg from "../../src/assets/students/courses.png";

function Art() {
  return (
    <>
     

      {/* ================= COURSE DETAILS ================= */}
      <section className="ba-section">
        <div className="container">

          {/* About */}
          <div className="section-title">
            <h2 className="fw-bold">About the Course</h2>
            <p>
              Bachelor of Arts (BA) in Economics and Political Science is a
              three-year undergraduate program designed to develop strong
              analytical, research, governance and policy-making skills.
              Ideal for students preparing for competitive exams and
              administrative careers.
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
              <p>12th Pass (Any Stream)</p>
            </div>

            <div className="info-card">
              <h3>📚 Pattern</h3>
              <p>NEP 2020 | CBCS System</p>
            </div>
          </div>

          {/* Subjects */}
          <div className="subjects-wrapper">
            <div className="subject-box">
              <h2>Economics Subjects</h2>
              <ul>
                <li>Micro Economics</li>
                <li>Macro Economics</li>
                <li>Indian Economy</li>
                <li>Public Finance</li>
                <li>International Trade</li>
                <li>Banking & Monetary Policy</li>
              </ul>
            </div>

            <div className="subject-box">
              <h2>Political Science Subjects</h2>
              <ul>
                <li>Political Theory</li>
                <li>Indian Constitution</li>
                <li>Public Administration</li>
                <li>International Relations</li>
                <li>Human Rights</li>
                <li>Democracy & Governance</li>
              </ul>
            </div>
          </div>

          {/* Skills */}
          <h2 className="mt">Skills Developed</h2>
          <div className="skills-grid">
            <span>Analytical Thinking</span>
            <span>Policy Analysis</span>
            <span>Research Skills</span>
            <span>Data Interpretation</span>
            <span>Political Awareness</span>
            <span>Decision Making</span>
          </div>

          {/* Career */}
          <h2 className="mt">Career Opportunities</h2>
          <div className="career-grid">
            <div className="career-card">UPSC / MPSC</div>
            <div className="career-card">Banking Officer</div>
            <div className="career-card">Policy Analyst</div>
            <div className="career-card">Political Analyst</div>
            <div className="career-card">NGO & Development Sector</div>
            <div className="career-card">Civil Services</div>
          </div>

          {/* Salary */}
          <div className="salary-box">
            <h2>Salary Scope</h2>
            <p>
              Average salary ranges between <strong>₹3 LPA – ₹9 LPA</strong>
              depending on role and experience. Government sector offers
              additional allowances and job security.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Art;