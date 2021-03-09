import React from 'react'
import { Link } from 'react-router-dom'
import WithClass from '../../hoc/WithClass'
import classes from './ProductListItem.module.scss'

import { FREE_SHIPPING_SRC } from '../../assets/constants/app.constants'

import { currencyFormat } from '../../misc'

const ProductListItem = (props) => {
  const render = () => {
    const shippingImg = props.data.free_shipping ? (
      <img
        src={FREE_SHIPPING_SRC}
        aria-label="free-shipping"
        alt={props.data.title}
      />
    ) : null

    const condition = props.data.condition ? (
      <p>
        {props.data.condition === 'new' ? 'Nuevo' : null}
        {props.data.condition === 'used' ? 'Usado' : null}
      </p>
    ) : null

    return (
      <WithClass className={['p-py-3', classes.ProductListItem].join(' ')}>
        <Link to={`/items/${props.data.id}`} className={classes.ItemImage}>
          <img
            className="p-px-3"
            src={props.data.pictures[0]}
            alt={props.data.title}
          />
        </Link>
        <WithClass
          className={['p-py-4', 'p-py-3', classes.ItemProperties].join(' ')}
        >
          <WithClass className={classes.ItemPrice}>
            <h3>{currencyFormat(props.data.price?.amount, ',')}</h3>
            {shippingImg}
          </WithClass>
          <h2>{props.data.title}</h2>
          {condition}
        </WithClass>
        <section className={classes.ItemLocation}>
          <h3>
            {props.data.address.city_name}, {props.data.address.state_name}
          </h3>
        </section>
      </WithClass>
    )
  }

  return render()
}
export default ProductListItem
