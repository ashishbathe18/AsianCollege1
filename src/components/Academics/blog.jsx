import React from "react";
import "./Blog.css";

// 👉 Images तू इथे import कर
// import blog1 from "../../assets/blog1.jpg";
// import blog2 from "../../assets/blog2.jpg";
// import blog3 from "../../assets/blog3.jpg";

function Blog() {
  const blogs = [
    {
      id: 1,
      title: "Annual College Fest 2025",
      desc: "Our college celebrated its annual fest with cultural events, competitions, and exciting performances.",
      image: "blog1", // replace with blog1
      date: "10 Feb 2026",
    },
    {
      id: 2,
      title: "National Level Seminar",
      desc: "Experts from across the country shared knowledge on emerging technologies and innovation.",
      image: "blog2",
      date: "05 Feb 2026",
    },
    {
      id: 3,
      title: "Sports Week Highlights",
      desc: "Students actively participated in various sports competitions showing great team spirit.",
      image: "blog3",
      date: "28 Jan 2026",
    },
  ];

  return (
    <div className="blog-page">

      {/* ===== HERO SECTION ===== */}
      <div className="blog-hero">
        <h1>College Blog & News</h1>
        <p>Stay updated with latest events, seminars, achievements and activities.</p>
      </div>

      {/* ===== BLOG GRID ===== */}
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="blog-image">
              {/* 👉 Replace src with your imported image */}
              <img src={blog.image} alt="blog" />
            </div>

            <div className="blog-content">
              <span className="blog-date">{blog.date}</span>
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button className="read-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Blog;
