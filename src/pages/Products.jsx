import Header from "../components/header"
import ProductShowcase from "../components/productShowcase"
import { useNavigate } from 'react-router-dom';
import './ProductsPage.css';
import Footer from "../components/footer";
import { Link } from 'react-router-dom';

const productData = [
  {
    name: "Apparel",
    slug: "apparel",
    img: "/product1.jpg",
  },
  {
    name: "Jute",
    slug: "jute",
    img: "/product2.jpg",
  },
  {
    name: "Makhana",
    slug: "makhana",
    img: "/product3.jpg",
  },
  {
    name: "Leather",
    slug: "leather",
    img: "/product4.jpg",
  },
  {
    name: "Handicrafts",
    slug: "handicrafts",
    img: "/product5.jpg",
  },
  {
    name: "Spices",
    slug: "spices",
    img: "/product6.jpg",
  },
  {
    name: "Egg Powder",
    slug: "egg-powder",
    img: "/product7.jpg",
  },
  {
    name: "Dehydrated Fruits",
    slug: "dehydrated-fruits",
    img: "/product8.jpg",
  },
  {
    name: "Carpets",
    slug: "carpets",
    img: "/product9.jpg",
  },
  {
    name: "Biofuels",
    slug: "biofuels",
    img: "/product10.jpg",
  },
];

function Products(){
    
        const navigate = useNavigate();

        return (
            <>
            <Header />
          <div className="products-grid-container">
            <h2>Our Products</h2>
            <div className="products-grid">
              {productData.map((product, index) => (
                <div
                  key={index}
                  className="product-card"
                  onClick={() => navigate(`/products/${product.slug}`)}
                >
                  <img src={product.img} alt={product.name} />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          </div>
          <Footer/>
          </>
        );
}

export default Products