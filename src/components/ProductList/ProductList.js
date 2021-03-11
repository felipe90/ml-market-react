import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import ProductListItem from '../ProductListItem/ProductListItem'

import { Divider } from 'primereact/divider'

import classes from './ProductList.module.scss'
import WithCard from '../../hoc/WithCard'

const ProductList = ({ products }) => {
  const render = () => {
    const productList = products.map((product, index) => {
      return (
        <div key={product.id}>
          <ProductListItem data={product} />
          {index !== products.length - 1 ? (
            <Divider className="p-p-0 p-m-0" />
          ) : null}
        </div>
      )
    })

    return (
      <ErrorBoundary>
        <div
          className={['p-grid', 'p-nogutter', classes.ProductList].join(' ')}
        >
          {products.length > 0 ? (
            <WithCard className={classes.ProductListContainer}>
              {productList}
            </WithCard>
          ) : null}
        </div>
      </ErrorBoundary>
    )
  }
  return render()
}

export default React.memo(ProductList)
