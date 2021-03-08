import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import ProductDetail from '../components/ProductDetail/ProductDetail'
import { ItemsRequestService } from '../services/ItemsRequestService'

const ProductPage = (props) => {
  const itemsRequestService = new ItemsRequestService()
  let location = useLocation()
  let { id } = useParams()

  useEffect(() => {
    getProduct(id)
  }, [location])

  const getProduct = (productId) => {
    if (!productId) {
      return
    }
    itemsRequestService
      .getProduct(productId)
      .then((res) => {
        props.setSelectedProduct(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return <ProductDetail product={props.selectedProduct}></ProductDetail>
}
export default ProductPage
