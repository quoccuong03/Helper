const {_string} = require('../dist/string')

describe("Test Suite for [_string.leftPad]", () => {
  it("returns `001` when making left pad 2 zero char on string `1`", () => {
    expect(_string.leftPad('1', 3, '0')).toBe('001')
  })
  it("returns `03` when making left pad 1 zero char on string `3`", () => {
    expect(_string.leftPad('3', 2, '0')).toBe('03')
  })
})

describe("Test Suite for [_string.escape]", () => {
  it("escapes `'` and `\\` from string", () => {
    expect(_string.escape('abc\'kakakaka\\kukuku')).toBe("abc\\\\'kakakaka\\\\\\kukuku")
  })
})

describe("Test Suite for [_string.limit]", () => {
  it("returns true if value in limit", () => {
    expect(_string.limit('aaa', {min: 3})).toBeTruthy()
  })
  it("returns true if value in limit", () => {
    expect(_string.limit('aaa', {max: 5})).toBeTruthy()
  })
  it("returns true if value in limit", () => {
    expect(_string.limit('aaaa', {min: 4})).toBeTruthy()
  })
  it("returns true if value in limit", () => {
    expect(_string.limit('aaaa', {max: 4})).toBeTruthy()
  })
  it("returns true if value in limit", () => {
    expect(_string.limit('aaa', {min: 3, max: 4})).toBeTruthy()
  })
  it("returns false if value exceeds limit", () => {
    expect(_string.limit('aaaa', {min: 5})).toBeFalsy()
  })
  it("returns false if value exceeds limit", () => {
    expect(_string.limit('aaaa', {max: 1})).toBeFalsy()
  })
})

describe("Test Suite for [_string.stringReplacer]", () => {
  it("returns string has been replaced", () => {
    expect(_string.stringReplacer("Hello %0%, I'm %1%!!!", ['World', 'Tan'])).toBe("Hello World, I'm Tan!!!")
  })
  it("returns string has been replaced", () => {
    expect(_string.stringReplacer("Hello %a%, I'm %b%!!!", {a: 'World', b: 'Tan'})).toBe("Hello World, I'm Tan!!!")
  })
})

describe("Test Suite for [_string.slugify]", () => {
  it("returns slug of string given", () => {
    expect(_string.slugify("cục cức chó màu đen")).toBe("cuc-cuc-cho-mau-den")
  })
})

describe("Test Suite for [_string.subString]", () => {
  it("returns string has been adding another char at index 1 count from the end", () => {
    expect(_string.subString("abcdefg", 'h', -1)).toBe("abcdefhg")
  })
  it("returns string has been adding another char at index 1 count from the begin", () => {
    expect(_string.subString("abcdefg", 'h', 1)).toBe("ahbcdefg")
  })
})