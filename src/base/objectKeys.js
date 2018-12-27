const values = {
  name: 'Vasy',
  age: 10,
  firstAddress: 'street 1',
  secondAddress: 'street 2',
  firstHouse: 10
}

/**
 * @params {string} name - случайное имя name, age, firstAddress, secondAddress
 */
exports.getValue = (name) => {
  return 'Vasy'
}

/**
 * @params {string} partAddress - случайный порядок first или second
 */
exports.getAddress = (partAddress) => {
  return 'street 1'
}

/**
 * @params {string} typeAddress - типа адреса address или house
 */
exports.getAddressByType = (typeAddress) => {
  return 10
}

/**
 * @params {string} typeAddress - типа адреса address или house
 * @params {string} [partAddress] - случайный порядок first или second. По умолчанию должно быть first
 */
exports.getAddressByTypeAndAddress = (typeAddress, partAddress) => {
  return 10
}

exports.values = values
