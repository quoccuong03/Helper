const {_array} = require('../dist/array')

describe('Test Suite for [_array.clean]', () => {
  it('returns an array has been cleaned empty/undefined value', () => {
    expect(_array.clean([1, 2, 3, '', 3, 4])).toEqual([1, 2, 3, 3, 4])
  })
  it('returns an array has been cleaned empty/undefined/duplicate value', () => {
    expect(_array.clean([1, 2, 3, '', 3, 4], true)).toEqual([1, 2, 3, 4])
  })
})

describe('Test Suite for [_array.compact]', () => {
  it('returns an array has been compacted empty/undefined value', () => {
    expect(_array.compact([1, 2, null, '', 3, undefined])).toEqual([1, 2, 3])
  })
})

describe('Test Suite for [_array.remove]', () => {
  it('returns an array has been removed specific item', () => {
    expect(_array.remove([1, 2, null, '', 3, undefined], null)).toEqual([1, 2, '', 3, undefined])
  })
})

describe('Test Suite for [_array.removes]', () => {
  it('returns an array has been removed specific items', () => {
    expect(_array.removes([1, 2, null, '', 3, undefined], [null, 3])).toEqual([1, 2, '', undefined])
  })
})

describe('Test Suite for [_array.flatten]', () => {
  it('returns a flatten array', () => {
    expect(_array.flatten([1, [2, 3, 4], [4, [567]]])).toEqual([1, 2, 3, 4, 4, 567])
  })
})

describe('Test Suite for [_array.last]', () => {
  it('returns last item of array', () => {
    expect(_array.last([1, [2, 3, 4], [4, [567]]])).toEqual([4, [567]])
  })
})

describe('Test Suite for [_array.pluck]', () => {
  it('returns an array containing value of given key plucked from array of object', () => {
    expect(_array.pluck([{a: 1, b: 2}, {a: 1, c: 3}, {a: 'g'}], 'a')).toEqual([1, 1, 'g'])
  })
})

describe('Test Suite for [_array.difference]', () => {
  const arrayA = [1, 2, 3]
  const arrayB = [3, 4, 5, 6]

  it('returns an array from Array A subtract B one', () => {
    // Array A subtracts B one
    expect(_array.difference(arrayA, arrayB)).toEqual([1, 2])
  })
  it('returns an array from Array B subtract A one', () => {
    // Array A subtracts B one
    expect(_array.difference(arrayB, arrayA)).toEqual([4, 5, 6])
  })
})

describe('Test Suite for [_array.distinct]', () => {
  it('returns an array has removed duplicate items', () => {
    expect(_array.distinct([1, 2, 3, 3, 4, 5, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  })
  it('returns an array has removed duplicate items following given key(only useful with array object)', () => {
    expect(_array.distinct([{a: 1, b: 2}, {a: 1, c: 3}, {a: 'g'}, {a: 1, b: 2}], 'a')).toEqual([{
      a: 1,
      b: 2
    }, {a: 'g'}])
  })
})

describe('Test Suite for [_array.sort]', () => {
  let array

  beforeEach(() => {
    array = [2, 3, 4, 2, 5, 6, 8, 1]
  })

  it('returns an array sorting ascending', () => {
    expect(_array.sort(array)).toEqual([1, 2, 2, 3, 4, 5, 6, 8])
  })
  it('returns an array sorting descending', () => {
    expect(_array.sort(array, (a, b) => b - a)).toEqual([8, 6, 5, 4, 3, 2, 2, 1])
  })
})

describe('Test Suite for [_array.sortObject]', () => {
  let array

  beforeEach(() => {
    array = [{a: 1, b: 'z'}, {a: 3, b: 'a'}]
  })

  it('returns an array object sorting ascending by key', () => {
    expect(_array.sortObject(array, 'b', 'asc')).toEqual([{a: 3, b: 'a'}, {a: 1, b: 'z'}])
  })
  it('returns an array object sorting descending by key', () => {
    expect(_array.sortObject(array, 'a', 'desc')).toEqual([{a: 3, b: 'a'}, {a: 1, b: 'z'}])
  })
})

describe('Test Suite for [_array.group]', () => {
  it('returns an array object grouped by key', () => {
    expect(_array.group([{id: 1, name: 'a'}, {id: 2, name: 'b'}, {
      id: 3,
      name: 'a'
    }], 'name')).toEqual({'a': [{id: 1, name: 'a'}, {id: 3, name: 'a'}], 'b': [{id: 2, name: 'b'}]})
  })
})

describe('Test Suite for [_array.calculate]', () => {
  let array
  let objArr

  beforeEach(() => {
    array = [2,3,4,5]
    objArr = [{a: 2}, {a: 5}]
  })

  it('returns result of SUM from items from array', () => {
    expect(_array.calculate(array, '+')).toEqual(14)
  })
  it('returns result of SUBTRACTION from items from array', () => {
    expect(_array.calculate(array, '-')).toEqual(-10)
  })
  it('returns result of MULTIPLICATION from items from array', () => {
    expect(_array.calculate(array, '*')).toEqual(120)
  })
  it('returns result of DIVISION from items from array', () => {
    expect(_array.calculate(array, '/')).toEqual(2/3/4/5)
  })
  it('returns result of SUM from items from array object', () => {
    expect(_array.calculate(objArr, '+', 'a')).toEqual(7)
  })
  it('returns result of SUBTRACTION from items from array object', () => {
    expect(_array.calculate(objArr, '-', 'a')).toEqual(-3)
  })
  it('returns result of MULTIPLICATION from items from array object', () => {
    expect(_array.calculate(objArr, '*', 'a')).toEqual(10)
  })
  it('returns result of DIVISION from items from array object', () => {
    expect(_array.calculate(objArr, '/', 'a')).toEqual(0.4)
  })
})

