import React, { useState, useEffect } from "react";

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
// import { useProductsContext } from "../../context/ProductsContext";
import Loading from "../../components/Shared/Loading";
import Star from "../../components/SingleProduct/Star/Star";
import AddToCart from "../../components/Cart/AddToCart/AddToCart";

const getSingleProductFromLocalStorage = () => {
  return localStorage.getItem("kitchen-singleProduct")
    ? JSON.parse(localStorage.getItem("kitchen-singleProduct"))
    : {};
};

const SingleProduct = () => {
  //// Get singleProduct from state
  // const { single_product } = useProductsContext();

  // if (!single_product) return <Loading />;

  // const {
  //   title,
  //   price,
  //   image,
  //   description,
  //   freeShipping,
  //   stock,
  //   storeAvailable,
  //   rating,
  // } = single_product;

  //// Get singleProduct from localStorage

  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    setSingleProduct(getSingleProductFromLocalStorage());
  }, []);

  if (!singleProduct) return <Loading />;

  const {
    title,
    price,
    image,
    description,
    freeShipping,
    stock,
    storeAvailable,
    rating,
  } = singleProduct;
  return (
    <SingleProductWrapper>
      <SingleProductContainer>
        <ProductImg src={image} />
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

          {stock > 0 && <AddToCart product={singleProduct} />}
        </ProductContent>
      </SingleProductContainer>
    </SingleProductWrapper>
  );
};

export default SingleProduct;
