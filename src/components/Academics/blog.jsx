import React, { useEffect, useState } from "react";
import "./Blog.css";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);

        // ✅ Fix: ensure blogs is always array
        if (Array.isArray(data)) {
          setBlogs(data);
        } else if (Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else if (Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          setBlogs([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>College Blog & News</h1>
        <p>
          Stay updated with latest events, seminars, achievements and activities.
        </p>
      </div>

      <div className="blog-container">
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p style={{ textAlign: "center" }}>No blogs available</p>
        ) : (
          blogs.map((blog) => (
            <div className="blog-card" key={blog._id || blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>

              <div className="blog-content">
                <span className="blog-date">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString()
                    : ""}
                </span>
                <h3>{blog.title}</h3>
                <p>{blog.desc || blog.description}</p>
                <button className="read-btn">Read More</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Blog;