import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "primto79@gmail.com",
      link: "mailto:primto79@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+91 7099102729",
      link: "tel:+917099102729"
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      content: "Kokrajhar, Assam, India",
      link: "#"
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      link: "#"
    }
  ];

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <section className="contact-hero">
          <motion.div 
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Get in Touch</h1>
            <p>
              Have questions about our products or want to discuss a custom order? 
              We'd love to hear from you!
            </p>
          </motion.div>
        </section>

        {/* Contact Content */}
        <section className="contact-content">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-section"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              className="contact-info-section"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2>Contact Information</h2>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <a href={info.link} className="info-link">
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="business-hours">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-item">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <div className="response-time">
                <h3>Response Time</h3>
                <p>
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="map-section">
          <motion.div 
            className="map-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Find Us</h2>
            <div className="map-placeholder">
              <div className="map-content">
                <MapPin size={48} />
                <h3>Our Location</h3>
                <p>Kokrajhar, Assam, India</p>
                <p>We're located in the heart of the Kokrajhar district, surrounded by other creative businesses.</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 