import { Link } from "react-router-dom";
import './footerStyles.css';

function Footer() {
  return (
    <div className="footer-outer">
      {/* Contact Info */}
      <div className="contactinfo">
        <h2>Contact</h2>
        <p className="address">
          <i className="fa-solid fa-house"></i>
          <a className="footercoms" href="https://www.google.com/maps/place/Exim+Pinnacle+Enterprises/...">Exim Pinnacle Enterprises, TBL Space, Balewadi Plaza, Balewadi, Pune, Maharashtra 411025</a>
        </p>
        <p className="email">
          <i className="fa-solid fa-envelope"></i>
          <a className="footercoms" href="mailto:Info@eximpinnacle.com">Info@eximpinnacle.com</a>
        </p>
        <p className="phoneNo">
          <i className="fa-solid fa-phone"></i>
          <a className="footercoms" href="tel:9607799399">9607799399</a> /           <a className="footercoms" href="tel:7350599399">7350599399</a>

        </p>
      </div>

      {/* Quick Links */}
      <div className="quicklinks">
        <h2>Quick Links</h2>
        <ul className="quicklinks-list">
          <li><Link className="footercoms" to="/">Home</Link></li>
          <li><Link className="footercoms" to="/aboutus">About Us</Link></li>
          <li><Link className="footercoms" to="/products">Products</Link></li>
          <li><Link className="footercoms" to="/blogs">Blogs</Link></li>
          <li><Link className="footercoms" to="/contactus">Contact Us</Link></li>
        </ul>
      </div>

      {/* Socials */}
      <div className="socials">
        <h2>Connect</h2>
        <div className="social-media-icons">
          <i className="LinkedIn fa-brands fa-linkedin"></i>
          <i className="Instagram fa-brands fa-instagram"></i>
          <i className="Whatsapp fa-brands fa-whatsapp"></i>
          <i className="Twitter fa-brands fa-x-twitter"></i>
        </div>
      </div>

      {/* License / Logo */}
      <div className="license">
        <img src="/Logo.png" alt="Logo" />
        <p className="copyrightfooter">© Exim Pinnacle, 2025, All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
