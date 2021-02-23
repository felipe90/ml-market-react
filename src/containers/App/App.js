import { Component, React } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

import SearchProducts from "../SearchProducts/SearchProducts";
import ProductListPage from "../../pages/ProductListPage";
import ProductPage from "../../pages/ProductPage";

class App extends Component {
  // TODO change this to this.state
  // const [productsList, setProductsList] = useState(null);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [searchQuery, setSearchQuery] = useState(null);

  // const changeSearchQueryHandler = (query) => {
  //   setSearchQuery(query);
  // };
  render() {
    return (
      <BrowserRouter>
        <main>
          <header>
            <SearchProducts
              // changeSearchQuery={changeSearchQueryHandler.bind(this)}
            />
          </header>
          <section>
            <Router>
              <Switch>
                <Route exact path="/">
                  home
                </Route>
                <Route path="/items">
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
  }
}

export default App;
