import { difference, mod, product, quotient, sum } from "./math"

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
})

test("difference 3 - 2 to equal 1", () => {
  expect(difference(3, 2)).toBe(1)
})

test("product 3 * 2 to equal 1", () => {
  expect(product(3, 2)).toEqual(6)
})

test("quotient 3 / 2 to equal 1", () => {
  expect(quotient(3, 2)).toEqual(1.5)
})

test("mod 3 / 2 to equal 1", () => {
  expect(mod(3, 2)).toEqual(1)
})
