import React from "react";
import "./careers.css";


function Career() {
  return (
    <div className="career-container">
      {/* HERO */}
      <section className="career-hero">
        <div className="career-hero-content">
          <h1>Career Opportunities</h1>
          <p>Dr. D. Y. Patil Arts & Commerce College</p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="career-breadcrumb">
        Home <span>›</span> Career
      </section>
      <br />
    
      <br />
      {/* INTRO */}
      <section className="career-intro">
        <h2>Build Your Career With Us</h2>
        <p>
          Our institution provides an excellent academic environment, growth
          opportunities and professional development. We invite dedicated and
          passionate candidates to join our academic and administrative team.
        </p>
      </section>

      {/* JOB LIST */}
      <section className="career-jobs">
        <div className="career-card">
          <h3>Assistant Professor – Arts</h3>
          <span className="tag teaching">Teaching</span>
          <ul>
            <li>Master’s Degree with minimum 55%</li>
            <li>NET / SET preferred</li>
            <li>Salary as per UGC norms</li>
          </ul>
        </div>

        <div className="career-card">
          <h3>Assistant Professor – Commerce</h3>
          <span className="tag teaching">Teaching</span>
          <ul>
            <li>M.Com with minimum 55%</li>
            <li>NET / SET preferred</li>
            <li>University approved pay scale</li>
          </ul>
        </div>

        <div className="career-card">
          <h3>Office Assistant</h3>
          <span className="tag nonteaching">Non-Teaching</span>
          <ul>
            <li>Any Graduate</li>
            <li>Computer proficiency required</li>
            <li>Experience preferred</li>
          </ul>
        </div>
      </section>

      {/* APPLY */}
      <section className=" container rounded mb-5 career-apply">
        <h2>How to Apply</h2>
        <p>
          Interested candidates should email their updated resume along with
          necessary documents.
        </p>
        <div className="apply-box">📧 careers@dypatilarstcommerce.edu.in</div>
        <p className="note">
          Shortlisted candidates will be contacted for interview. No TA / DA
          will be provided.
        </p>
      </section>
    </div>
  );
}

export default Career;