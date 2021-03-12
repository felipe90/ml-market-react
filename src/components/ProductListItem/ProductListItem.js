import React from 'react'
import { Link } from 'react-router-dom'
import WithClass from '../../hoc/WithClass'
import classes from './ProductListItem.module.scss'

import { FREE_SHIPPING_SRC } from '../../assets/constants/app.constants'

import { currencyFormat } from '../../misc'

const ProductListItem = ({ product }) => {
  const render = () => {
    const shippingImg = product.free_shipping ? (
      <img
        src={FREE_SHIPPING_SRC}
        aria-label="free-shipping"
        alt={product.title}
      />
    ) : null

    const condition = product.condition ? (
      <p>
        {product.condition === 'new' ? 'Nuevo' : null}
        {product.condition === 'used' ? 'Usado' : null}
      </p>
    ) : null

    return (
      <WithClass
        className={[
          'p-d-flex',
          'p-jc-between',
          'p-py-3',
          classes.ProductListItem,
        ].join(' ')}
      >
        <Link to={`/items/${product.id}`} className={classes.ItemImage}>
          <img className="p-px-3" src={product.pictures[0]} alt={product.title} />
        </Link>
        <WithClass className={['p-py-4', classes.ItemProperties].join(' ')}>
          <WithClass className={['p-pb-5', classes.ItemPrice].join(' ')}>
            <h3>{`${currencyFormat(
              product.price?.amount,
              product.price?.currency,
              ',',
            )}`}</h3>
            {shippingImg}
          </WithClass>
          <Link to={`/items/${product.id}`}>
            <h2>{product.title}</h2>
          </Link>
          {condition}
        </WithClass>
        <section
          className={['p-px-3', 'p-pt-5', classes.ItemLocation].join(' ')}
        >
          <h3>
            {product.address.city_name}, {product.address.state_name}
          </h3>
        </section>
      </WithClass>
    )
  }

  return render()
}
export default ProductListItem
