import React from "react";

import { FiltersWrapper, PriceFilter, ClearBtn } from "./FitlersElements";
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
          <label htmlFor='price'>Price</label>
          <p>${price}</p>
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
        <div className='form-control-checkbox'>
          <input
            type='checkbox'
            name='shipping'
            id='shipping'
            checked={shipping}
            onChange={updateFilters}
          />{" "}
          <label htmlFor='shipping'>Free Shipping</label>
        </div>
        <div className='form-control-checkbox'>
          <input
            type='checkbox'
            name='storeAvailable'
            id='storeAvailable'
            checked={storeAvailable}
            onChange={updateFilters}
          />{" "}
          <label htmlFor='storeAvailable'>Available in Store</label>
        </div>
      </form>
      <ClearBtn type='button' onClick={clearFilters}>
        Clear Search
      </ClearBtn>
    </FiltersWrapper>
  );
};

export default Filters;
