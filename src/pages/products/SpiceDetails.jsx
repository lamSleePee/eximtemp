// products/SpiceDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const spiceData = {
  turmeric: {
    name: 'Turmeric',
    description: 'Turmeric is a golden-yellow spice known for its medicinal properties.',
    image: '/images/turmeric.jpg'
  },
  cardamom: {
    name: 'Cardamom',
    description: 'Cardamom is a highly aromatic spice used in sweet and savory dishes.',
    image: '/images/cardamom.jpg'
  },
  cinnamon: {
    name: 'Cinnamon',
    description: 'Cinnamon is a warm, sweet spice obtained from the bark of trees.',
    image: '/images/cinnamon.jpg'
  },
  cloves: {
    name: 'Cloves',
    description: 'Cloves are the dried flower buds of the clove tree, used in various cuisines.',
    image: '/images/cloves.jpg'
  }
};

function SpiceDetails() {
  const { spiceId } = useParams();
  const spice = spiceData[spiceId];

  if (!spice) {
    return <h2>Spice not found</h2>;
  }

  return (
    <div className="product-details">
      <h1>{spice.name}</h1>
      <img src={spice.image} alt={spice.name} className="spice-image" />
      <p>{spice.description}</p>
    </div>
  );
}

export default SpiceDetails;
