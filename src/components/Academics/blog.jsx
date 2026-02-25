import React, { useEffect, useState } from "react";
import "./blog.css";

// const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
const API = import.meta.env.VITE_API_BASE_URL;

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedBlogs, setExpandedBlogs] = useState({}); // track which blogs are expanded

  useEffect(() => {
    fetch(`${API}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setBlogs(data);
        else if (Array.isArray(data.blogs)) setBlogs(data.blogs);
        else if (Array.isArray(data.data)) setBlogs(data.data);
        else setBlogs([]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const toggleReadMore = (id) => {
    setExpandedBlogs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <h1>College Blog & News</h1>
        <p>Stay updated with latest events, seminars, achievements and activities.</p>
      </div>

      <div className="blog-container">
        {loading ? (
          <p className="center-text">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="center-text">No blogs available</p>
        ) : (
          blogs.map((blog) => {
            const isExpanded = expandedBlogs[blog._id || blog.id];
            const previewText = blog.paragraphs
              ? blog.paragraphs[0].slice(0, 200) + "..."
              : blog.desc
              ? blog.desc.slice(0, 200) + "..."
              : "";

            return (
              <div className="blog-card" key={blog._id || blog.id}>
                {/* IMAGE ON TOP */}
                {blog.image && (
                  <div className="blog-image">
                    <img src={blog.image} alt={blog.title} />
                  </div>
                )}

                {/* CONTENT BELOW */}
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      {blog.createdAt
                        ? new Date(blog.createdAt).toLocaleDateString()
                        : ""}
                    </span>
                    {blog.author && <span className="blog-author">By {blog.author}</span>}
                  </div>

                  <h2>{blog.title}</h2>

                  {blog.paragraphs ? (
                    <>
                      {isExpanded
                        ? blog.paragraphs.map((p, i) => <p key={i}>{p}</p>)
                        : <p>{previewText}</p>}
                    </>
                  ) : (
                    <p>{isExpanded ? blog.desc || blog.description : previewText}</p>
                  )}

                  <button
                    className="read-btn"
                    onClick={() => toggleReadMore(blog._id || blog.id)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Blog;