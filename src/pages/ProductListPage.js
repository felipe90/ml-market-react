import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { ItemsRequestService } from '../services/ItemsRequestService'
import ProductList from '../components/ProductList/ProductList'

const ProductListPage = (props) => {
  const itemsRequestService = new ItemsRequestService()
  let location = useLocation()

  useEffect(() => {
    getProductList(new URLSearchParams(location.search).get('search'))
  }, [location])

  useEffect(() => {
    getProductList(props.searchQuery)
  }, [props.searchQuery])

  const getProductList = (query) => {
    if (!query) {
      return
    }
    itemsRequestService
      .getProductList({ q: query })
      .then((res) => {
        props.setProductsList(res.data.items)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return <ProductList products={props.productsList}></ProductList>
}
export default ProductListPage
