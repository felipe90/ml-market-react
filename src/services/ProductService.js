export class ProductService {
  /**
   * Get categories and parse them to work as navigation link
   * @param {number} number
   * @param {string} currency
   * @param {separator} separator
   * @returns {string}
   */
  currencyFormat = (number = '', currency = null, separator = ',') => {
    return `${currency}$ ${number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, separator)}`
  }

  /**
   * Get categories and parse them to work as navigation link
   * @param {Array} categories
   * @returns {Array}
   */
  getRelatedCategories(categories = []) {
    if (!categories) return

    return categories.map((cat) => {
      const parsedUrl = cat.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      return {
        label: cat,
        url: `/items?search=${parsedUrl}`,
      }
    })
  }

  /**
   * Get categories and parse them to work as navigation link
   * @param {Array} pictures
   * @param {Object} product
   * @returns {Array}
   */
  fromProductDataToImagesArray(product = {}) {
    if (!product.pictures) return []

    return product.pictures.map((img, index) => {
      return {
        title: `${product.title}_${index}`,
        itemImageSrc: img.secure_url,
        thumbnailImageSrc: img.secure_url,
        alt: `${product.title}_${index}`,
      }
    })
  }
}
