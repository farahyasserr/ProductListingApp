import Product from '../../../types/Product';

export const isInputValid = (product: Product) => {
  if (
    !product.title ||
    !product.price ||
    !product.category ||
    !product.description ||
    !product.image
  ) {
    return false;
  }
  return true;
};
