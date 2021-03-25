import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ProductList, Filters, Sort } from "../../components";
import { ProductsWrapper, ProductsContainer } from "./ProductsElements";
import { useFilterContext } from "../../context/FilterContext";
import ListView from "../../components/FilterProducts/ListView/ListView";

const Products = () => {
  const {
    filtered_products: products,
    list_view,
    updateCategoryFilter,
    clearFilters,
  } = useFilterContext();

  const location = useLocation();

  // Get category query string from URL
  const categorySearchTerm = location.search.split("=")[1];

  useEffect(() => {
    // if query string exist in URL, update category filter -> filtering
    // if not query string, clear filters -> default filters
    if (categorySearchTerm) {
      updateCategoryFilter(categorySearchTerm);
    } else {
      clearFilters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySearchTerm]);

  return (
    <ProductsWrapper>
      <ProductsContainer>
        <Filters />
        <div>
          <Sort />
          {products.length < 1 ? (
            <h3 style={{ marginRight: "2rem" }}>
              No products found in your search...
            </h3>
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
