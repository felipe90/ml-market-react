import React, { useState, useEffect } from "react";

const ProductList = () => {
  const products = [1,2,3,4,5];

  return (
    <section>
      {products.length > 0 && (
        <section className="product-list">
          {products.map((product, index) => {
            return (
              <section className="product-list-item" key={index}>
                {product}
              </section>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default ProductList;
