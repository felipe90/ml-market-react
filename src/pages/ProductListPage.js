import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ItemsRequestService } from '../services/ItemsRequestService'
import ProductList from '../components/ProductList/ProductList'

const ProductListPage = ({
  productsList,
  searchQuery,
  setProductsList,
  setCategories,
}) => {
  const itemsRequestService = new ItemsRequestService()
  let location = useLocation()

  useEffect(() => {
    if (!location.search || location.state === location.search) {
      return
    }
    getProductList(new URLSearchParams(location.search).get('search'))
  }, [location.search])

  useEffect(() => {
    getProductList(searchQuery)
  }, [searchQuery])

  const getProductList = (query) => {
    if (!query) {
      return
    }

    itemsRequestService
      .getProductList({ q: query })
      .then((res) => {
        setProductsList(res.data.items)
        setCategories(res.data.relatedCategories)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return <ProductList products={productsList}></ProductList>
}
export default React.memo(ProductListPage)
