import config from '../assets/config/config.json'

const API_URL = `${config.host}:${config.port}${config.api}`
export class ProductService {
  /**
   * Get categories and parse them to work as navigation link
   * @param {number} number
   * @param {string} currency
   * @param {separator} separator
   * @returns {Object}
   */
  currencyFormat = (number = '', currency = null, separator = ',') => {
    return `${currency}$ ${number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, separator)}`
  }

  /**
   * Get categories and parse them to work as navigation link
   * @param {Array} categories
   * @returns {Object}
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
   * @returns {Array} images
   */
  fromPicturesRawArrayToImages(pictures = [], product = null) {
    if (!product) return

    return pictures.map((img, index) => {
      return {
        title: `${product.title}_${index}`,
        thumbnailImageSrc: img.secure_url,
        previewImageSrc: img.secure_url,
        alt: `${product.title}_${index}`,
      }
    })
  }
}
