import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import ProductListItem from '../ProductListItem/ProductListItem'

import { Divider } from 'primereact/divider'
import classes from './ProductList.module.scss'

const ProductList = (props) => {
  const render = () => {
    const productList = props.products.map((product, index) => {
      return (
        <div key={product.id}>
          <ProductListItem data={product} />
          {index !== props.products.length - 1 ? (
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
          {props.products.length > 0 ? (
            <div
              className={[
                'p-shadow-3',
                'p-sm-12',
                'p-md-8',
                'p-lg-8',
                'p-sm-offset-0',
                'p-md-offset-2',
                'p-lg-offset-2',
                'p-p-0',
                classes.ProductListContainer,
              ].join(' ')}
            >
              {productList}
            </div>
          ) : null}
        </div>
      </ErrorBoundary>
    )
  }
  return render()
}

export default React.memo(ProductList)
