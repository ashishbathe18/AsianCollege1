import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./StaffDetails.css";

export default function StaffDetails({ staffData }) {
  const { category, id } = useParams();
  const navigate = useNavigate();

  const staff = staffData?.[category]?.[id];

  if (!staff) {
    return <h2 style={{ padding: "50px" }}>Staff Not Found</h2>;
  }

  return (
    <div className="details-page">
      <div className="details-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="details-header">
          <img src={staff.img} alt={staff.name} />
          <div>
            <h2>{staff.name}</h2>
            <p className="role">{staff.role}</p>
            <p className="qualification">{staff.qualification}</p>
            {staff.experience && (
              <p className="experience">{staff.experience}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
