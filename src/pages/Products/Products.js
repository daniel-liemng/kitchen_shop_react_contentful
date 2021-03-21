import React from "react";

import { Title } from "../../components";
import { ProductList, Filters, Sort } from "../../components";
import { ProductsWrapper, ProductsContainer } from "./ProductsElements";
import { useFilterContext } from "../../context/FilterContext";
import ListView from "../../components/FilterProducts/ListView/ListView";

const Products = () => {
  const { filtered_products: products, list_view } = useFilterContext();

  return (
    <ProductsWrapper>
      <Title title='All products' />
      <ProductsContainer>
        <Filters />
        <div>
          <Sort />
          {products.length < 1 ? (
            <h4>No products found in your search...</h4>
          ) : list_view ? (
            <ListView products={products} />
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </ProductsContainer>
    </ProductsWrapper>
  );
};

export default Products;
