import React from "react";

import { FiltersWrapper, PriceFilter } from "./FitlersElements";
import { useFilterContext } from "../../../context/FilterContext";

const Filters = () => {
  const {
    filters: { min_price, max_price, price, shipping, storeAvailable },
    updateFilters,
    clearFilters,
  } = useFilterContext();

  return (
    <FiltersWrapper>
      <h4>Advanced Search</h4>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-control'>
          <label htmlFor='price'>Price: ${price}</label>
          <PriceFilter
            type='range'
            id='price'
            name='price'
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
          />
        </div>
      </form>
    </FiltersWrapper>
  );
};

export default Filters;
