import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import ProductListItem from '../ProductListItem/ProductListItem'

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

    return (
      <ErrorBoundary>
        <div
          className={['p-grid', 'p-nogutter', classes.ProductList].join(' ')}
        >
          {props.products.length > 0 ? (
            <Card className="p-sm-12 p-md-8 p-lg-8 p-sm-offset-0 p-md-offset-2 p-lg-offset-2">
              {productList}
            </Card>
          ) : null}
        </div>
      </ErrorBoundary>
    )
  }
  return render()
}

// export default React.memo(ProductList)
export default ProductList
