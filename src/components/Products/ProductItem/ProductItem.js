import React from "react";

import {
  ProductItemWrapper,
  ProductImg,
  ProductContent,
  ProductTitle,
  ProductPrice,
} from "./ProductItemElements";
import { useProductsContext } from "../../../context/ProductsContext";
import Loading from "../../Shared/Loading";

const ProductItem = ({ product }) => {
  const { setSingleProduct } = useProductsContext();

  if (!product) return <Loading />;

  const {
    id,
    title,
    price,
    image: {
      fields: {
        file: { url: imgPath },
      },
    },
  } = product;

  return (
    <ProductItemWrapper>
      <ProductImg src={imgPath} alt={title} />
      <ProductContent>
        <ProductTitle
          to={`/products/${id}`}
          onClick={() => setSingleProduct(id)}
        >
          {title}
        </ProductTitle>
        <ProductPrice>$ {price}</ProductPrice>
      </ProductContent>
    </ProductItemWrapper>
  );
};

export default ProductItem;
