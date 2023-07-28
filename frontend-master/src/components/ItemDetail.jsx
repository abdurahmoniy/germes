// Modal.js
import React from "react";

const Modal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          {/* Display the product details in the modal */}
          <img src={product.img} alt={product.title} />
          <h2>{product.title}</h2>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          {/* ... */}
          <button className="addToCart" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
