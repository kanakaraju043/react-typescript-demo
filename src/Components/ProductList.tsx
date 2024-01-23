import React from "react";

import { Products } from "./Product.model.type";
import CustomProduct from "./CustomProduct";

type ProductLostProps = {
  products: Products;
};
const ProductList = ({ products }: ProductLostProps) => {
  return (
    <div>
      <h1 className="my-4 text-5xl text-orange-600 font-bold">Product List </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 py-4">
        {products.map((product) => (
          <CustomProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
