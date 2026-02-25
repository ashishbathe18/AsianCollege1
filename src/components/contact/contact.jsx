import React, { useState, useEffect } from "react";
import "./contact.css";
import contactBg from "../../assets/gallery/cu3.png";


function Contact() {
  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [error, setError] = useState("");

  // Generate random captcha
  const generateCaptcha = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userCaptcha !== captcha) {
      setError("Invalid Captcha. Please try again.");
      generateCaptcha();
      setUserCaptcha("");
      return;
    }

    setError("");
    alert("Form Submitted Successfully ✅");

    // Reset form fields
    e.target.reset();
    setUserCaptcha("");
    generateCaptcha();
  };

  return (
    <div>
      {/* HERO SECTION */}
     <div
  className="contact-hero"
  style={{
    backgroundImage: `url(${contactBg})`,
   
  }}
>
  
</div>

      {/* CONTACT SECTION */}
      <div className="contact-wrapper">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Asian College of Science and Commerce</h2>

          <p>
            📍 Sr.No.28/15/16, Narhe Dhayri Road (Pari Company Chowk),
            Dhayari, Tal-Haveli, Pune - 411041
          </p>

          <p>📞 +91-9975976605</p>
          <p>☎️ +91-020-24690610, +91-020-24690620</p>
          <p>✉️ asianacademypune@gmail.com</p>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label>
              Name <span>*</span>
            </label>
            <input type="text" placeholder="Name" required />

            <div className="row">
              <div>
                <label>
                  Mobile Number <span>*</span>
                </label>
                <input type="text" placeholder="Mobile Number" required />
              </div>

              <div>
                <label>E-Mail Address</label>
                <input type="email" placeholder="E-Mail Address" />
              </div>
            </div>

            <label>Subject</label>
            <input type="text" placeholder="Subject" />

            <label>Message</label>
            <textarea placeholder="Message"></textarea>

            <label>
              Captcha <span>*</span>
            </label>

            <div className="captcha-row">
              <input
                type="text"
                placeholder="Enter Captcha"
                value={userCaptcha}
                onChange={(e) => setUserCaptcha(e.target.value)}
                required
              />

              <div className="captcha-box">{captcha}</div>

              <button
                type="button"
                onClick={generateCaptcha}
                className="refresh-btn"
              >
                🔄
              </button>
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="send">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* MAP */}
      <div className="map-container">
        <iframe
          title="Asian College Location"
          src="https://www.google.com/maps?q=AAER's%20Asian%20College%20of%20Science%20and%20Commerce%20Pune&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
