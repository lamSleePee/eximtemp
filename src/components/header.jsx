import { Link } from "react-router-dom";
import "./headerstyles.css";
import { useState } from "react"; // Added for mobile menu toggle
import Logo from "/Logo.png"; // Adjust path as needed

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  return (
    <header className="header">
      <Link to={"/"} className="header-logo-link">
      <img className="header-logo-link" src={Logo} alt="Logo"/> {/* Added alt for accessibility */}
      </Link>
      {/* Nav list - hidden on mobile unless open */}
      <nav className={`header-nav ${isMenuOpen ? 'header-nav-open' : ''}`}>
        <ul className="header-nav-list">
          <Link className="navbarlink" to={"/"}>
            <li>Home</li>
          </Link>
          <Link className="navbarlink" to={"/aboutus"}>
            <li>About Us</li>
          </Link>
          <Link className="navbarlink" to={"/products"}>
            <li>Products</li>
          </Link>
          <Link className="navbarlink" to={"/blogs"}>
            <li>Blogs</li>
          </Link>
          <Link className="navbarlink" to={"/contactus"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </nav>

      {/* Hamburger menu button - visible only on mobile */}
      <button
        className="header-mobile-menu"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} header-mobile-icon`}></i>
      </button>
    </header>
  );
}

export default Header;
