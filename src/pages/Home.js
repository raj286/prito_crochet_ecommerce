import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, Truck, Shield } from 'lucide-react';
import { getFeaturedProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Home.css';

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

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Handcrafted Crochet Items Made with Love</h1>
              <p>
                Discover beautiful, unique crochet pieces that bring warmth and style to your home. 
                Each item is carefully crafted by hand, ensuring quality and attention to detail.
              </p>
              <div className="hero-buttons">
                <Link to="/products" className="btn btn-primary">
                  Shop Now
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="btn btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <img 
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=600&h=600&fit=crop" 
                alt="Beautiful crochet blanket"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
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
          <div className="section-title">
            <h2>Featured Products</h2>
            <p>Discover our most popular handcrafted items</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/products" className="btn btn-primary">
              View All Products
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
                Read Our Story
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=500&h=600&fit=crop" 
                alt="Crochet workspace"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Add Some Handmade Magic to Your Home?</h2>
            <p>
              Browse our collection of beautiful crochet items and find the perfect piece to 
              bring warmth and style to your space.
            </p>
            <div className="cta-buttons">
              <Link to="/products" className="btn btn-primary">
                Start Shopping
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 