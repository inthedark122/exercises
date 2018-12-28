const { values, getAddress, getAddressByType, getValue, getAddressByTypeAndAddress } = require('../objectKeys')

describe('objectKeys', () => {
  Object.keys(values).forEach((key) => {
    it.skip(`Should return value for "${key}"`, () => {
      expect(getValue(key)).toBe(values[key])
    })
  });

  [
    ['first', values.firstAddress],
    ['second', values.secondAddress]
  ].forEach(([arg, res]) => {
    it.skip(`Should retun value for part of partAddress = "${arg}"`, () => {
      expect(getAddress(arg)).toBe(res)
    })
  });

  [
    ['address', values.firstAddress],
    ['house', values.firstHouse]
  ].forEach(([arg, res]) => {
    it.skip(`Should return value by part of typeAddress = "${arg}"`, () => {
      expect(getAddressByType(arg)).toBe(res)
    })
  });

  [
    [['address', 'first'], values.firstAddress],
    [['address', 'second'], values.secondAddress],
    [['house'], values.firstHouse]
  ].forEach(([args, res]) => {
    it.skip(`Should return value by part of address and type: ${args}`, () => {
      expect(getAddressByTypeAndAddress(...args)).toBe(res)
    })
  })
})
