import React from "react";
import "./Bcom.css";
import heroImg from "../../src/assets/students/courses.png";

function Bcom() {
  return (
    <>
    

      {/* ================= COURSE DETAILS ================= */}
      <section className="bcom-section">
        <div className="container">

          {/* About */}
          <div className="section-title">
            <h2 className="fw-bold">About the Course</h2>
            <p>
              Bachelor of Commerce (B.Com) is a three-year undergraduate
              program under NEP 2020 pattern. The course builds expertise in
              accounting, finance, banking and business management with
              specialization in Banking, Costing and Marketing.
            </p>
          </div>

          {/* Highlights */}
          <div className="info-grid">
            <div className="info-card">
              <h3>📅 Duration</h3>
              <p>3 Years (6 Semesters)</p>
            </div>
            <div className="info-card">
              <h3>🎓 Eligibility</h3>
              <p>12th Pass (Commerce / Any Stream)</p>
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
              <h4>📌 Banking</h4>
              <ul>
                <li>Principles of Banking</li>
                <li>Indian Banking System</li>
                <li>RBI & Monetary Policy</li>
                <li>Digital Banking</li>
                <li>Loan & Credit Management</li>
              </ul>
            </div>

            <div className="subject-card">
              <h4>📌 Costing</h4>
              <ul>
                <li>Cost Accounting</li>
                <li>Budgeting</li>
                <li>Marginal Costing</li>
                <li>Financial Analysis</li>
                <li>Material & Labour Cost</li>
              </ul>
            </div>

            <div className="subject-card">
              <h4>📌 Marketing</h4>
              <ul>
                <li>Marketing Management</li>
                <li>Consumer Behaviour</li>
                <li>Brand Management</li>
                <li>Digital Marketing</li>
                <li>Market Research</li>
              </ul>
            </div>
          </div>

          {/* Career */}
          <h2 className="mt">Career Opportunities</h2>
          <div className="career-grid">
            <div className="career-card">Banking Officer</div>
            <div className="career-card">Accountant</div>
            <div className="career-card">Financial Analyst</div>
            <div className="career-card">Marketing Executive</div>
            <div className="career-card">Business Consultant</div>
          </div>

          {/* Salary Highlight */}
          <div className="salary-box">
            <h2>Salary Scope</h2>
            <p>
              Average salary ranges between <strong>₹3 LPA – ₹8 LPA</strong>
              depending on skills and experience. Government banking jobs
              provide additional benefits & job security.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Bcom;