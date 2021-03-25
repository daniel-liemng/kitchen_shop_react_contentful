import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_SORT,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  UPDATE_CATEGORY_FILTER,
} from "../actions/actionTypes";

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCTS:
      //// Inject the Filtter functionality when loading products
      let maxPrice = payload.map((prod) => prod.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        all_products: [...payload],
        filtered_products: [...payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, list_view: false };
    case SET_LISTVIEW:
      return { ...state, list_view: true };
    case UPDATE_SORT:
      return { ...state, sort: payload };
    case SORT_PRODUCTS:
      const { sort, filtered_products: products } = state;

      let tempProducts = [...products];

      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }

      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }

      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          // return a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
          return a.title.localeCompare(b.title, { sensitivity: "base" });
        });
      }

      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          // return a.title.toUpperCase() < b.title.toUpperCase() ? 1 : -1;
          return b.title.localeCompare(a.title, { sensitivity: "base" });
        });
      }
      return { ...state, filtered_products: tempProducts };
    case UPDATE_FILTERS:
      const { name, value } = payload;
      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, price, shipping, storeAvailable } = state.filters;

      // Start filtering with fresh set of data: AllProducts
      let temp_products = [...all_products];

      // Filtering
      if (text) {
        temp_products = temp_products.filter(
          (product) => product.title.toLowerCase().includes(text.toLowerCase()) // Or startsWith()
        );
      }

      if (category !== "all") {
        temp_products = temp_products.filter(
          (product) => product.category.toLowerCase() === category.toLowerCase()
        );
      }

      temp_products = temp_products.filter((product) => product.price <= price);

      if (shipping) {
        temp_products = temp_products.filter(
          (product) => product.freeShipping === true
        );
      }

      if (storeAvailable) {
        temp_products = temp_products.filter(
          (product) => product.storeAvailable === true
        );
      }

      return { ...state, filtered_products: temp_products };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          price: state.filters.max_price,
          shipping: false,
          storeAvailable: false,
        },
      };
    case UPDATE_CATEGORY_FILTER:
      return { ...state, filters: { ...state.filters, category: payload } };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default filterReducer;
