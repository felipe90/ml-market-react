import React from 'react'
import expect from 'expect'
import { shallow, mount, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { MemoryRouter } from 'react-router'

import App from './App'
import SearchProducts from '../SearchProducts/SearchProducts'
import CategoriesBreadcrumb from '../../components/CategoriesBreadcrumb/CategoriesBreadcrumb'
import ProductListPage from '../../pages/ProductListPage'

configure({ adapter: new Adapter() })

describe('<App />', () => {
  it('renders three <SearchProducts /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(SearchProducts)).toHaveLength(1)
  })

  it('renders three <CategoriesBreadcrumb /> component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(CategoriesBreadcrumb)).toHaveLength(1)
  })

  it('renders three <ProductListPage /> component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/items']}>
        <App />
      </MemoryRouter>,
    )
    expect(wrapper.find(ProductListPage)).toHaveLength(1)
  })
})
