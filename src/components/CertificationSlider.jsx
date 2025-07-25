import React from "react";
import "./CertificationSliderStyles.css";

const certifications = [
  "/certlogo1.PNG",
  "/certlogo2.JPG",
  "/certlogo3.PNG",
  "/certlogo4.JPG",
  "/certlogo5.JPG",
  "/certlogo6.PNG",
];

const CertificationSlider = () => {
  return (
    <div className="certification-container">
      <p className="certification-title">Certifications & Trustmarks</p>
      <div className="certification-slider">
        <div className="certification-track">
          {certifications.map((logo, index) => (
            <img src={logo} alt={`cert-${index}`} className="certification-img" key={index} />
          ))}
          {certifications.map((logo, index) => (
            <img src={logo} alt={`cert-dup-${index}`} className="certification-img" key={`dup-${index}`} />
          ))}
          {certifications.map((logo, index) => (
            <img src={logo} alt={`cert-dup-${index}`} className="certification-img" key={`dup-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationSlider;
