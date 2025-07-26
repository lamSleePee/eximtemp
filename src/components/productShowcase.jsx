import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollToTop from "./ScrollToTop";
import React, { useEffect } from "react";

import './productShowcaseStyles.css';
import { Link } from "react-router-dom";

function ProductShowcase() {
  var settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for desktop
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [ // Responsive settings for mobile optimization
      {
        breakpoint: 768, // For phones (≤ 768px)
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
          arrows: true, // Keep arrows for easy swiping
          dots: false // Add dots for mobile navigation
        }
      },
      {
        breakpoint: 1024, // Optional: For tablets (≤ 1024px), show 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);


  return (
    <>
    <ScrollToTop />
      <div className="productShowcase">
        <div className="innerProductShowcase">
          <Slider className="productsSliderProperty" {...settings}>
            {productData.map((d) => (
              <div className="productBox" key={d.slug}>
                <div className="productImg">
                  <img src={d.img} alt={d.name} />
                </div>

                <div className="productInfo">
                  <p className="name">{d.name.slice(0, 25)}</p>
                  <p>
                    <Link to={`/products/${d.slug}`} className="more-btn">More →</Link>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProductShowcase;




const productData = [
  {
    name: "Apparel",
    slug: "apparel",
    img: "/product1.jpg",
    info: "Fashion-forward garments and textiles with breathable fabrics and sustainable sourcing. Ideal for summerwear, urban apparel, and eco-conscious fashion retailers in global markets."
  },
  {
    name: "Jute",
    slug: "jute",
    img: "/product2.jpg",
    info: "Biodegradable jute bags, raw jute, packaging, and lifestyle goods. Designed to support eco-friendly businesses seeking alternatives to plastic and promote sustainable packaging solutions."
  },
  {
    name: "Makhana (Fox Nuts)",
    slug: "makhana",
    img: "/product3.jpg",
    info: "Roasted and raw fox nuts meeting international quality standards. Ideal for health food brands, nutraceutical companies, and snack manufacturers targeting wellness-conscious consumers worldwide."
  },
  {
    name: "Leather",
    slug: "leather",
    img: "/product4.jpg",
    info: "Handcrafted wallets, belts, handbags, and accessories made from quality leather. Tailored for premium retailers, fashion brands, and private-label collections with a focus on durability and design."
  },
  {
    name: "Handicrafts",
    slug: "handicrafts",
    img: "/product5.jpg",
    info: "Unique handcrafted decor from tribal and rural artisans. Includes wooden art, textiles, and cultural gifts, ideal for home decor, corporate gifting, and upscale lifestyle markets."
  },
  {
    name: "Spices",
    slug: "spices",
    img: "/product6.jpg",
    info: "Whole and ground spices like turmeric, black pepper, and cardamom. Hygienically processed for flavor preservation and trusted by gourmet brands and food manufacturers globally."
  },
  {
    name: "Egg Powder",
    slug: "egg-powder",
    img: "/product7.jpg",
    info: "Spray-dried egg powder for baking and industrial use. High purity, long shelf life, and consistent quality make it ideal for confectionery and large-scale food production."
  },
  {
    name: "Dehydrated Fruits",
    slug: "dehydrated-fruits",
    img: "/product8.jpg",
    info: "Flakes and powders of onions, garlic, ginger, and vegetables. Retains nutrition and taste. Serves HORECA, retail, and industrial kitchens with bulk packaging options."
  },
  {
    name: "Carpets",
    slug: "carpets",
    img: "/product9.jpg",
    info: "Luxury handwoven and machine-made carpets in wool, cotton, and silk blends. Designed for homes, hotels, and commercial interiors with traditional artistry and modern flair."
  },
  {
    name: "Biofuels",
    slug: "biofuels",
    img: "/product10.jpg",
    info: "Biomass briquettes, pellets, and agri-waste fuels for clean energy. Supports sustainable energy solutions for industries and municipalities shifting toward greener fuel alternatives."
  }
];
