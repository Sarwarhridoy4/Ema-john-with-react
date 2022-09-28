import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(products);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelAddToCart = (product) => {
    console.log(product);
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCart={handelAddToCart}
          ></Product>
        ))}
      </div>
      <div className='cart-container'>
        <h4>Order Summery</h4>
        <p>Selected Items:{cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
