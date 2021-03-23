import {} from "../actions/actionTypes";

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "aa":
      return { ...state };
    default:
      throw new Error(`No Matching ${type} action type`);
  }
};

export default cartReducer;
