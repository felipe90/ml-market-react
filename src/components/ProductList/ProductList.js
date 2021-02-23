import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ProductListItem from "../ProductListItem/ProductListItem";
import "./ProductList.scss";

const ProductList = (props) => {
  const render = () => {
    let productList = [];

    if (props.products && props.products.length > 0) {
      productList = (
        <section className="ProductList">
          {props.products.map((product, index) => {
            return <ProductListItem data={product} key={index} />;
          })}
        </section>
      );
    }

    return <ErrorBoundary>{productList}</ErrorBoundary>;
  };
  return render();
};

export default ProductList;
