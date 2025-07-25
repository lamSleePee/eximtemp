import Header from "../components/header";
import Footer from "../components/footer";
import ProductShowcase from "../components/productShowcase";
import CommunityService from "../components/CommunityService";
import GooglemapsLocation from "../components/GoogleMapsLocation";
import VisionMission from "../components/VisionMission";
import CertificationSlider from "../components/CertificationSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomepageAbout from "../components/HomepageAbout";
import "./homestyles.css";

function Home() {
  var settings = {
    arrows: false, 
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [ 
      {
        breakpoint: 768,
        settings: {
          arrows: true, 
          dots: true
        }
      }
    ]
    
  };

  return (
    <>
      <div className="viewerheight">
        <Header />

        {/* Hero Section Slider Images */}
        <div className="heroSection">
          <Slider className="heroMain" {...settings}>
            {heroSectionData.map((d) => (
              <div className="heroMain" key={d.title}>
                <div className="heroImage">
                  <img src={d.img} alt="Hero Image" loading="lazy" /> {/* Added lazy loading */}
                </div>
                <div className="heroText">
                  <h2 className="heroTitle">{d.title}</h2>
                  <p className="heroSubtext">{d.subtext}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* End of hero section */}
              <HomepageAbout />
      {/* About section */}
        <CertificationSlider />
         < VisionMission />

      {/* Product showcase */}
      <section className="products">
        <h2>Our Products</h2>
        <ProductShowcase />
      </section>
      
        <CommunityService />
        
        <GooglemapsLocation />

      <Footer />
    </>
  );
}

const heroSectionData = [
  {
    title: `Welcome To Exim Pinnacle Enterprises`,
    img: `/hero2.jpg`,
    subtext: `Your Export Gateway`,
  },
  {
    title: `India's Best Exporters`,
    img: `/hero4.jpg`,
    subtext: `for Apparel & Textile Solutions and more`,
  },
];

export default Home;
