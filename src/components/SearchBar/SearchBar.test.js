import React from 'react'
import expect from 'expect'
import { configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { AutoComplete } from 'primereact/autocomplete'
import { Button } from 'primereact/button'

import SearchBar from './SearchBar'
import suggestionsMock from '../../mocks/data/suggestions.mock.json'

configure({ adapter: new Adapter() })

describe('<SearchBar />', () => {
  let wrapper = null

  beforeEach(() => {
    wrapper = mount(
      <SearchBar
        suggestions={suggestionsMock.suggested_queries}
        selectedSuggestion={suggestionsMock.suggested_queries[0]}
        searchProducts={jest.fn()}
        searchSuggestions={jest.fn()}
        goToHome={jest.fn()}
        setSelectedSuggestion={jest.fn()}
      />,
    )
  })

  afterEach(() => {
    wrapper = null
  })

  it('should render image logo', () => {
    expect(wrapper.find('.img-logo')).toHaveLength(1)
  })

  it('should render <AutoComplete> component', () => {
    expect(wrapper.find(AutoComplete)).toHaveLength(1)
  })

  it('should render <Button> component', () => {
    expect(wrapper.find(Button)).toHaveLength(1)
  })

  it('should go home after click', () => {
    const spy = jest.spyOn(wrapper.props(), 'goToHome')
    wrapper.update()
    expect(spy).toHaveBeenCalledTimes(0)
    wrapper.find('.img-logo').simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('should render "search" button', () => {
    const spy = jest.spyOn(wrapper.props(), 'searchProducts')
    wrapper.update()
    expect(spy).toHaveBeenCalledTimes(0)
    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
