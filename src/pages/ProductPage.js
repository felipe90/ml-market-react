/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import ProductDetail from '../components/ProductDetail/ProductDetail'
import { ItemsRequestService } from '../services/ItemsRequestService'

const ProductPage = ({
  selectedProduct,
  setCategories,
  setSelectedProduct,
  setMetaTags
}) => {
  const itemsRequestService = new ItemsRequestService()
  let location = useLocation()
  let { id } = useParams()

  /**
   * Get product list based on id query param
   */
  useEffect(() => {
    getProduct(id)
  }, [location])

  
  /**
   * Get product item facade function
   * @param {string} productId
   */
  const getProduct = (productId) => {
    if (!productId) {
      return
    }
    itemsRequestService
      .getProduct(productId)
      .then((res) => {
        setSelectedProduct(res.data)
        setCategories(res.data.categories)
        setMetaTags({
          title: `Ml-market - ${res.data.title}`,
          description: `Ml-market - ${res.data.title}`,
          keywords: res.data.categories.join(',') 
        })
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return <ProductDetail product={selectedProduct}></ProductDetail>
}
export default React.memo(ProductPage)
