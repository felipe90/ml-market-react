import { React, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import SearchProducts from "../../components/SearchProducts/SearchProducts";
import ProductListPage from "../../pages/ProductListPage";
import ProductPage from "../../pages/ProductPage";

const App = () => {
  const [productsList, setProductsList] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState(null)

  const styles = {
    display: "block",
  };

  return (
    <main style={styles}>
      <header>
        <SearchProducts></SearchProducts>
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
          </Switch>
        </Router>
      </section>
    </main>
  );
};

export default App;
