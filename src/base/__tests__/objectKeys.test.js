const { values, getAddress, getAddressByType, getValue, getAddressByTypeAndAddress } = require('../objectKeys')

describe('objectKeys', () => {
  it.skip('random value', () => {
    Object.keys(values).forEach((key) => {
      expect(getValue(key)).toBe(values[key])
    })
  })

  it.skip('random address', () => {
    expect(getAddress('first')).toBe(values.firstAddress)
    expect(getAddress('second')).toBe(values.secondAddress)
  })

  it.skip('random address by type', () => {
    expect(getAddressByType('address')).toBe(values.firstAddress)
    expect(getAddressByType('house')).toBe(values.firstHouse)
  })

  it.skip('random address by type and address', () => {
    expect(getAddressByTypeAndAddress('address', 'first')).toBe(values.firstAddress)
    expect(getAddressByTypeAndAddress('address', 'second')).toBe(values.secondAddress)
    expect(getAddressByTypeAndAddress('house')).toBe(values.firstHouse)
  })
})
