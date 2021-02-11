import { React, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import SearchProducts from "../../components/SearchProducts/SearchProducts";
import ProductListPage from "../../pages/ProductListPage";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchProducts></SearchProducts>
      </header>
      <section className="">
        <Router>
          <Switch>
            <Route exact path="/">
              <ProductListPage></ProductListPage>
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
};

export default App;
