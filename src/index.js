import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductsProvider } from "./context/ProductsContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
