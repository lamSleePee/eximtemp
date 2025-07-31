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
        <circle cx="24" cy="24" r="16" fill="#fff"/>
        <path d="M8 24c0-8.84 7.16-16 16-16s16 7.16 16 16-7.16 16-16 16-16-7.16-16-16z" fill="#fff"/>
        <path d="M24 8c8.84 0 16 7.16 16 16s-7.16 16-16 16-16-7.16-16-16 7.16-16 16-16z" fill="#fff"/>
        <path d="M24 8v32" stroke="#2a5298" strokeWidth="2"/>
        <path d="M8 24h32" stroke="#2a5298" strokeWidth="2"/>
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
  <div className="why-choose-us-container">
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
  </div>
);

export default WhyChooseUs; 