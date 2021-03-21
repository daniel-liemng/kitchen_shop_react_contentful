import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

import {
  SortWrapper,
  BtnContainer,
  Btn,
  SearchContainer,
  SortContainer,
  ViewDisplay,
  SearchComponent,
} from "./SortElements";
import { useFilterContext } from "../../../context/FilterContext";

const Sort = () => {
  const {
    filtered_products: products,
    list_view,
    setGridView,
    setListView,
    sort,
    updateSort,
    filters: { text, category },
    updateFilters,
    all_products,
  } = useFilterContext();

  return (
    <SortWrapper>
      <ViewDisplay>
        <BtnContainer>
          <Btn active={!list_view} onClick={setGridView}>
            <BsFillGridFill />
          </Btn>
          <Btn active={list_view} onClick={setListView}>
            <BsList />
          </Btn>
        </BtnContainer>
        <p>{products && products.length} products</p>
      </ViewDisplay>
      <SearchComponent>
        <SearchContainer>
          <form onSubmit={(e) => e.preventDefault()}>
            <select name='search' id='search'>
              <option value='all'>All</option>
              <option value='blender'>Blender</option>
              <option value='mixer'>Mixer</option>
            </select>
            <input
              type='text'
              name='text'
              value={text}
              onChange={updateFilters}
            />
          </form>
        </SearchContainer>
        <SortContainer>
          <label htmlFor='sort' style={{ marginRight: "0.5rem" }}>
            Sort by
          </label>
          <select name='sort' id='sort' value={sort} onChange={updateSort}>
            <option value='price-lowest'>Price (Lowest)</option>
            <option value='price-highest'>Price (Highest)</option>
            <option value='name-a'>Name (A-Z)</option>
            <option value='name-z'>Name (Z-A)</option>
          </select>
        </SortContainer>
      </SearchComponent>
    </SortWrapper>
  );
};

export default Sort;
