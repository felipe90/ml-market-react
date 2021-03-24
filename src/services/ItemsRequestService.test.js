import { ItemsRequestService } from './ItemsRequestService'
import itemMock from '../mocks/data/item.mock.json'
import itemsMock from '../mocks/data/items.mock.json'
import suggestionsMock from '../mocks/data/suggestions.mock.json'

import axios from 'axios'
jest.mock('axios')

let itemsRequestService = null

describe('Item request Service should', () => {
  beforeEach(() => {
    itemsRequestService = new ItemsRequestService()
  })

  it('get product list', async () => {
    const data = itemsMock
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(itemsRequestService.getProductList('test')).resolves.toEqual(
      data,
    )
  })

  it('fetches error when try to fetch product list', async () => {
    const errorMessage = 'Network Error'
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    )
    await expect(itemsRequestService.getProductList('test')).rejects.toThrow(
      errorMessage,
    )
  })

  it('get product item', async () => {
    const data = itemMock
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(itemsRequestService.getProduct('test')).resolves.toEqual(
      data,
    )
  })

  it('fetches error when try to fetch product item', async () => {
    const errorMessage = 'Network Error'
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    )
    await expect(itemsRequestService.getProduct('test')).rejects.toThrow(
      errorMessage,
    )
  })
  
  it('get product name suggestions', async () => {
    const data = suggestionsMock
    axios.get.mockImplementationOnce(() => Promise.resolve(data))
    await expect(itemsRequestService.getProduct('test')).resolves.toEqual(
      data,
    )
  })

  it('fetches error when try to fetch product name suggestions', async () => {
    const errorMessage = 'Network Error'
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    )
    await expect(itemsRequestService.getProduct('test')).rejects.toThrow(
      errorMessage,
    )
  })
})
