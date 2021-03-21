import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

import { SortWrapper, BtnContainer, Btn } from "./SortElements";
import { useFilterContext } from "../../../context/FilterContext";

const Sort = () => {
  const {
    filtered_product: products,
    list_view,
    setGridView,
    setListView,
  } = useFilterContext();

  return (
    <SortWrapper>
      <BtnContainer>
        <Btn listview={!list_view} onClick={setGridView}>
          <BsFillGridFill />
        </Btn>
        <Btn listview={list_view} onClick={setListView}>
          <BsList />
        </Btn>
      </BtnContainer>
    </SortWrapper>
  );
};

export default Sort;
