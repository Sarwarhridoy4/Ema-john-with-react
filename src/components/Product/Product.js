import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { category, name, img, price, ratings, seller,notFound } = props.product;
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
          <button className="button button1">Add To cart</button>
    </div>
  );
};

export default Product;
