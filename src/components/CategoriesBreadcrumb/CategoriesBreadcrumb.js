import React from 'react'
import { Link } from 'react-router-dom'

import classes from './CategoriesBreadcrumb.module.scss'
import { ProductService } from '../../services/ProductService'

const CategoriesBreadcrumb = ({ categories, maxNumCategories }) => {
  let items = []
  const productService = new ProductService()

  const render = () => {
    if (categories) {
      items = productService
        .getRelatedCategories(categories)
        .slice(0, maxNumCategories)
        .map((category, index) => {
          return (
            <li key={index}>
              <Link
                to={category.url}
                style={{
                  fontWeight: index !== maxNumCategories - 1 ? 'auto' : 'bold',
                }}
              >
                {category.label}
              </Link>
              {index !== maxNumCategories - 1 ? (
                <i className="pi pi-chevron-right p-mx-2"></i>
              ) : null}
            </li>
          )
        })
    }

    return (
      <div className="p-sm-12 p-md-8 p-lg-8 p-sm-offset-0 p-md-offset-2 p-lg-offset-2 p-py-3">
        <nav className={classes.BreadcrumbsList}>
          <ul>{items}</ul>
        </nav>
      </div>
    )
  }

  return render()
}

export default CategoriesBreadcrumb
