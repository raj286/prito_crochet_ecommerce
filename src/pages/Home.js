import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, Truck, Shield, Sparkles, Award, Users } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';
import crochet2 from '../assets/crochet2.jpg';

const Home = () => {
  const featuredProducts = getFeaturedProducts();

  const features = [
    {
      icon: <Heart size={24} />,
      title: "Handcrafted with Love",
      description: "Each piece is carefully crafted by hand with attention to detail and quality."
    },
    {
      icon: <Star size={24} />,
      title: "Premium Materials",
      description: "We use only the finest yarns and materials for lasting beauty and comfort."
    },
    {
      icon: <Truck size={24} />,
      title: "Fast Shipping",
      description: "Quick and reliable shipping to get your handmade items to you promptly."
    },
    {
      icon: <Shield size={24} />,
      title: "Quality Guarantee",
      description: "We stand behind our work with a satisfaction guarantee on all products."
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: <Users size={20} /> },
    { number: "1000+", label: "Items Created", icon: <Sparkles size={20} /> },
    { number: "5+", label: "Years Experience", icon: <Award size={20} /> },
    { number: "100%", label: "Handmade", icon: <Heart size={20} /> }
  ];

  return (
    <div className="home">
      {/* Floating Elements */}
      <div className="floating-hearts">
        <div className="heart heart-1">💖</div>
        <div className="heart heart-2">💕</div>
        <div className="heart heart-3">💗</div>
        <div className="heart heart-4">💓</div>
        <div className="heart heart-5">💝</div>
        <div className="heart heart-6">💖</div>
        <div className="heart heart-7">💕</div>
        <div className="heart heart-8">💗</div>
      </div>
      <div className="floating-ribbons">
        <div className="ribbon ribbon-1">🎀</div>
        <div className="ribbon ribbon-2">🎀</div>
        <div className="ribbon ribbon-3">🎀</div>
        <div className="ribbon ribbon-4">🎀</div>
        <div className="ribbon ribbon-5">🎀</div>
        <div className="ribbon ribbon-6">🎀</div>
      </div>
      <div className="floating-yarns">
        <div className="yarn yarn-1">🧶</div>
        <div className="yarn yarn-2">🧶</div>
        <div className="yarn yarn-3">🧶</div>
        <div className="yarn yarn-4">🧶</div>
        <div className="yarn yarn-5">🧶</div>
        <div className="yarn yarn-6">🧶</div>
        <div className="yarn yarn-7">🧶</div>
        <div className="yarn yarn-8">🧶</div>
      </div>

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          background: `url(${crochet2}) center center/cover no-repeat, linear-gradient(135deg, #FFB6C1 0%, #F8BBD9 50%, #E1BEE7 100%)`,
          backgroundBlendMode: 'lighten',
        }}
      >
        <div className="hero-bg-title">Prito's Crochet</div>
        {/* Cute floating elements */}
        {/* <div className="cute-float yarn-hero-1">🧶</div>
        <div className="cute-float yarn-hero-2">🧶</div> */}
        <div className="cute-float flower-hero-1">🌸</div>
        <div className="cute-float flower-hero-2">🌸</div>
        <div className="cute-float sparkle-hero-1">✨</div>
        <div className="cute-float sparkle-hero-2">✨</div>
        <div className="cute-float heart-hero-1">💖</div>
        <div className="cute-float ribbon-hero-1">🎀</div>
        <div className="hero-flower">
          <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="12" fill="var(--flower-yellow)"/>
            <path d="M30 10 Q33 20 40 15 Q37 25 50 20 Q40 30 55 30 Q40 33 50 40 Q37 35 40 50 Q33 40 30 55 Q27 40 20 50 Q23 35 10 40 Q20 33 5 30 Q20 30 10 20 Q23 25 20 15 Q27 20 30 10 Z" fill="var(--flower-pink)"/>
            <circle cx="30" cy="30" r="6" fill="var(--flower-blue)"/>
          </svg>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <Sparkles size={16} />
                <span>Handcrafted with Love</span>
              </div>
              <h1 className="hero-title">
                <span className="title-line">Beautiful Crochet</span>
                <span className="title-line">Items Made with</span>
                <span className="title-line highlight">Love & Care</span>
              </h1>
              <p className="hero-description">
                Discover unique, handcrafted crochet pieces that bring warmth, style, and comfort to your home. 
                Each item tells a story of passion and dedication.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary hero-btn">
                  <span>Explore Collection</span>
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="btn btn-outline hero-btn">
                  <span>Our Story</span>
                </Link>
              </div>
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="stat-content">
                      <div className="stat-number">{stat.number}</div>
                      <div className="stat-label">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hero-image">
              <div className="image-collage">
                <img 
                  src="/crochettt.jpg"
                  alt="Colorful crochet closeup"
                  className="collage-img main-img"
                />
                <img 
                  src="/crochet2.jpg"
                  alt="Crochet in progress"
                  className="collage-img side-img left-img"
                />
                <img 
                  src="/crochet3.jpeg"
                  alt="Basket of crochet squares"
                  className="collage-img side-img right-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Our Crochet Items?</h2>
            <p className="section-subtitle">Every piece is crafted with passion and attention to detail</p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Discover our most popular handcrafted treasures</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div key={product.id} data-aos="fade-up" data-aos-delay={index * 150}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/products" className="btn btn-primary">
              <span>View All Products</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <div className="about-badge">
                <Heart size={16} />
                <span>Our Story</span>
              </div>
              <h2>About Prito's Crochet</h2>
              <p>
                Welcome to Prito's Crochet, where passion meets craftsmanship. I started this journey 
                with a simple love for creating beautiful things with my hands and a desire to bring 
                warmth and comfort to homes around the world.
              </p>
              <p>
                Every piece in our collection is handcrafted with care, using only the finest materials 
                and traditional techniques passed down through generations. From cozy blankets to 
                adorable baby items, each creation tells a story of love and dedication.
              </p>
              <Link to="/about" className="btn btn-outline">
                <span>Read Our Story</span>
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="about-image">
              <div className="image-container">
                <img 
                  src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&h=600&fit=crop" 
                  alt="Crochet workspace"
                  className="about-img"
                />
                <div className="image-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-background">
          <div className="cta-shapes">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
            <div className="cta-shape cta-shape-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Add Some Handmade Magic to Your Home?</h2>
            <p>
              Browse our collection of beautiful crochet items and find the perfect piece to 
              bring warmth and style to your space.
            </p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-primary">
                <span>Start Shopping</span>
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 