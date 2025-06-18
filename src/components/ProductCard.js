import React from 'react';
import { ShoppingCart, Eye } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product, onProductClick, addToCart }) => {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleProductClick = () => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <div className="product-card card" onClick={handleProductClick}>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="overlay-btn view-btn" onClick={handleProductClick}>
            <Eye size={20} />
          </button>
          <button className="overlay-btn cart-btn" onClick={handleAddToCart}>
            <ShoppingCart size={20} />
          </button>
        </div>
        {product.featured && (
          <div className="featured-badge">Featured</div>
        )}
      </div>
      
      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-meta">
          <span className="product-price">Rs {product.price.toFixed(2)}</span>
          <span className={`product-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
            {product.inStock ? 'In Stock' : 'Out of Stock'}
          </span>
        </div>
        <div className="product-colors">
          {product.colors.slice(0, 3).map((color, index) => (
            <span key={index} className="color-dot" title={color}></span>
          ))}
          {product.colors.length > 3 && (
            <span className="color-more">+{product.colors.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 