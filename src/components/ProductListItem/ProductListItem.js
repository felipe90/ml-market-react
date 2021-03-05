import React from 'react'
import { Link } from 'react-router-dom'
import WithClass from '../../hoc/WithClass'
import classes from './ProductListItem.module.scss'

import { FREE_SHIPPING_SRC } from '../../assets/constants/app.constants'

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
      <WithClass className={classes.ProductListItem}>
        <Link to={`/items/${props.data.id}`} className={classes.ItemImage}>
          <img src={props.data.pictures[0]} alt={props.data.title} />
        </Link>
        <WithClass className={classes.ItemProperties}>
          <WithClass className={classes.ItemPrice}>
            <h3>
              {props.data.price?.amount}
              {/*TODO | currency: product.price.currency:"symbol-narrow":"4.0" */}
            </h3>
            {shippingImg}
            <h2>{props.data.title}</h2>
            <p>{props.data.title}</p>
            {condition}
          </WithClass>
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
