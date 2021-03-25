import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Helmet } from 'react-helmet'

import SearchProducts from '../SearchProducts/SearchProducts'
import CategoriesBreadcrumb from '../../components/CategoriesBreadcrumb/CategoriesBreadcrumb'

import ProductListPage from '../../pages/ProductListPage'
import ProductPage from '../../pages/ProductPage'

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null)
  const [categories, setCategoriesHandler] = useState([])
  const [productsList, setProductsListHandler] = useState([])
  const [selectedProduct, setSelectedProductHandler] = useState({})
  const [metaTags, setMetaTagsHandler] = useState({
    title: 'Ml-market - Nunca pares de buscar',
    description: 'La comunidad de compra y venta online más grande de América Latina.',
    keywords: 'Compra,Venta,Productos,ECommerce' 
  })

  const changeSearchQueryHandler = (params) => {
    if (!params) {
      return
    }
    setSearchQuery(params.get('search'))
  }

  return (
    <Router>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="keywords" content={metaTags.keywords} />
        <meta
          name="description"
          content={metaTags.description}
        />
        <meta
          property="og:description"
          content={metaTags.description}
        />
        <meta property="og:title" content="Ml-market" />
      </Helmet>
      <main className="main-content" role="main">
        <header>
          <SearchProducts
            changeSearchQuery={changeSearchQueryHandler.bind(this)}
          />
        </header>
        <CategoriesBreadcrumb
          categories={categories}
          maxNumCategories={3}
        ></CategoriesBreadcrumb>
        <Route exact path="/">
          <Redirect to="/items" />
        </Route>
        <Switch>
          <Route
            exact
            path="/items"
            render={() => (
              <ProductListPage
                searchQuery={searchQuery}
                productsList={productsList}
                setProductsList={setProductsListHandler}
                setCategories={setCategoriesHandler}
                setSelectedProduct={setSelectedProductHandler}
                setMetaTags={setMetaTagsHandler}
              />
            )}
          />
          <Route
            path="/items/:id"
            render={() => (
              <ProductPage
                categories={categories}
                selectedProduct={selectedProduct}
                setCategories={setCategoriesHandler}
                setSelectedProduct={setSelectedProductHandler}
                setMetaTags={setMetaTagsHandler}
              />
            )}
          />
          <Route>
            <h1 style={{ textAlign: 'center' }}>
              Error 404 - Page not founded
            </h1>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default React.memo(App)
