import React from 'react'

const CategoriesBreadcrumb = ({ categories, max }) => {
  let items = []

  const render = () => {
    if (categories) {
      items = categories
        .map((category) => {
          return { label: category, url: `/items?search=${category}` }
        })
        .slice(0, max)
    }
    console.log(items)

    {
      /* <li class="p-breadcrumb-chevron pi pi-chevron-right"></li> */
    }

    return (
      <div className="p-sm-12 p-md-8 p-lg-8 p-sm-offset-0 p-md-offset-2 p-lg-offset-2 p-p-0">
        <nav>
          
        </nav>
      </div>
    )
  }

  return render()
}

export default CategoriesBreadcrumb
