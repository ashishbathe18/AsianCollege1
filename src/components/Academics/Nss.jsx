import React, { useEffect, useState } from "react";
import "./nss.css";

const NSS = () => {
  const [nssData, setNssData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/nss")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setNssData(data);
        } else if (Array.isArray(data.data)) {
          setNssData(data.data);
        } else {
          setNssData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching NSS:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="nss-container">

      {/* Hero Section (Title Only) */}
      <section className="hero">
        <h1>National Service Scheme</h1>
      </section>

      {/* Cards Section */}
      <div className="cards-section">
        {loading ? (
          <p>Loading NSS Data...</p>
        ) : nssData.length === 0 ? (
          <p>No NSS data available</p>
        ) : (
          nssData.map((item) => (
            <div className="card" key={item._id}>
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default NSS;