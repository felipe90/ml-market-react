import React from 'react'
import expect from 'expect'
import { mount, configure } from 'enzyme'
import { Link } from 'react-router-dom'
import { MemoryRouter } from 'react-router'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import CategoriesBreadcrumb from './CategoriesBreadcrumb'
import itemMock from '../../mocks/data/item.mock.json'

configure({ adapter: new Adapter() })

describe('<CategoriesBreadcrumb />', () => {
  it('should render 3 category links', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/items']}>
        <CategoriesBreadcrumb
          categories={itemMock.categories}
          maxNumCategories={3}
        />
      </MemoryRouter>,
    )

    expect(wrapper.find(Link)).toHaveLength(3)
  })
})
