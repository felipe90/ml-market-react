import React from 'react'

const ProductListItem = (props) => {
  //   <a class="item-img" [routerLink]="['/items', product.id]" routerLinkActive="active">
  //   <img [src]="product.pictures[0]" alt="{{ product.title }}" />
  // </a>
  // <section class="item-props">
  //   <section class="item-price">
  //     <h3>
  //       {{
  //         product.price?.amount
  //           | currency: product.price.currency:"symbol-narrow":"4.0"
  //       }}
  //     </h3>
  //     <img
  //       src="assets/img/ic_shipping.png"
  //       *ngIf="product.free_shipping"
  //       aria-label="free-shipping"
  //       alt="{{ product.title }}" />
  //   </section>
  //   <h2>{{ product.title }}</h2>
  //   <p>{{ product.title }}</p>
  //   <p *ngIf="product.condition">
  //     {{ product.condition === "new" ? "Nuevo" : null }}
  //     {{ product.condition === "used" ? "Usado" : null }}
  //   </p>
  // </section>
  // <

  return (
    <div>
      {/* <a class="item-img" [routerLink]="['/items', product.id]" routerLinkActive="active"> */}
      <img src={props.data.pictures[0]} alt={props.data.title} />
      {/* </a> */}
      {/* <section class="item-props">
         <section class="item-price">
           <h3>
             {{
               product.price?.amount
                 | currency: product.price.currency:"symbol-narrow":"4.0"
             }}
           </h3>
           <img
             src="assets/img/ic_shipping.png"
             *ngIf="product.free_shipping"
             aria-label="free-shipping"
             alt="{{ product.title }}" />
         </section>
         <h2>{{ product.title }}</h2>
         <p>{{ product.title }}</p>
         <p *ngIf="product.condition">
           {{ product.condition === "new" ? "Nuevo" : null }}
           {{ product.condition === "used" ? "Usado" : null }}
         </p>
       </section>
      </section> */}
      <section class="item-location">
        <h3>
          {props.data.address.city_name}, {props.data.address.state_name}
        </h3>
      </section>
    </div>
  )
}
export default ProductListItem
