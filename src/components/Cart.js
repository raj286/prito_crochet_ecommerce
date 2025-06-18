import React from 'react';
import { X, Trash2, Minus, Plus, ShoppingBag } from 'lucide-react';
import './Cart.css';

const Cart = ({ cart, cartTotal, onClose, onUpdateQuantity, onRemoveItem }) => {
  const handleQuantityChange = (productId, newQuantity) => {
    onUpdateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId) => {
    onRemoveItem(productId);
  };

  const handleCheckout = () => {
    // In a real app, this would redirect to checkout
    alert('Checkout functionality would be implemented here!');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content cart-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <ShoppingBag size={64} />
            <h3>Your cart is empty</h3>
            <p>Add some beautiful handcrafted items to get started!</p>
            <button className="btn btn-primary" onClick={onClose}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="item-details">
                    <h4>{item.name}</h4>
                    <p className="item-category">{item.category}</p>
                    {item.selectedColor && (
                      <p className="item-color">Color: {item.selectedColor}</p>
                    )}
                    <div className="item-price">${item.price.toFixed(2)}</div>
                  </div>
                  <div className="item-quantity">
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      disabled={item.quantity >= 10}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => handleRemoveItem(item.id)}
                    title="Remove item"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="cart-actions">
              <button className="btn btn-secondary" onClick={onClose}>
                Continue Shopping
              </button>
              <button className="btn btn-primary" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 