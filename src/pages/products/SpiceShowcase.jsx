import React from "react";
import { Link } from "react-router-dom";
 // Optional: for styling
import "./SpiceShowcase.css"; 

const spices = [
  { name: "Turmeric", image: "/turmeric.jpg", slug: "turmeric" },
  { name: "Cumin", image: "/cumin.jpg", slug: "cumin" },
  { name: "Coriander", image: "/coriander.jpg", slug: "coriander" },
  { name: "Cardamom", image: "/cardamom.jpg", slug: "cardamom" },
];

const SpiceShowcase = () => {


  return (

    <>
    <p className="spicetitle">Our Spices</p>
    <div className="spice-showcase">
        
      {spices.map((spice) => (
        <div className="spice-card" key={spice.slug}>
          <img src={spice.image} alt={spice.name} className="spice-img" />
          <h3>{spice.name}</h3>
          <Link className="spicelink" to={`/products/${spice.slug}`}><i class="fa-solid fa-arrow-right"></i></Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default SpiceShowcase;