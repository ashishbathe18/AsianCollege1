import React, { useEffect, useState } from "react";
import "./newspeper.css";

const API = import.meta.env.VITE_API_BASE_URL;

export default function NewsSection() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/news`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch news");
        }
        return res.json();
      })
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setNewsData(data.data);
        } else {
          setNewsData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching news:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <section className="news-section">
      <div className="news-container">
        <h2 className="news-title">News Paper Publications</h2>

        <div className="news-grid">
          {newsData.length === 0 ? (
            <h3>No News Found</h3>
          ) : (
            newsData.map((item) => (
              <div className="news-card" key={item._id}>
                <div className="news-image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="news-info">
                  <span className="news-date">
                    {item.date?.slice(0, 10)}
                  </span>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}