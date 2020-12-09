import React, { useState, useEffect, useCallback } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

const url = "https://course-api.com/javascript-store-products";

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  function addToCart() {
    setCart(cart + 1);
  }

  const MAddToCart = useCallback(addToCart, [cart]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>cart: {cart}</h1>
      <MBigList products={products} addToCartK={MAddToCart} />
    </>
  );
};

function BigList({ products, addToCartK }) {
  useEffect(() => {
    return console.log("Big list is called");
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCartKK={addToCartK}
          />
        );
      })}
    </section>
  );
}

const MBigList = React.memo(BigList);

const SingleProduct = ({ fields, addToCartKK }) => {
  useEffect(() => {
    return console.log("single product is called");
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCartKK}>Add to cart</button>
    </article>
  );
};
export default Index;
