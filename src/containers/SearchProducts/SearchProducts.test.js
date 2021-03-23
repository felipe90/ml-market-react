import React from 'react'
import expect from 'expect'
import { shallow, configure } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import SearchProducts from './SearchProducts'
import SearchBar from '../../components/SearchBar/SearchBar'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/items?search=test',
  }),
}))

configure({ adapter: new Adapter() })

describe('<SearchProducts />', () => {
  it('renders three <SearchBar /> component', () => {
    const wrapper = shallow(<SearchProducts changeSearchQuery={() => {}} />)
    expect(wrapper.find(SearchBar)).toHaveLength(1)
  })
})
