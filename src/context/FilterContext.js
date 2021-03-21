import React, { createContext, useContext, useReducer } from "react";

import reducer from "../reducers/FilterReducer";

const FilterContext = createContext();

const initialState = {};

const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value='filter'>{children}</FilterContext.Provider>
  );
};

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProvider, useFilterContext };
