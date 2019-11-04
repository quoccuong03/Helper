const {_object} = require('../dist/object')

describe('Test Suite for [_object.compare]', () => {
  it('returns true when 2 objects is the same', () => {
    expect(_object.compare({a: 1, b: 2}, {a: 1, b: 2})).toBeTruthy()
  })
  it('returns false when 2 objects is not the same', () => {
    expect(_object.compare({a: 1, b: 2}, {b: 1, a: 2})).toBeFalsy()
  })
})

describe('Test Suite for [_object.compact]', () => {
  it('returns an object has compacted undefined/empty keys', () => {
    expect(_object.compact({a: 1, b: undefined, c: 'hello', d: null, e: '', f: true})).toEqual({
      a: 1,
      c: 'hello',
      f: true
    })
  })
  it('returns an object has compacted with specific keys', () => {
    expect(_object.compact({
      a: 1,
      b: undefined,
      c: 'hello',
      d: null,
      e: '',
      f: true
    }, ['a', 'c', 'd'])).toEqual({a: 1, c: 'hello'})
  })
})

describe('Test Suite for [_object.merge]', () => {
  it('returns an object has merged with another', () => {
    expect(_object.merge({}, [{a: 1, b: 2}, {c: 3, a: 5}])).toEqual({a: 1, b: 2, c: 3})
  })
  it('returns an object has merged with another', () => {
    expect(_object.merge({a: null}, [{a: 1, b: 2}, {c: 3, a: 5}])).toEqual({a: null, b: 2, c: 3})
  })
})

describe('Test Suite for [_object.exposeJson]', () => {
  const mockObj = {test: true}
  const mockStr = JSON.stringify(mockObj)

  it('returns an object with parsed string', () => {
    expect(_object.exposeJson({mockObj}, ['mockObj']).mockObj).toEqual(mockStr)
  })
  it('returns an object with unparsed string', () => {
    expect(_object.exposeJson({mockStr}, ['mockStr'], true).mockStr).toEqual(mockObj)
  })
  it('returns an array object with parsed string', () => {
    expect(_object.exposeJson([{mockObj}], ['mockObj'])[0].mockObj).toEqual(mockStr)
  })
  it('returns an array object with unparsed string', () => {
    expect(_object.exposeJson([{mockStr}], ['mockStr'], true)[0].mockStr).toEqual(mockObj)
  })
})