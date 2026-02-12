import React from "react";
import "./gallery.css";
import tringa2 from "../../assets/gallery/tringa2.jpeg";
import cult from "../../assets/gallery/cult.jpeg";
import culture from "../../assets/gallery/culture.jpeg";
import culture3 from "../../assets/gallery/culture3.jpeg";
import jane from "../../assets/gallery/jane.jpeg";
import jane2 from "../../assets/gallery/jane2.jpeg";
import lab from "../../assets/gallery/lab.jpeg";
import nss from "../../assets/gallery/nss.jpeg";
import rago from "../../assets/gallery/rago.jpeg";
import ragoli from "../../assets/gallery/ragoli.jpeg";
import ragoli2 from "../../assets/gallery/ragoli2.jpeg";
import reaction from "../../assets/gallery/reaction.jpeg";
import student from "../../assets/gallery/student.jpeg";
import thiraga from "../../assets/gallery/thiraga.jpeg";
const galleryData = [
  {
    id: 1,
    image: tringa2,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 2,
    image: cult,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 3,
    image: culture,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
  {
    id: 4,
    image: culture3,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
 {
    id: 5,
    image: jane,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 6,
    image: jane,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 7,
    image: jane2,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 8,
    image: lab,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 9,
    image: nss,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 10,
    image: nss,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
  {
    id: 11,
    image: rago,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
  {
    id: 12,
    image: ragoli,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
  {
    id: 13,
    image: ragoli2,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 14,
    image: reaction,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 15,
    image: student,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
   {
    id: 16,
    image: thiraga,
    title: "College Campus",
    description: "Beautiful green and clean campus environment."
  },
];

function Gallery() {
  return (
    <div className="gallery-section">
      <h1 className="gallery-heading">Our College Gallery</h1>

      <div className="gallery-container">
        {galleryData.map((item) => (
          <div className="gallery-card" key={item.id}>
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
