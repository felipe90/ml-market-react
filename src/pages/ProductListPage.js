import React, { useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { ItemsRequestService } from '../services/ItemsRequestService'
import ProductList from '../components/ProductList/ProductList'

const ProductListPage = (props) => {
  const itemsRequestService = new ItemsRequestService()
  let location = useLocation()

  useEffect(() => {
    if (!location.search || location.state === location.search) {
      return
    }
    getProductList(new URLSearchParams(location.search).get('search'))
  }, [location.search])

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
export default React.memo(ProductListPage)
