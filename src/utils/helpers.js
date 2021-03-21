export const formatProduct = (product) => {
  const { id } = product.sys;

  return { id, ...product.fields };
};
