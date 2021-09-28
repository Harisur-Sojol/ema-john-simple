import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./product.css";
import Rating from "react-rating";

const Product = (props) => {
//   console.log(props)
  const { name, img, seller, price, stock, star } = props.product;
  const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

  return (
    <div className="product">
      <div>
            <img src={img} alt="" />
      </div>
      <div>
            <h4 className="product-name">Name: {name}</h4>
            <p><small>By: {seller}</small></p>
            <p>Price: {price}</p>
            <p className="product-stock"><small>only {stock} left in stock - order soon</small></p>
            <Rating 
            readonly
            initialRating={star}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            ></Rating>
            <br/>
            <button onClick={ () => props.handleAddToCart(props.product)} className="btn-regular">{cartIcon} Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
