import React from "react";

import {
  ProductListWrapper,
  ProductListContainer,
} from "./ProductListElements";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = ({ products }) => {
  return (
    <ProductListWrapper>
      <ProductListContainer>
        {products.map((product) => (
          <ProductItem key={product.sys.id} product={product} />
        ))}
      </ProductListContainer>
    </ProductListWrapper>
  );
};

export default ProductList;
