import React from "react";

const ProductList = (props) => {
  return (
    <section>
      adasda
      {props.products}
      {(props.products && props.products.length > 0 ) && (
        <section className="product-list">
          {props.products.map((product, index) => {
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
