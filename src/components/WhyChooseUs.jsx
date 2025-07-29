import React from "react";
import "./WhyChooseUsStyles.css";

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24"/><path d="M34 18L21.5 30.5L14 23" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    title: "Quality Products",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24"/><text x="50%" y="60%" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="bold" dy=".3em">₹</text></svg>
    ),
    title: "Competitive Prices",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24"/><path d="M24 28a4 4 0 100-8 4 4 0 000 8z" fill="#fff"/><path d="M24 14a10 10 0 00-10 10h4a6 6 0 1112 0h4a10 10 0 00-10-10z" fill="#fff"/></svg>
    ),
    title: "Customer Satisfaction",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24"/><rect x="14" y="22" width="20" height="10" rx="2" fill="#fff"/><rect x="18" y="18" width="12" height="8" rx="2" fill="#fff"/><rect x="20" y="28" width="8" height="4" rx="2" fill="#fff"/></svg>
    ),
    title: "Proper Shipment",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24"/>
        <circle cx="24" cy="24" r="10" fill="#fff"/>
        <circle cx="24" cy="24" r="6" fill="none" stroke="#2a5298" strokeWidth="2"/>
        <line x1="24" y1="14" x2="24" y2="34" stroke="#2a5298" strokeWidth="2"/>
        <line x1="14" y1="24" x2="34" y2="24" stroke="#2a5298" strokeWidth="2"/>
      </svg>
    ),
    title: "Global Presence",
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24"/><rect x="16" y="20" width="16" height="12" rx="2" fill="#fff"/><rect x="20" y="16" width="8" height="8" rx="2" fill="#fff"/></svg>
    ),
    title: "Strong Vendor Base",
  },
];

const WhyChooseUs = () => (
  <section className="why-choose-us-section">
    <h2 className="why-choose-us-title">
      <span className="why-choose-us-title-highlight">Why</span> Choose Us
    </h2>
    <div className="why-choose-us-grid-fixed">
      {features.map((feature, idx) => (
        <div className="why-choose-us-card" key={idx}>
          <div className="why-choose-us-icon">{feature.icon}</div>
          <div className="why-choose-us-text">{feature.title}</div>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs; 