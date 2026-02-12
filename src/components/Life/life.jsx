import React from "react";
import "./Life.css";

// Banner Image
import campusImg from "../../assets/life/life-on-campus.jpg";

// Facilities Images
import wifiImg from "../../assets/life/wifi.jpg";
import hostelImg from "../../assets/life/hostel.jpg";
import foodImg from "../../assets/life/food.jpg"
import libraryImg from "../../assets/life/library.jpg"
const Life = () => {
  return (
    <>
      {/* ===== Banner Section (as it is) ===== */}
      <div className="life-container">
        <img src={campusImg} alt="Life on Campus" className="life-image" />
        <div className="life-overlay">
        
        </div>
      </div>

      {/* ===== Facilities Section ===== */}
      <div className="life-page">
        <h1 className="life-title">FACILITIES</h1>

        <div className="life-section">
          <img src={wifiImg} alt="Wi-Fi Campus" />
          <div className="life-content">
            <h2>WI-FI CAMPUS & INTERNET CENTER</h2>
            <p>
           We have an air conditioned computer lab, addressing the need of entire KJEI campus which is well equipped with internet facility with internet speed 500 Mbps, bandwidth 1:1, LAN connection, and latest software solution required for development of the students. Mounted LCD projector is available for all classes.The computer center provides one computer for one student and also has a power backup.We have 108 acres campus area withWi-fi connectivity and portal facility.
            </p>
          </div>
        </div>

        <div className="life-section">
          <img src={hostelImg} alt="College Hostel" />
          <div className="life-content">
            <h2>COLLEGE HOSTEL</h2>
            <p>
            Safe, secure and comfortable campus hostel with a capacity of 600 students is made available.The hostel provides all essential facilities like mess facility, cafeteria, TV room; Gymnasium, study room, internet facility, parking and generator backup.We are starting the in campus hostel facility from the current academic year.
            </p>
          </div>
        </div>

       
         <div className="life-section">
          <img src={foodImg} alt="Sports Ground" />
          <div className="life-content">
            <h2>FOOD COURT</h2>
            <p>
Provides hygienic and sumptuous food to the students. The food is available at subsidized rates. The canteen caters to 400 persons at a time. Monthly mess facility, ice cream parlor, juice parlor,coffee shop are also available for all students.
            </p>
          </div>
        </div>
         <div className="life-section">
          <img src={libraryImg} alt="Sports Ground" />
          <div className="life-content">
            <h2>LIBRARY</h2>
            <p>
          Library occupied place and pride at KJEI campus and is an essential component of institute’s research and education mission. It is lively place providing a safe, comfortable and friendly environment that enables learning and knowledge enhancement. All the libraries are fully computerized with SLIM 21 software. International and national journals, technical magazines are made available online. A budget of Rs. 50 Lac for books, Journals and magazines every year which fulfills the requirements of all the departments of the institutes
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Life;
