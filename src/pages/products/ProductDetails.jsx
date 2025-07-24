import { useParams } from 'react-router-dom';
import productData from './productdata';
import ProductShowcase from '../../components/productShowcase';
import './ProductDetails.css';
import { Link } from "react-router-dom";
import Header from '../../components/header';
import Footer from '../../components/footer';
import SpiceShowcase from './SpiceShowcase';


function ProductDetails() {
  const { slug } = useParams();
  const product = productData.find((p) => p.slug === slug);

  if (!product) {
    return <div className="not-found">Product Not Found</div>;
  }

  return (
    <>
    <Header />
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <Link className="ProductContactBtn" to={"/contactus"}>Contact Us</Link>
      </div>
    </div>
    {["Turmeric", "Cumin", "Coriander", "Cardamom", "Spices"].includes(product.name) && <SpiceShowcase />}

    <section className="products">
        <h2>More Products</h2>
        <ProductShowcase />
      </section>
      
    <Footer />
    </>
  );
}

export default ProductDetails;
