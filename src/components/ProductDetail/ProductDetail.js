import React, { useState, useEffect } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { Button } from 'primereact/button'
import { Galleria } from 'primereact/galleria'

import classes from './ProductDetail.module.scss'
import WithCard from '../../hoc/WithCard'
import WithClass from '../../hoc/WithClass'

import { FREE_SHIPPING_SRC } from '../../assets/constants/app.constants'
import { ProductService } from '../../services/ProductService'

const ProductDetail = ({ product }) => {
  const productService = new ProductService()

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ]

  const galleryStyles = {
    maxWidth: '680px',
    maxHeight: '680px',
    minWidth: '680px',
    width: '680px',
  }

  const itemTemplate = function (item) {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: '100%', display: 'block' }}
      />
    )
  }

  const render = () => {
    const images = productService.fromProductDataToImagesArray(product)

    let condition = ''
    if (product.condition && product.sold_quantity) {
      if (product.condition === 'new') {
        condition = `Nuevo - ${product.sold_quantity} vendidos`
      }
      if (product.condition === 'used') {
        condition = `Usado - ${product.sold_quantity} vendidos`
      }
    }

    const shippingImg = product.free_shipping ? (
      <img
        src={FREE_SHIPPING_SRC}
        aria-label="free-shipping"
        alt={product.title}
      />
    ) : null

    const attributes = product.free_shipping
      ? product.attributes.map((attr, index) => <p key={index}>{attr}</p>)
      : null

    return (
      <ErrorBoundary>
        {Object.keys(product).length > 0 && (
          <WithCard
            className={['p-p-5', classes.ProductDetailContainer].join(' ')}
          >
            <section className="p-grid">
              <WithClass
                className={[
                  'p-md-fixed p-lg-fixed p-mb-5',
                  classes.ItemImage,
                ].join(' ')}
              >
                <Galleria
                  value={images}
                  responsiveOptions={responsiveOptions}
                  numVisible={4}
                  showThumbnails={false}
                  circular
                  showItemNavigators
                  style={galleryStyles}
                  item={itemTemplate}
                />
              </WithClass>
              <aside className="p-col p-pb-sm-5 p-px-sm-0 p-px-md-3 p-px-lg-3">
                <WithClass className={[classes.ItemProps].join(' ')}>
                  <p className="p-pb-3">{condition}</p>
                  <h1 className="p-pb-5">{product?.title}</h1>
                </WithClass>
                <WithClass className={['p-pb-5', classes.ItemPrice].join(' ')}>
                  <h3>{`${productService.currencyFormat(
                    product.price?.amount,
                    product.price?.currency,
                    ',',
                  )}`}</h3>
                  {shippingImg}
                </WithClass>
                <Button
                  label="Comprar"
                  className="p-button-raised"
                  style={{ width: '100%' }}
                />
              </aside>

              <section className="p-grid p-pb-5">
                <WithClass className={['p-col-12', classes.ItemDesc].join(' ')}>
                  <h2 className="p-pb-5">Descripcion del producto</h2>
                  <p>{product.description}</p>
                </WithClass>
                <WithClass
                  className={['p-col-12', classes.ItemAttributes].join(' ')}
                >
                  <h2 className="p-pb-5">Caracteristicas</h2>
                  <div className="d-flex flex-column p-mb-3">{attributes}</div>
                </WithClass>
              </section>
            </section>
          </WithCard>
        )}
      </ErrorBoundary>
    )
  }
  return render()
}

export default ProductDetail
