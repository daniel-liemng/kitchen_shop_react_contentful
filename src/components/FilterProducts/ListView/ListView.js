import React from "react";
import { Button } from "../../Shared/Button";
import { useProductsContext } from "../../../context/ProductsContext";

import {
  ListViewWrapper,
  ListViewProductItem,
  ProductImg,
  ProductContent,
} from "./ListViewElements";

const ListView = ({ products }) => {
  const { setSingleProduct } = useProductsContext();

  return (
    <ListViewWrapper>
      {products.map((product) => {
        const {
          id,
          title,
          image: {
            fields: {
              file: { url: imgPath },
            },
          },
          price,
          description,
        } = product;
        return (
          <ListViewProductItem key={id}>
            <ProductImg src={imgPath} />
            <ProductContent>
              <h2>{title}</h2>
              <p className='price'>$ {price}</p>
              <p className='description'>
                {description.substr(0, 200) + "..."}
              </p>
              <Button
                to={`/products/${id}`}
                onClick={() => setSingleProduct(id)}
              >
                Details
              </Button>
            </ProductContent>
          </ListViewProductItem>
        );
      })}
    </ListViewWrapper>
  );
};

export default ListView;
