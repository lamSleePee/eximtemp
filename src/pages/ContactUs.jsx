import Header from "../components/header";
import './ContactUsStyles.css';
import GooglemapsLocation from "../components/GoogleMapsLocation";
import Footer from "../components/footer";

function ContactUs() {
  return (
    <>
      <Header />

      <div className="main-contact-us">
        {/* Left Text Section */}
        <div className="contact-text-section">
          <h2>Get in Touch</h2>
          <p>We’d love to hear from you! Whether you have a question about our products, pricing, or anything else — our team is ready to answer all your questions.</p>
          <p><strong>We'll get back to you within 24 hours.</strong></p>

          <img src="/agreementhandshake.jpg" alt="" />
        </div>

        {/* Right Form Section */}
        <div className="contact-container">
          <h2>Contact Us</h2>
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSdN_j-e-sdEvJry0o9vzYNT9Z-V6ohj1q6siplf5ZCjsG59KA/formResponse"
            method="POST"
            target="_blank"
          >
            <div className="form-group">
              <label>Name:</label>
              <input name="entry.946694100" type="text" required />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input name="entry.908799836" type="email" required />
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input name="entry.86161402" type="tel" required />
            </div>

            <div className="form-group">
              <label>Product:</label>
              <select name="entry.1010087726" required>
                <option value="">-- Select a Product --</option>
                <option value="Apparel & Textile Solutions">Apparel</option>
                <option value="Eco-Engineered Jute Products">Jute</option>
                <option value="Nutraceutical-Grade Makhana">Makhana</option>
                <option value="Premium Leather Goods">Leather Goods</option>
                <option value="Artisan-Crafted Handicrafts">Handicrafts</option>
                <option value="Gourmet-Grade Spices">Spices</option>
                <option value="High-Purity Egg Powder">Egg Powder</option>
                <option value="Dehydrated Agro Products">Agro Products</option>
                <option value="Heritage Carpets & Floor Textiles">Carpets</option>
                <option value="Next-Gen Biofuels & Commodities">Biofuels</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message:</label>
              <textarea name="entry.2085710414" rows="4" required></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <GooglemapsLocation />
      <Footer />
    </>
  );
}

export default ContactUs;
