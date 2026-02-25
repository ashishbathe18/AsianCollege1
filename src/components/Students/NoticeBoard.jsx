import React, { useEffect, useState } from "react";
import "./NoticeBoard.css";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(`${API}/api/notices`);

        // If server not reachable
        if (!res.ok) {
          throw new Error("Failed to fetch notices");
        }

        const contentType = res.headers.get("content-type");

        // If response is not JSON (prevents <!doctype error)
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("API did not return JSON. Check backend URL.");
        }

        const data = await res.json();

        const noticeData = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
          ? data.data
          : [];

        setNotices(noticeData);
      } catch (err) {
        console.error("Error fetching notices:", err);
        setError("Unable to load notices. Please check server connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) {
    return <p className="notice-state">Loading notices...</p>;
  }

  if (error) {
    return <p className="notice-state error">{error}</p>;
  }

  if (!notices.length) {
    return <p className="notice-state">No notices available</p>;
  }

  return (
    <div className="notice-page">
      <h2 className="main-title">College Notice Board</h2>

      <div className="notice-grid">
        {notices.map((notice) => (
          <div key={notice._id} className="notice-card">
            <div className="notice-content">

              {/* Title */}
              <h3 className="notice-title">{notice.title}</h3>

              {/* Date */}
              <p className="notice-date">
                {notice.date
                  ? new Date(notice.date).toLocaleDateString()
                  : ""}
              </p>

              {/* Academic Info */}
              <div className="notice-meta">
                {notice.year && <span>Course Name: {notice.coursename}</span>}
                {notice.class && <span>Class: {notice.class}</span>}
                {notice.semester && <span>Semester: {notice.semester}</span>}
              </div>

              {/* Description */}
              {notice.description && (
                <p className="notice-description">
                  {activeId === notice._id
                    ? notice.description
                    : notice.description.substring(0, 150) + "..."}
                </p>
              )}

              {/* Toggle Button */}
              {notice.description && notice.description.length > 150 && (
                <button
                  className="read-btn"
                  onClick={() =>
                    setActiveId(
                      activeId === notice._id ? null : notice._id
                    )
                  }
                >
                  {activeId === notice._id ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticeBoard;