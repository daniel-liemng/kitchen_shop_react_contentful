import React from "react";

import {
  SingleProductWrapper,
  SingleProductContainer,
  ProductImg,
  ProductContent,
  ProductTitle,
  ProductPrice,
  CheckIcon,
  TimesIcon,
} from "./SingleProductElements";
import { useProductsContext } from "../../context/ProductsContext";
import Loading from "../../components/Shared/Loading";
import Star from "../../components/SingleProduct/Star/Star";

const SingleProduct = () => {
  const { single_product } = useProductsContext();

  if (!single_product) return <Loading />;

  const {
    id,
    title,
    price,
    image: {
      fields: {
        file: { url: imgPath },
      },
    },
    description,
    freeShipping,
    stock,
    storeAvailable,
    rating,
  } = single_product;
  return (
    <SingleProductWrapper>
      <SingleProductContainer>
        <ProductImg src={imgPath} />
        <ProductContent>
          <ProductTitle>{title}</ProductTitle>
          <Star rating={rating} />
          <ProductPrice>$ {price}</ProductPrice>
          <p>{description}</p>
          <p>
            {stock > 0 ? <CheckIcon /> : <TimesIcon />}{" "}
            <strong>Available online</strong>
          </p>
          <p>
            {storeAvailable ? <CheckIcon /> : <TimesIcon />}{" "}
            <strong>Available in store</strong>
          </p>
          <p>
            {freeShipping ? <CheckIcon /> : <TimesIcon />}{" "}
            <strong>Free shipping</strong>
          </p>

          {stock > 0 && (
            <div>
              <hr />
              <h4>Hi</h4>
            </div>
          )}
        </ProductContent>
      </SingleProductContainer>
    </SingleProductWrapper>
  );
};

export default SingleProduct;
