import React from "react";

import { useProductsContext } from "../../../context/ProductsContext";
import Loading from "../../Shared/Loading";
import Error from "../../Shared/Error";
import Title from "../../Shared/Title";
import { FeaturedProductsWrapper } from "./FeaturedProductsElements";
import ProductList from "../../Products/ProductList/ProductList";

const FeaturedProducts = () => {
  const {
    featured_products,
    products_loading: loading,
    products_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FeaturedProductsWrapper>
      <Title title='Shop Our Featured Products' />
      <ProductList products={featured_products.slice(0, 4)} />
    </FeaturedProductsWrapper>
  );
};

export default FeaturedProducts;
