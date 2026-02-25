import React, { useEffect, useState } from "react";
import "./gallery.css";

const API = import.meta.env.VITE_API_BASE_URL;

function Gallery() {
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   fetch(`${API}/api/gallery`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setGalleryData(data.data);
        } else {
          setGalleryData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching gallery:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="gallery-section">
      <h1 className="gallery-heading">Our College Gallery</h1>

      <div className="gallery-container">
        {galleryData.length === 0 ? (
          <h3 className="no-data">No Images Found</h3>
        ) : (
          galleryData.map((item) => (
            <div className="gallery-card" key={item._id}>
              
              <img
                src={item.image}
                alt={item.title}
                className="gallery-image"
              />

              <div className="gallery-content">
                <h3>Title : {item.title}</h3>
                <p className="fw-bold">Description :{item.description}</p>
                <span className="gallery-date">Date :
                  {item.date?.slice(0, 10)}
                </span>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Gallery;