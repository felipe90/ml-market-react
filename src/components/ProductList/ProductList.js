import { render } from "@testing-library/react";
import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const ProductList = (props) => {
  const render = () => {
    let productList = [];

    if (props.products && props.products.length > 0) {
      productList = (
        <section className="product-list">
          {props.products.map((product, index) => {
            return (
              <section className="product-list-item" key={index}>
                {product}
              </section>
            );
          })}
        </section>
      );
    }

    return (
      <ErrorBoundary>
        <section>
          {productList}
        </section>
      </ErrorBoundary>
    );
  };
  return render();
};

export default ProductList;
