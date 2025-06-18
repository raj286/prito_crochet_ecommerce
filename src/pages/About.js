import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Users, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <Heart size={32} />,
      number: "100+",
      label: "Happy Customers"
    },
    {
      icon: <Star size={32} />,
      number: "100+",
      label: "Handcrafted Items"
    },
    {
      icon: <Users size={32} />,
      number: "2+",
      label: "Years of Experience"
    },
    {
      icon: <Award size={32} />,
      number: "20+",
      label: "Product Varieties"
    }
  ];

  const values = [
    {
      title: "Quality Craftsmanship",
      description: "Every piece is carefully handcrafted with attention to detail and premium materials."
    },
    {
      title: "Customer Satisfaction",
      description: "We prioritize our customers' happiness and ensure every purchase meets their expectations."
    },
    {
      title: "Sustainable Practices",
      description: "We use eco-friendly materials and sustainable practices in our crafting process."
    },
    {
      title: "Community Support",
      description: "We believe in supporting local communities and sharing the joy of handmade items."
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <motion.div 
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About Prito's Crochet</h1>
            <p>
              Discover the story behind our passion for creating beautiful, handcrafted crochet items 
              that bring warmth and joy to homes around the world.
            </p>
          </motion.div>
        </section>

        {/* Story Section */}
        <section className="story-section">
          <div className="story-content">
            <motion.div 
              className="story-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Story</h2>
              <p>
                Prito's Crochet began as a simple passion project in 2023, when I discovered the 
                therapeutic joy of creating beautiful items with my own hands. What started as a 
                hobby quickly grew into a beloved business as friends and family began requesting 
                custom pieces for their homes.
              </p>
              <p>
                Today, Prito's Crochet has grown into a thriving small business, serving customers 
                across the locality who appreciate the unique charm and quality of handcrafted items. 
                Each piece tells a story of love, dedication, and the timeless art of crochet.
              </p>
              <p>
                We believe that every home deserves the warmth and beauty that only handcrafted 
                items can provide. Our mission is to create pieces that not only look beautiful 
                but also bring comfort and joy to your daily life.
              </p>
            </motion.div>
            <motion.div 
              className="story-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&h=600&fit=crop" 
                alt="Crochet workspace"
              />
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-title">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="mission-content">
            <motion.div 
              className="mission-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>
                At Prito's Crochet, our mission is simple yet profound: to create beautiful, 
                high-quality handcrafted items that bring warmth, comfort, and joy to your home 
                and life.
              </p>
              <p>
                We believe that in today's fast-paced world, there's something truly special 
                about owning items that were made with care, attention to detail, and genuine 
                love for the craft. Each piece we create is a testament to the timeless art 
                of crochet and the beauty of handmade goods.
              </p>
              <p>
                Whether you're looking for a adorable baby items for your little ones, or beautiful home decor pieces, we're here to provide 
                you with items that are not just functional, but also meaningful and beautiful.
              </p>
            </motion.div>
            <motion.div 
              className="mission-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&h=600&fit=crop" 
                alt="Beautiful crochet items"
              />
            </motion.div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>Get in Touch</h2>
            <p>
              Have questions about our products or want to discuss a custom order? 
              We'd love to hear from you!
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Contact Us
              </a>
              <a href="/products" className="btn btn-outline">
                Browse Products
              </a>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About; 