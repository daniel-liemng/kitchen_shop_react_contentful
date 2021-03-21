export const formatProduct = (product) => {
  const { id } = product.sys;

  return { id, ...product.fields };
};

export const getUniqueValues = (arr, str) => {
  return ["all", ...new Set(arr.map((item) => item[str]))];
};
