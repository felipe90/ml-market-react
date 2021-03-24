import React from 'react'
import expect from 'expect'
import { configure, shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import ErrorBoundary from './ErrorBoundary'
import { Message } from 'primereact/message'

configure({ adapter: new Adapter() })

describe('<ErrorBoundary />', () => {
  it('should render 3 cate', () => {
    const wrapper = shallow(<ErrorBoundary />)
    wrapper.setState({
      hasError: true,
      errorMsg: 'error test',
    })

    expect(wrapper.find(Message)).toHaveLength(1)
  })
})
