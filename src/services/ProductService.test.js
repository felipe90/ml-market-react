import { ProductService } from './ProductService'
import itemMock from '../mocks/data/item.mock.json'

let productService = null

describe('Product Service should', () => {
  beforeEach(() => {
    productService = new ProductService()
  })

  it('transform currency format', () => {
    const exp = productService.currencyFormat(1000, 'COL', '.')
    expect(exp).toBe('COL$ 1.000')
  })

  it('get related Categories as array of {label, url } from raw data', () => {
    const exp = productService.getRelatedCategories(itemMock.categories)
    const tb = [
      {
        label: 'Computación',
        url: '/items?search=Computacion',
      },
      {
        label: 'Tablets y Accesorios',
        url: '/items?search=Tablets y Accesorios',
      },
      {
        label: 'Tablets',
        url: '/items?search=Tablets',
      },
    ]
    expect(exp).toStrictEqual(tb)
  })

  it('return undefined when try to get related categories from null array', () => {
    const exp = productService.getRelatedCategories(null)
    expect(exp).toBe(undefined)
  })

  it('get Images as array of pictures from raw data', () => {
    const exp = productService.fromProductDataToImagesArray(itemMock)
    const tb = [
      {
        alt: 'Apple iPad 32 Gb Wifi Séptima Generación_0',
        itemImageSrc:
          'https://mco-s1-p.mlstatic.com/811726-MCO40176199118_122019-O.jpg',
        thumbnailImageSrc:
          'https://mco-s1-p.mlstatic.com/811726-MCO40176199118_122019-O.jpg',
        title: 'Apple iPad 32 Gb Wifi Séptima Generación_0',
      },
      {
        alt: 'Apple iPad 32 Gb Wifi Séptima Generación_1',
        itemImageSrc:
          'https://mco-s1-p.mlstatic.com/812058-MCO40176199116_122019-O.jpg',
        thumbnailImageSrc:
          'https://mco-s1-p.mlstatic.com/812058-MCO40176199116_122019-O.jpg',
        title: 'Apple iPad 32 Gb Wifi Séptima Generación_1',
      },
    ]
    expect(exp).toStrictEqual(tb)
  })

  it('return empty array when try to get images from empty object', () => {
    const exp = productService.fromProductDataToImagesArray({})
    expect(exp).toStrictEqual([])
  })
})
