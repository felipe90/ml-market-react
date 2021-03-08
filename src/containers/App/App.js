import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom'

import SearchProducts from '../SearchProducts/SearchProducts'
import ProductListPage from '../../pages/ProductListPage'
import ProductPage from '../../pages/ProductPage'

const App = () => {
  const [productsList, setProductsListHandler] = useState([])
  const [selectedProduct, setSelectedProductHandler] = useState(null)
  const [searchQuery, setSearchQuery] = useState(null)

  const changeSearchQueryHandler = (params) => {
    if (!params) {
      return
    }
    setSearchQuery(params.get('search'))
  }

  return (
    <BrowserRouter>
      <main className="main-content" role="main">
        <Router>
          <header>
            <SearchProducts
              changeSearchQuery={changeSearchQueryHandler.bind(this)}
            />
          </header>
          {/* <Route exact path="/">
            <Redirect to="/items" />
          </Route> */}
          <Switch>
            <Route
              exact
              path="/items"
              render={() => (
                <ProductListPage
                  searchQuery={searchQuery}
                  productsList={productsList}
                  setProductsList={setProductsListHandler}
                  setSelectedProduct={setSelectedProductHandler}
                />
              )}
            />
            <Route
              path="/items/:id"
              render={() => (
                <ProductPage
                  selectedProduct={selectedProduct}
                  setSelectedProduct={setSelectedProductHandler}
                />
              )}
            />
            <Route>
              <h1 style={{ textAlign: 'center' }}>
                Error 404 - Page not founded
              </h1>
            </Route>
          </Switch>
        </Router>
      </main>
    </BrowserRouter>
  )
}

export default React.memo(App)
