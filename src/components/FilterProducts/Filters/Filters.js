import React from "react";

import { FiltersWrapper } from "./FitlersElements";
import { useFilterContext } from "../../../context/FilterContext";

const Filters = () => {
  const {
    filters: { min_price, max_price, price, shipping, storeAvailable },
    updateFilters,
    clearFilters,
  } = useFilterContext();

  return (
    <FiltersWrapper>
      <form onSubmit={(e) => e.preventDefault()}></form>
    </FiltersWrapper>
  );
};

export default Filters;
