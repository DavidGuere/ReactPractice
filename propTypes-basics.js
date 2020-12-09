import React from "react";
import PropTypes from "prop-types";
import DefPic from "../../../assets/default-image.jpeg";

const Product = (productO) => {
  const { image, name, price } = productO;
  const image_url = image && image.url;
  return (
    <article className="product">
      <img src={image_url || DefPic} alt={name} />
      <h4>{name}</h4>
      <p>{price || 999999.99}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   image: DefPic,
//   name: "default name",
//   price: 99999.99,
// };

export default Product;
