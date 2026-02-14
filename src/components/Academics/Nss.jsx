import React from "react";
import "./nss.css";
import blood from "../../assets/nss/blood.png";
import nss1 from "../../assets/nss/nss1.png";
import nss2 from "../../assets/nss/nss2.png";
import nss3 from "../../assets/nss/nss3.png";
import nss4 from "../../assets/nss/nss4.png";
const NSS = () => {

  const nssData = [
    {
      title: "About NSS",
      description:
        "National Service Scheme (NSS) was launched in 1969 with the primary objective of developing the personality and character of students through voluntary community service.",
      image: nss1,
    },
    {
      title: "Objectives of NSS",
      description:
        "To understand community needs, develop social responsibility, leadership qualities, and promote national integration among students.",
      image: nss2,
    },
    {
      title: "Tree Plantation Drive",
      description:
        "NSS volunteers actively participate in tree plantation programs to promote environmental awareness.",
      image: nss3,
    },
    {
      title: "Blood Donation Camp",
      description:
        "Regular blood donation camps are organized to save lives and create awareness.",
      image: blood,
    },
    {
      title: "Swachh Bharat Abhiyan",
      description:
        "Cleanliness drives are conducted in villages and urban areas.",
      image: nss4,
    },
    {
      title: "Special NSS Camps",
      description:
        "7-day special camps are organized in rural areas focusing on health awareness and education.",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d"
    }
  ];

  return (
    <div className="nss-container">

      {/* Hero Section */}
      <div className="hero">
        <h1>NSS - National Service Scheme</h1>
        <p>Not Me But You</p>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        {nssData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NSS;
