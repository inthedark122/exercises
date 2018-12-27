const React = require('react')
const { mount } = require('enzyme')
const { Links, Links2 } = require('../links')

describe('links', () => {
  it.skip('click second link (first part)', () => {
    expect.assertions(1)

    const log = (message) => {
      expect(message).toBe('clicked 1 link')
    }
    const wrapper = mount(<Links log={log} />)

    wrapper.find('a').at(1).instance().click()
  })

  it.skip('click second link (second part)', () => {
    expect.assertions(1)

    const log = (message) => {
      expect(message).toBe('clicked 1 link')
    }
    const wrapper = mount(<Links2 log={log} />)

    wrapper.find('a').at(1).simulate('click')
  })
})
