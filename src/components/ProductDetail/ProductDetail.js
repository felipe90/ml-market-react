import React, { useState, useEffect } from 'react'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import { Button } from 'primereact/button'
import { Galleria } from 'primereact/galleria';

import classes from './ProductDetail.module.scss'
import WithCard from '../../hoc/WithCard'
import WithClass from '../../hoc/WithClass'

import { FREE_SHIPPING_SRC } from '../../assets/constants/app.constants'
import { currencyFormat } from '../../misc'

const ProductDetail = ({ product }) => {

  
  const itemTemplate = (item) => {
    // custom item content
  }

  const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
  ];

  const render = () => {
    let condition = ''
    const images = this.productService.fromPicturesRawArrayToImages(res.pictures, res);
    
    console.log(product)
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

    return (
      <ErrorBoundary>
        {Object.keys(product).length > 0 && (
          <div
            className={['p-grid', 'p-nogutter', classes.ProductDetail].join(
              ' ',
            )}
          >
            <WithCard
              className={['p-p-3', classes.ProductDetailContainer].join(' ')}
            >
              <WithClass className="ItemImage">
                <Galleria
                  value={[]}
                  responsiveOptions={responsiveOptions}
                  showThumbnails={false}
                  numVisible={5}
                  circular={true}
                  showItemNavigators={true}
                ></Galleria>
              </WithClass>
              <WithClass className="ItemProps">
                <div>{product?.id}</div>
                {condition}
              </WithClass>
              <WithClass className="ItemPrice">
                <h3>{`${currencyFormat(
                  product.price?.amount,
                  product.price?.currency,
                  ',',
                )}`}</h3>
                {shippingImg}
              </WithClass>
              <WithClass className="ItemAttributes">
                <h2>Caracteristicas</h2>
              </WithClass>
              <Button label="Comprar" className="p-button-raised" />
              <WithClass className="ItemDesc">
                <h2>Descripcion del producto</h2>
                <p>{product.description}</p>
              </WithClass>
            </WithCard>
          </div>
        )}
      </ErrorBoundary>
    )
  }
  return render()
}

export default ProductDetail
