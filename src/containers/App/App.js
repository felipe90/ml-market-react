import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom'

import SearchProducts from '../SearchProducts/SearchProducts'
import ProductListPage from '../../pages/ProductListPage'
import ProductPage from '../../pages/ProductPage'

const App = () => {
  const [productsList, setProductsListHandler] = useState([])
  const [selectedProduct, setSelectedProductHandler] = useState(null)
  const [searchQuery, setSearchQuery] = useState(null)

  const changeSearchQueryHandler = (query) => {
    setSearchQuery(query)
  }

  return (
    <BrowserRouter>
      <main>
        <header>
          <SearchProducts
            changeSearchQuery={changeSearchQueryHandler.bind(this)}
          />
        </header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/items" />
            </Route>
            <Route path="/items">
              <Switch>
                <Route exact path="/items">
                  <ProductListPage
                    searchQuery={searchQuery}
                    productsList={productsList}
                    setProductsList={setProductsListHandler}
                    setSelectedProduct={setSelectedProductHandler}
                  />
                </Route>
                <Route path="/items/:id">
                  <ProductPage
                    selectedProduct={selectedProduct}
                    setSelectedProduct={setSelectedProductHandler}
                  />
                </Route>
              </Switch>
            </Route>
            <Route path="*">
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

export default App
