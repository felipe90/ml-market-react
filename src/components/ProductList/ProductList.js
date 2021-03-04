import React from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import ProductListItem from '../ProductListItem/ProductListItem'
import classes from './ProductList.module.scss'
import WithClass from '../../hoc/WithClass'

import { Card } from 'primereact/card'
import { Divider } from 'primereact/divider'

const ProductList = (props) => {
  const render = () => {
    let productList = []

    if (props.products && props.products.length > 0) {
      productList = (
        <WithClass className={classes.ProductList}>
          <Card>
            {props.products.map((product, index) => {
              return (
                <div>
                  <ProductListItem data={product} key={index} />
                  {index !== props.products.length - 1 ? <Divider /> : null}
                </div>
              )
            })}
          </Card>
        </WithClass>
      )
    }

    return <ErrorBoundary>{productList}</ErrorBoundary>
  }
  return render()
}

export default React.memo(ProductList)
