import React from 'react'
import expect from 'expect'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import ProductDetail from './ProductDetail'
import { Button } from 'primereact/button'
import { Galleria } from 'primereact/galleria'
import itemMock from '../../mocks/data/item.mock.json'

configure({ adapter: new Adapter() })

describe('<ProductDetail />', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallow(<ProductDetail product={itemMock} />)
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render <Galleria> component', () => {
    expect(wrapper.find(Galleria)).toHaveLength(1)
  })

  it('should render product condition', () => {
    const tb = 'Nuevo - 50 vendidos'
    expect(wrapper.find('.ItemProps')).toHaveLength(1)
    expect(wrapper.find('.ItemProps').find('p').text()).toBe(tb)
  })

  it('should render product title', () => {
    const tb = 'Apple iPad 32 Gb Wifi Séptima Generación'
    expect(wrapper.find('.ItemProps').find('h1').text()).toBe(tb)
  })

  it('should render product price', () => {
    const tb = 'COP$ 1,444,900'
    expect(wrapper.find('.ItemPrice')).toHaveLength(1)
    expect(wrapper.find('.ItemPrice').find('img')).toHaveLength(1)
    expect(wrapper.find('.ItemPrice').find('h3').text()).toBe(tb)
  })

  it('should render "comprar" button', () => {
    global['open'] = jest.fn()
    expect(wrapper.find(Button)).toHaveLength(1)
    wrapper.find(Button).simulate('click')
    expect(global['open']).toHaveBeenCalled()
  })

  it('should render product item description', () => {
    const tb = 'Con el iPad puedes hacer varias cosas a la vez'
    expect(wrapper.find('.ItemDesc')).toHaveLength(1)
    expect(wrapper.find('.ItemDesc').find('h2')).toHaveLength(1)
    expect(wrapper.find('.ItemDesc').find('p').text()).toBe(tb)
  })

  it('should render product item attributes', () => {
    const tb = 'Marca - AppleCapacidad - 32 GB'
    expect(wrapper.find('.ItemAttributes')).toHaveLength(1)
    expect(wrapper.find('.ItemAttributes').find('h2')).toHaveLength(1)
    expect(wrapper.find('.ItemAttributes').find('div').text()).toBe(tb)
  })
})
