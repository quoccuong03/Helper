const {_number} = require('../dist/number')

describe("Test Suite for [_number.limit]", () => {
  it("returns true if value in limit", () => {
    expect(_number.limit(4, {min: 3})).toBeTruthy()
  })
  it("returns true if value in limit", () => {
    expect(_number.limit(4, {max: 5})).toBeTruthy()
  })
  it("returns true if value in limit", () => {
    expect(_number.limit(4, {min: 4})).toBeTruthy()
  })
  it("returns true if value in limit", () => {
    expect(_number.limit(4, {max: 4})).toBeTruthy()
  })
  it("returns true if value in limit", () => {
    expect(_number.limit(4, {min: 3, max: 4})).toBeTruthy()
  })
  it("returns false if value exceeds limit", () => {
    expect(_number.limit(4, {min: 5})).toBeFalsy()
  })
  it("returns false if value exceeds limit", () => {
    expect(_number.limit(4, {max: 1})).toBeFalsy()
  })
})