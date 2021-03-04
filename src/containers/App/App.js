import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from "react-router-dom";

import SearchProducts from "../SearchProducts/SearchProducts";
import ProductListPage from "../../pages/ProductListPage";
import ProductPage from "../../pages/ProductPage";

const App = () => {
  const [productsList, setProductsList] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  const changeSearchQueryHandler = (query) => {
    setSearchQuery(query);
  };

  return (
    <BrowserRouter>
      <main>
        <header>
          <SearchProducts
            changeSearchQuery={changeSearchQueryHandler.bind(this)}
          />
        </header>
        <section>
          <Router>
            <Switch>
              <Route exact path="/">
                <Redirect to="/items" />
              </Route>
              {/* <Route path="/items" component={ProductListPage} /> */}
              <Route path="/items">
                <ProductListPage searchQuery={searchQuery}/>
              </Route>
              <Route path="/items/:id" children={ProductPage} />
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
