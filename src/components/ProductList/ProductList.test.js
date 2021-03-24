import React from 'react'
import expect from 'expect'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import { Divider } from 'primereact/divider'
import WithCard from '../../hoc/WithCard'
import ProductList from './ProductList'
import ProductListItem from '../ProductListItem/ProductListItem'

import itemsMock from '../../mocks/data/items.mock.json'

configure({ adapter: new Adapter() })

describe('<ProductDetail />', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = shallow(<ProductList products={itemsMock.items} />)
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render <ProductListItem> component', () => {
    expect(wrapper.find(ProductListItem)).toHaveLength(4)
  })

  it('should render <WithCard> component', () => {
    expect(wrapper.find(WithCard)).toHaveLength(1)
  })
  
  it('should render <Divider> component', () => {
    expect(wrapper.find(Divider)).toHaveLength(3)
  })
})
