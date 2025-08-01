import { Link } from "react-router-dom";
import Header from "../components/header"; // Adjust path as needed
import Footer from "../components/footer"; // Adjust path as needed
import VisionMission from "../components/VisionMission";
import Founders from "../components/Founders";
import "./aboutStyles.css"; // Link to the CSS file below

function AboutUs() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="aboutHeader">
        <div className="container">
            <h1>About Us</h1>
            <p>Bridging global markets through ethical, reliable, and high-quality import-export services</p>
        </div>
    </div>
    
    <main className="container">
        <section className="sectionabout">
            <h2>Our Story</h2>
            <p>Exim Pinnacle is a forward-thinking international trade company committed to bridging global markets through ethical, reliable, and high-quality import-export services. With a growing global network and a deep focus on client satisfaction, we work closely with businesses and partners to source, deliver, and distribute products with efficiency and transparency.</p>
            
        </section>
        <VisionMission/>
        <Founders/>
        <section  className="sectionabout">
            <h2>What We Do</h2>
            <p>We specialize in sourcing and supplying high-demand products across a range of industries, tailored to meet regional standards and customer expectations.</p>
            
            <div className="products-grid">
                
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/apparel`}>
                    <i className="fas fa-tshirt"></i>
                    <p >Premium-grade Apparel</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/jute`}>
                    <i className="fas fa-leaf"></i>
                    <p >Eco-Friendly Jute Products</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/makhana`}>
                    <i className="fas fa-seedling"></i>
                    <p>Makhana (Fox Nuts)</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/leather`}>
                    <i className="fas fa-vest"></i>
                    <p >Fine Leather Goods</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/handicrafts`}>
                    <i className="fas fa-paint-brush"></i>
                    <p >Artisan Handicrafts</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/spices`}>
                    <i className="fas fa-pepper-hot"></i>
                    <p >Gourmet Spices</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/egg-powder`}>
                    <i className="fas fa-egg"></i>
                    <p >High-Purity Egg Powder</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/dehydrated-fruits`}>
                    <i className="fas fa-wheat-awn"></i>
                    <p >Dehydrated Agro Products</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/carpets`}>
                    <i className="fas fa-rug"></i>
                    <p >Heritage Carpets</p>
                    </Link>
                </div>
                <div className="product-item">
                    <Link className='product-item-name' to={`/products/biofuels`}>
                    <i className="fas fa-gas-pump"></i>
                    <p >Advanced Biofuels</p>
                    </Link>
                </div>
            </div>
            </section>
        
        <section  className="sectionabout">
            <h2>Our Values</h2>
            <div className="values-list">
                <div className="value-item">
                    <h4>Integrity First</h4>
                    <p>We operate with transparency and fairness in all our dealings, building trust with every transaction.</p>
                </div>
                <div className="value-item">
                    <h4>Customer Centricity</h4>
                    <p>Your growth is our priority. We tailor solutions to meet your specific business needs and goals.</p>
                </div>
                <div className="value-item">
                    <h4>Global Perspective</h4>
                    <p>We act local and think global, understanding diverse market needs and cultural nuances.</p>
                </div>
                <div className="value-item">
                    <h4>Sustainable Trade</h4>
                    <p>We value responsible sourcing and packaging, minimizing environmental impact while maximizing efficiency.</p>
                </div>
            </div>
        </section>
        
        <section  className="sectionabout">
            <h2>Our Strengths</h2>
            <div className="strengths">
                <div className="strength-item">
                    <i className="fas fa-truck-fast"></i>
                    <p>Efficient supply chain coordination</p>
                </div>
                <div className="strength-item">
                    <i className="fas fa-check-circle"></i>
                    <p>Verified supplier networks</p>
                </div>
                <div className="strength-item">
                    <i className="fas fa-language"></i>
                    <p>Multilingual client support</p>
                </div>
                <div className="strength-item">
                    <i className="fas fa-clock"></i>
                    <p>Commitment to timely deliveries</p>
                </div>
                <div className="strength-item">
                    <i className="fas fa-arrows-rotate"></i>
                    <p>Flexible sourcing based on demand</p>
                </div>
            </div>
        </section>
        
        
        <section className="ctaabout">
            <h2>Why Choose Exim Pinnacle?</h2>
            <p>Because we prioritize relationships, not just transactions. Because we believe in sustainable, ethical, and growth-driven trade. Because we're always one step ahead to keep your supply chain moving.</p>
            <p>Let us help you reach further. Trade smarter. Grow globally—with Exim Pinnacle.</p>
            <Link to={"/contactus"} className="ctaabout-button">Contact Us Today</Link>
        </section>
    </main>

      <Footer />
    </>
  );
}

export default AboutUs;
