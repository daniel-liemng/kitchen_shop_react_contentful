import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductsProvider } from "./context/ProductsContext";
import { FilterProvider } from "./context/FilterContext";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
