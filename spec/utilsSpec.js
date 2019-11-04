const {utils} = require('../dist/utils')

describe('Test Suite for [utils.encrypt] and [utils.decrypt]', () => {
  it('encrypts and decrypts text with key', () => {
    const text = 'abc'
    const encrypt = utils.encrypt(text, 'key')

    expect(encrypt).not.toEqual(text)

    const decrypt = utils.decrypt(encrypt, 'key')

    expect(decrypt).not.toEqual(encrypt)

    expect(decrypt).toEqual(text)
  })
})

describe('Test Suite for [utils.isString]', () => {
  it('returns TRUE if value is a String', () => {
    expect(utils.isString('qwe')).toBeTruthy()
  })
  it('returns FALSE if value is not a String', () => {
    expect(utils.isString(1)).toBeFalsy()
  })
})

describe('Test Suite for [utils.queryToObject]', () => {
  it('returns object from query', () => {
    expect(utils.queryToObject('name=behjehem&age=18&home=LA')).toEqual({name: 'behjehem', age: '18', home: 'LA'})
  })
})

describe('Test Suite for [utils.jsonParse]', () => {
  it('returns object from JSON', () => {
    expect(utils.jsonParse('{"name":"behjehem","age":"18","home":"LA"}')).toEqual({name: 'behjehem', age: '18', home: 'LA'})
  })
  it('returns null if parsing failed', () => {
    expect(utils.jsonParse('"name":"behjehem","age":"18","home":"LA"}')).toBeNull()
  })
})

describe('Test Suite for [utils.isBlank]', () => {
  it('returns TRUE if value is empty', () => {
    expect(utils.isBlank('')).toBeTruthy()
    expect(utils.isBlank(null)).toBeTruthy()
    expect(utils.isBlank(undefined)).toBeTruthy()
    expect(utils.isBlank([])).toBeTruthy()
    expect(utils.isBlank({})).toBeTruthy()
  })
  it('returns FALSE if value is not empty', () => {
    expect(utils.isBlank('a')).toBeFalsy()
  })
})

describe('Test Suite for [utils.isEmpty]', () => {
  it('returns TRUE if value is empty', () => {
    expect(utils.isEmpty('')).toBeTruthy()
    expect(utils.isEmpty(null)).toBeTruthy()
    expect(utils.isEmpty(undefined)).toBeTruthy()
    expect(utils.isEmpty([])).toBeTruthy()
    expect(utils.isEmpty({})).toBeTruthy()
    expect(utils.isEmpty(0)).toBeTruthy()
  })
  it('returns FALSE if value is not empty', () => {
    expect(utils.isEmpty('a')).toBeFalsy()
  })
})

describe('Test Suite for [utils.isAllEmpty]', () => {
  it('returns TRUE if value is empty', () => {
    expect(utils.isAllEmpty('', null, undefined, [], {}, 0)).toBeTruthy()
  })
  it('returns FALSE if value is not empty', () => {
    expect(utils.isAllEmpty('a', [])).toBeFalsy()
  })
})

describe('Test Suite for [utils.isAnyEmpty]', () => {
  it('returns TRUE if value is empty', () => {
    expect(utils.isAnyEmpty(1, '')).toBeTruthy()
    expect(utils.isAnyEmpty(1, null)).toBeTruthy()
    expect(utils.isAnyEmpty(1, undefined)).toBeTruthy()
    expect(utils.isAnyEmpty(1, [])).toBeTruthy()
    expect(utils.isAnyEmpty(1, {})).toBeTruthy()
    expect(utils.isAnyEmpty(1, 0)).toBeTruthy()
  })
  it('returns FALSE if value is not empty', () => {
    expect(utils.isAnyEmpty('a', 1)).toBeFalsy()
  })
})

describe('Test Suite for [utils.isEmail]', () => {
  it('returns TRUE if value is an email', () => {
    expect(utils.isEmail('abc@gmail.com')).toBeTruthy()
  })
  it('returns FALSE if value is not an email', () => {
    expect(utils.isEmail('a')).toBeFalsy()
  })
})

describe('Test Suite for [utils.isNumeric]', () => {
  it('returns TRUE if value is a number', () => {
    expect(utils.isNumeric('1')).toBeTruthy()
  })
  it('returns FALSE if value is not a number', () => {
    expect(utils.isNumeric('a')).toBeFalsy()
  })
})

describe('Test Suite for [utils.isDate]', () => {
  it('returns TRUE if value is a date', () => {
    expect(utils.isDate(new Date)).toBeTruthy()
  })
  it('returns FALSE if value is not a date', () => {
    expect(utils.isDate('a')).toBeFalsy()
  })
})

describe('Test Suite for [utils.isPhone]', () => {
  it('returns TRUE if value is a phonenumber', () => {
    expect(utils.isPhone('84987654321')).toBeTruthy()
  })
  it('returns FALSE if value is not a phonenumber', () => {
    expect(utils.isPhone('098765')).toBeFalsy()
    expect(utils.isPhone('+84987654321')).toBeFalsy()
    expect(utils.isPhone('0987654321')).toBeFalsy()
  })
})

describe('Test Suite for [utils.isArray]', () => {
  it('returns TRUE if value is an array', () => {
    expect(utils.isArray([1])).toBeTruthy()
  })
  it('returns FALSE if value is not an array', () => {
    expect(utils.isArray('a')).toBeFalsy()
  })
})

describe('Test Suite for [utils.isObject]', () => {
  it('returns TRUE if value is an object', () => {
    expect(utils.isObject({a:1})).toBeTruthy()
  })
  it('returns FALSE if value is not an object', () => {
    expect(utils.isObject('a')).toBeFalsy()
  })
})

describe('Test Suite for [utils._isFunction]', () => {
  it('returns TRUE if value is a function', () => {
    expect(utils._isFunction(() => {})).toBeTruthy()
  })
  it('returns FALSE if value is not a function', () => {
    expect(utils._isFunction('a')).toBeFalsy()
  })
})

describe('Test Suite for [utils.functionFactory]', () => {
  it('returns a function from string', () => {
    const functionSupply = 'let [a,b] = arguments; return a+b'
    const func = utils.functionFactory(functionSupply)

    expect(utils._isFunction(func)).toBeTruthy()
    expect(func(1,2)).toEqual(3)
  })
})

describe('Test Suite for [utils._toArray]', () => {
  it('returns an array of value is not an array', () => {
    let string = 'a'

    expect(utils.isArray(string)).toBeFalsy()
    expect(utils.isArray(utils._toArray(string))).toBeTruthy()
  })
})

describe('Test Suite for [utils.format]', () => {
  it('returns a string replaced anchors', () => {
    expect(utils.format('Hello %0%', ['Home'])).toBe('Hello Home')
  })
  it('returns a string format from date like 1999-02-01', () => {
    expect(utils.format(new Date(1999,1,1), 'Y-m-d')).toBe('1999-02-01')
  })
})

describe('Test Suite for [utils.limit]', () => {
  it('validates limit for number', () => {
    expect(utils.limit(4, {min: 3})).toBeTruthy()
    expect(utils.limit(4, {max: 5})).toBeTruthy()
    expect(utils.limit(4, {min: 4})).toBeTruthy()
    expect(utils.limit(4, {max: 4})).toBeTruthy()
    expect(utils.limit(4, {min: 3, max: 4})).toBeTruthy()
    expect(utils.limit(4, {min: 5})).toBeFalsy()
    expect(utils.limit(4, {max: 1})).toBeFalsy()
  })
  it('validates limit for string', () => {
    expect(utils.limit('aaa', {min: 3})).toBeTruthy()
    expect(utils.limit('aaa', {max: 5})).toBeTruthy()
    expect(utils.limit('aaaa', {min: 4})).toBeTruthy()
    expect(utils.limit('aaaa', {max: 4})).toBeTruthy()
    expect(utils.limit('aaa', {min: 3, max: 4})).toBeTruthy()
    expect(utils.limit('aaaa', {min: 5})).toBeFalsy()
    expect(utils.limit('aaaa', {max: 1})).toBeFalsy()
  })
})

describe("Test Suite for [utils.subString]", () => {
  it("returns string has been adding another char at index 1 count from the end", () => {
    expect(utils.substr("abcdefg", 'h', -1)).toBe("abcdefhg")
  })
  it("returns string has been adding another char at index 1 count from the begin", () => {
    expect(utils.substr("abcdefg", 'h', 1)).toBe("ahbcdefg")
  })
})

describe("Test Suite for [utils.compact]", () => {
  it('returns an array has been compacted empty/undefined value', () => {
    expect(utils.compact([1, 2, null, '', 3, undefined])).toEqual([1, 2, 3])
  })
  it('returns an object has compacted undefined/empty keys', () => {
    expect(utils.compact({a: 1, b: undefined, c: 'hello', d: null, e: '', f: true})).toEqual({
      a: 1,
      c: 'hello',
      f: true
    })
  })
  it('returns an object has compacted with specific keys', () => {
    expect(utils.compact({
      a: 1,
      b: undefined,
      c: 'hello',
      d: null,
      e: '',
      f: true
    }, ['a', 'c', 'd'])).toEqual({a: 1, c: 'hello'})
  })
})
