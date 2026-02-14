import React, { useEffect, useRef } from "react";
import "./Newspeper.css";

const newsData = [
  {
    id: 1,
    title: "College Students Won State Level Competition",
    description:
      "Our students secured first rank in the state level technical competition.",
    date: "12 Jan 2026",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 2,
    title: "Annual Cultural Event Featured in Newspaper",
    description:
      "The grand cultural event was highlighted in a leading daily newspaper.",
    date: "5 Feb 2026",
    image: "https://via.placeholder.com/400x250",
  },
  {
    id: 3,
    title: "NSS Camp Covered by Local Media",
    description:
      "Our NSS volunteers organized a successful rural development camp.",
    date: "20 Feb 2026",
    image: "https://via.placeholder.com/400x250",
  },
];

const NewsSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  return (
    <section className="news-section">
      <div className="container">
        <h2 className="section-title">📰 News Paper Publications</h2>

        <div className="news-wrapper">
          {newsData.map((news, index) => (
            <div
              className="news-card"
              key={news.id}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="image-wrapper">
                <img src={news.image} alt={news.title} />
                <div className="overlay">
                  <button className="view-btn">Read More</button>
                </div>
              </div>

              <div className="news-content">
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
