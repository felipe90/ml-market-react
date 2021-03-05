import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import ProductListItem from '../ProductListItem/ProductListItem'
import { ProgressSpinner } from 'primereact/progressspinner'

import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'
import classes from './ProductList.module.scss'

const ProductList = (props) => {
  const render = () => {
    const productList = props.products.map((product, index) => {
      return (
        <div key={product.id}>
          <ProductListItem data={product} />
          {index !== props.products.length - 1 ? <Divider /> : null}
        </div>
      )
    })

    const loadingSpinner = (
      <div className="p-grid p-justify-center">
        <ProgressSpinner />
      </div>
    )

    return (
      <ErrorBoundary>
        <div
          className={['p-grid', 'p-justify-around', classes.ProductList].join(
            ' ',
          )}
        >
          <Card className="p-sm-12 p-md-8 p-lg-8 p-sm-offset-0 p-md-offset-2 p-lg-offset-2">
            {props.products.length > 0 ? productList : loadingSpinner}
          </Card>
        </div>
      </ErrorBoundary>
    )
  }
  return render()
}

export default React.memo(ProductList)
