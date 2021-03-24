import React from 'react'
import expect from 'expect'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { MemoryRouter } from 'react-router'

import ProductListItem from './ProductListItem'
import itemsMock from '../../mocks/data/items.mock.json'

configure({ adapter: new Adapter() })

describe('<ProductListItem />', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/items']}>
        <ProductListItem product={itemsMock.items[0]} />)
      </MemoryRouter>,
    )
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render <Link> component with image inside', () => {
    expect(wrapper.find('Link.ItemImage')).toHaveLength(1)
    expect(wrapper.find('Link.ItemImage').find('img')).toHaveLength(1)
  })

  it('should render items properties', () => {
    expect(wrapper.find('.ItemProperties').length).toBeGreaterThan(1)
  })

  it('should render product price', () => {
    const tb = 'COP$ 50,000'
    expect(wrapper.find('.ItemPrice').length).toBeGreaterThan(1)
    expect(wrapper.find('.ItemPrice').find('img')).toHaveLength(1)
    expect(wrapper.find('.ItemPrice').find('h3').text()).toBe(tb)
  })

  it('should render product location', () => {
    const tb = 'Barrios Unidos, Bogotá D.C.'
    expect(wrapper.find('.ItemLocation')).toHaveLength(1)
    expect(wrapper.find('.ItemLocation').find('h3').text()).toBe(tb)
  })
})
