import Header from "../components/header";
import './ContactUsStyles.css';
import GooglemapsLocation from "../components/GoogleMapsLocation";
import Footer from "../components/footer";
import { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Use fetch with proper headers to avoid redirect
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('product', formData.product);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_subject', `Contact Form Submission from ${formData.name}`);

      const response = await fetch('https://formspree.io/f/movlkqgn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend,
        mode: 'no-cors', // This prevents redirects
      });

      // Since we're using no-cors, we can't check response status
      // But if we reach here, the request was sent
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        product: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input 
                name="name" 
                type="text" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input 
                name="email" 
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Phone Number:</label>
              <input 
                name="phone" 
                type="tel" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
            </div>

            <div className="form-group">
              <label>Product:</label>
              <select 
                name="product" 
                value={formData.product}
                onChange={handleInputChange}
                required
              >
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
              <textarea 
                name="message" 
                rows="4" 
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="success-message">
                Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="error-message">
                Sorry, there was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <GooglemapsLocation />
      <Footer />
    </>
  );
}

export default ContactUs;
