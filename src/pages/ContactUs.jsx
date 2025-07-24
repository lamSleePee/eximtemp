import Header from "../components/header"
import './ContactUsStyles.css';
import Footer from "../components/footer";

function ContactUs(){
    return(
        <>
        <Header />

        
        <div className="contact-container">

      <h2>Contact Us</h2>
      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSdN_j-e-sdEvJry0o9vzYNT9Z-V6ohj1q6siplf5ZCjsG59KA/formResponse"
        method="POST"
        target="_blank"
      >
        {/* Name */}
        <div className="form-group">
          <label>Name:</label>
          <input name="entry.946694100" type="text" required />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email:</label>
          <input name="entry.908799836" type="email" required />
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label>Phone Number:</label>
          <input name="entry.86161402" type="tel" required />
        </div>

        {/* Product Dropdown */}
        <div className="form-group">
          <label>Product:</label>
          <select name="entry.1010087726" required>
            <option value="">-- Select a Product --</option>
            <option value="Apparel & Textile Solutions">Apparel & Textile Solutions</option>
            <option value="Eco-Engineered Jute Products">Eco-Engineered Jute Products</option>
            <option value="Nutraceutical-Grade Makhana">Nutraceutical-Grade Makhana</option>
            <option value="Premium Leather Goods">Premium Leather Goods</option>
            <option value="Artisan-Crafted Handicrafts">Artisan-Crafted Handicrafts</option>
            <option value="Gourmet-Grade Spices">Gourmet-Grade Spices</option>
            <option value="High-Purity Egg Powder">High-Purity Egg Powder</option>
            <option value="Dehydrated Agro Products">Dehydrated Agro Products</option>
            <option value="Heritage Carpets & Floor Textiles">Heritage Carpets & Floor Textiles</option>
            <option value="Next-Gen Biofuels & Commodities">Next-Gen Biofuels & Commodities</option>
          </select>
        </div>

        {/* Message */}
        <div className="form-group">
          <label>Message:</label>
          <textarea name="entry.2085710414" rows="4" required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit">Send Message</button>
      </form>
    </div>
  <Footer />
        </>
    )
}

export default ContactUs