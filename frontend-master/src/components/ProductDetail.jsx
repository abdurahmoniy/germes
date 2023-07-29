import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../pages/Cart/cartActions";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const products = useSelector((state) => state.products.prod); 

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <div>Product not found</div>
  }


  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt={product.title} />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
