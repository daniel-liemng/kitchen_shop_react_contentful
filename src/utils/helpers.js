export const formatProduct = (product) => {
  const { id } = product.sys;
  const image = product.fields.image.fields.file.url;

  return { id, ...product.fields, image };
};

export const getUniqueValues = (arr, str) => {
  return ["all", ...new Set(arr.map((item) => item[str]))];
};
