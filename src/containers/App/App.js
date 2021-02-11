import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import SearchProducts from "../../components/SearchProducts/SearchProducts";
import ProductListPage from "../../pages/ProductListPage";
import ProductPage from "../../pages/ProductPage";

const App = () => {
  const [productsList, setProductsList] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  const changeSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const styles = {
    display: "block",
  };

  return (
    <BrowserRouter>
      <main style={styles}>
        <header>
          <SearchProducts
            changeSearchQuery={changeSearchQuery}
          ></SearchProducts>
        </header>
        <section>
          <Router>
            <Switch>
              <Route exact path="/">
                home
              </Route>
              <Route path="/items?search=:query">
                <ProductListPage></ProductListPage>
              </Route>
              <Route path="/items/:id">
                <ProductPage></ProductPage>
              </Route>
              <Route path="*">
                <h1 style={{ textAlign: "center" }}>
                  Error 404 - Page not founded
                </h1>
              </Route>
            </Switch>
          </Router>
        </section>
      </main>
    </BrowserRouter>
  );
};

export default App;
