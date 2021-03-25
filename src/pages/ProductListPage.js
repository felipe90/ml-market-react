/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ItemsRequestService } from '../services/ItemsRequestService'
import ProductList from '../components/ProductList/ProductList'

const ProductListPage = ({
  productsList,
  searchQuery,
  setProductsList,
  setCategories,
  setMetaTags
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
        setMetaTags({
          title: `Ml-market - ${query}`,
          description: `Ml-market - ${query}`,
          keywords: res.data.relatedCategories.join(',') 
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return <ProductList products={productsList}></ProductList>
}
export default React.memo(ProductListPage)
