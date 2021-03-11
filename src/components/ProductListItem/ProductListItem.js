import React from 'react'
import { Link } from 'react-router-dom'
import WithClass from '../../hoc/WithClass'
import classes from './ProductListItem.module.scss'

import { FREE_SHIPPING_SRC } from '../../assets/constants/app.constants'

import { currencyFormat } from '../../misc'

const ProductListItem = ({data}) => {
  const render = () => {
    const shippingImg = data.free_shipping ? (
      <img
        src={FREE_SHIPPING_SRC}
        aria-label="free-shipping"
        alt={data.title}
      />
    ) : null

    const condition = data.condition ? (
      <p>
        {data.condition === 'new' ? 'Nuevo' : null}
        {data.condition === 'used' ? 'Usado' : null}
      </p>
    ) : null

    return (
      <WithClass className={['p-d-flex','p-jc-between','p-py-3', classes.ProductListItem].join(' ')}>
        <Link to={`/items/${data.id}`} className={classes.ItemImage}>
          <img
            className="p-px-3"
            src={data.pictures[0]}
            alt={data.title}
          />
        </Link>
        <WithClass
          className={['p-py-4', classes.ItemProperties].join(' ')}
        >
          <WithClass className={['p-pb-5', classes.ItemPrice].join(' ')}>
            <h3>{currencyFormat(data.price?.amount, ',')}</h3>
            {shippingImg}
          </WithClass>
          <Link to={`/items/${data.id}`}>
            <h2>{data.title}</h2>
          </Link>
          {condition}
        </WithClass>
        <section className={['p-px-3', 'p-pt-5', classes.ItemLocation].join(' ')}>
          <h3>
            {data.address.city_name}, {data.address.state_name}
          </h3>
        </section>
      </WithClass>
    )
  }

  return render()
}
export default ProductListItem
