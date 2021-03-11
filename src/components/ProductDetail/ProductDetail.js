import React, { useState, useEffect } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

import classes from './ProductDetail.module.scss'
import WithCard from '../../hoc/WithCard'

const ProductDetail = ({ product }) => {
  const render = () => {
    return (
      <ErrorBoundary>
        <div
          className={['p-grid', 'p-nogutter', classes.ProductDetail].join(' ')}
        >
          <WithCard className={classes.ProductDetailContainer}>
            <div className="p-p-3">
              <div>{product?.id}</div>
            </div>
          </WithCard>
        </div>
      </ErrorBoundary>
    )
  }
  return render()
}

export default ProductDetail
