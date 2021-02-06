const mult = require('../src/mult')

it('should return correct multiplication', () => {
  const result = mult (2, 3)
  expect(result).toBe(6)
})