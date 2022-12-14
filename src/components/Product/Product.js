import React from "react";
import "./Product.css";
const Product = (props) => {
  // console.log(props);
  const { name, img, price, ratings, seller } = props.product;
  const { handelAddToCart } = props;

  return (
    <div className='card-container'>
      <div class='card'>
        <img src={img} alt={name} />
        <div class='container'>
          <h4>
            <b>{name}</b>
          </h4>
          <p>{seller}</p>
          <h4>${price}</h4>
          <p>{ratings} Stars</p>
        </div>
      </div>
      <button
        onClick={() => handelAddToCart(props.product)}
        className='button button1'>
        Add To cart
      </button>
    </div>
  );
};

export default Product;
