import React, { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";

import { ItemsRequestService } from "../services/ItemsRequestService";
import ProductList from "../components/ProductList/ProductList";

const ProductListPage = (props) => {
  const [products, setProducts] = useState([]);
  const itemsRequestService = new ItemsRequestService();
  const params = useParams();
  const history = useHistory();
  let location = useLocation();

  useEffect(() => {
    return history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
    });
  }, [history]);

  useEffect(() => {
      console.log(`You changed the page to: ${location.pathname}`);
  }, [location]);

  const getProductList = () => {
    itemsRequestService
      .getProductList({ q: "ipad" })
      .then((res) => {
        setProducts(res.items);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <section>
      <ProductList products={products}></ProductList>
    </section>
  );
};
export default ProductListPage;
