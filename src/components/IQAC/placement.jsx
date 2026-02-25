import React, { useEffect, useState } from "react";
import "./placement.css";


const API = import.meta.env.VITE_API_BASE_URL;

function Placement() {
  const [placements, setPlacements] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/placements`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Placement API Response:", data);

        // Ensure array
        if (Array.isArray(data)) {
          setPlacements(data);
        } else if (Array.isArray(data.data)) {
          setPlacements(data.data);
        } else {
          setPlacements([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching placements:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section className="placement-section">
      <div className="placement-container">
        <div className="placement-header">
          <h2 className="placement-title">Our Latest Placed Students</h2>
          <p className="placement-subtitle">
            Meet our talented students who secured their dream jobs.
          </p>
        </div>

        <div className="placement-grid">
          {loading ? (
            <p>Loading placements...</p>
          ) : placements.length === 0 ? (
            <p>No placement data available</p>
          ) : (
            placements.map((item) => (
              <div
                key={item._id}
                className="placement-card"
                onClick={() => setSelectedImg(item.image)}
              >
                <span className="placement-OrangeITech-head">
                  {item.college}
                </span>

                <div className="placement-img">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <h5>{item.name}</h5>
                <p><strong>Position :</strong> {item.position}</p>
                <h6><strong>Company :</strong> {item.company}</h6>

                <div className="student-package">
                  <strong>Package :</strong> {item.packageAmount}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Lightbox */}
        {selectedImg && (
          <div className="lightbox" onClick={() => setSelectedImg(null)}>
            <span className="close-btn">&times;</span>
            <img
              src={selectedImg}
              alt="Placement"
              className="lightbox-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default Placement;