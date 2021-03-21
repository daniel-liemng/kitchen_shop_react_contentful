import React from "react";

import {
  ProductItemWrapper,
  ProductImg,
  ProductContent,
  ProductTitle,
  ProductPrice,
} from "./ProductItemElements";

const ProductItem = ({ product }) => {
  const { id } = product.sys;
  const {
    title,
    price,
    image: {
      fields: {
        file: { url: imgPath },
      },
    },
  } = product.fields;

  return (
    <ProductItemWrapper>
      <ProductImg src={imgPath} alt={title} />
      <ProductContent>
        <ProductTitle to={`/products/${id}`}>{title}</ProductTitle>
        <ProductPrice>$ {price}</ProductPrice>
      </ProductContent>
    </ProductItemWrapper>
  );
};

export default ProductItem;
