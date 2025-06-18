import React, { useState } from 'react';
import { X, ShoppingCart, Heart, Star, Truck, Shield } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = ({ product, onClose, addToCart }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedColor,
      quantity
    });
    onClose();
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const features = [
    {
      icon: <Heart size={16} />,
      text: "Handcrafted with Love"
    },
    {
      icon: <Star size={16} />,
      text: "Premium Materials"
    },
    {
      icon: <Truck size={16} />,
      text: "Fast Shipping"
    },
    {
      icon: <Shield size={16} />,
      text: "Quality Guarantee"
    }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content product-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="product-detail-content">
          {/* Product Images */}
          <div className="product-images">
            <div className="main-image">
              <img 
                src={product.images[selectedImage] || product.image} 
                alt={product.name}
              />
            </div>
            {product.images.length > 1 && (
              <div className="image-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="product-detail-info">
            <div className="product-header">
              <h2>{product.name}</h2>
              {product.featured && (
                <span className="featured-badge">Featured</span>
              )}
            </div>

            <div className="product-price">
              <span className="price">Rs {product.price.toFixed(2)}</span>
              <span className={`stock-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {product.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <div className="product-description">
              <p>{product.longDescription}</p>
            </div>

            {/* Color Selection */}
            {product.colors.length > 1 && (
              <div className="color-selection">
                <h4>Color: {selectedColor}</h4>
                <div className="color-options">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                      onClick={() => setSelectedColor(color)}
                      title={color}
                    >
                      <span className="color-dot" style={{ backgroundColor: color.toLowerCase() }}></span>
                      <span className="color-name">{color}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selection */}
            <div className="quantity-selection">
              <h4>Quantity</h4>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="quantity-display">{quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(quantity + 1)}
                  disabled={quantity >= 10}
                >
                  +
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="product-details">
              <div className="detail-item">
                <strong>Category:</strong> {product.category}
              </div>
              <div className="detail-item">
                <strong>Materials:</strong> {product.materials.join(', ')}
              </div>
              <div className="detail-item">
                <strong>Dimensions:</strong> {product.dimensions}
              </div>
            </div>

            {/* Features */}
            <div className="product-features">
              {features.map((feature, index) => (
                <div key={index} className="feature-item">
                  {feature.icon}
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Add to Cart */}
            <div className="add-to-cart-section">
              <button 
                className="btn btn-primary add-to-cart-btn"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <ShoppingCart size={20} />
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail; 