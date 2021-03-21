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
          <form>
            <select name='search' id='search'>
              <option value='all'>All</option>
              <option value='blender'>Blender</option>
              <option value='mixer'>Mixer</option>
            </select>
            <input type='text' />
          </form>
        </SearchContainer>
        <SortContainer>
          <select name='sort' id='sort'>
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
