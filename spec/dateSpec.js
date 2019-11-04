const {_date} = require('../dist/date')

describe("Test Suite for [_date.ceilDate]", () => {
  it("returns date ceiling to midnight of current date", () => {
    expect(_date.ceilDate(new Date(2000, 1,1,10))).toEqual(new Date(2000, 1,1,0))
  })
  it("returns date ceiling to midnight of the date after current one", () => {
    expect(_date.ceilDate(new Date(2000, 1,1,12))).toEqual(new Date(2000, 1,2,0))
  })
  it("returns date ceiling to midnight of current date (clone date)", () => {
    expect(_date.ceilDate(new Date(2000, 1,1,10), true)).toEqual(new Date(2000, 1,1,0))
  })
  it("returns date ceiling to midnight of the date after current one (clone date)", () => {
    expect(_date.ceilDate(new Date(2000, 1,1,12), true)).toEqual(new Date(2000, 1,2,0))
  })
})

describe("Test Suite for [_date.clearTime]", () => {
  it("returns date cleared time", () => {
    expect(_date.clearTime(new Date(2000, 1,1,10))).toEqual(new Date(2000, 1,1,0))
  })
  it("returns date cleared time (with clone)", () => {
    expect(_date.clearTime(new Date(2000, 1,1,10), true)).toEqual(new Date(2000, 1,1,0))
  })
})

describe("Test Suite for [_date.isLeapYear]", () => {
  it("returns TRUE if leap year", () => {
    expect(_date.isLeapYear(new Date(2000, 1,1,10))).toBeTruthy()
  })
  it("returns FALSE if leap year", () => {
    expect(_date.isLeapYear(new Date(2001, 1,1,10))).toBeFalsy()
  })
})

describe("Test Suite for [_date.add]", () => {
  let date
  let interval

  beforeEach(() => {
    date = new Date(2000,1,1,10,10,10)
    interval = _date
  })

  it("returns date added 1 date", () => {
    expect(_date.add(date, interval.DAY, 1)).toEqual(new Date(2000,1,2,10,10,10))
  })
  it("returns date added 1 month", () => {
    expect(_date.add(date, interval.MONTH, 1)).toEqual(new Date(2000,2,1,10,10,10))
  })
  it("returns date added 1 year", () => {
    expect(_date.add(date, interval.YEAR, 1)).toEqual(new Date(2001,1,1,10,10,10))
  })
  it("returns date added 1 hour", () => {
    expect(_date.add(date, interval.HOUR, 1)).toEqual(new Date(2000,1,1,11,10,10))
  })
  it("returns date added 1 minute", () => {
    expect(_date.add(date, interval.MINUTE, 1)).toEqual(new Date(2000,1,1,10,11,10))
  })
  it("returns date added 1 second", () => {
    expect(_date.add(date, interval.SECOND, 1)).toEqual(new Date(2000,1,1,10,10,11))
  })
})

describe("Test Suite for [_date.format]", () => {
  let date

  beforeEach(() => {
    date = new Date(2000,1,1,20,10,10)
  })

  it("returns date format 1999/10/02", () => {
    expect(_date.format(date, 'Y/m/d')).toBe('2000/02/01')
  })
  it("returns date format 1999/10/02 20:10:10", () => {
    expect(_date.format(date, 'Y/m/d H:i:s')).toBe('2000/02/01 20:10:10')
  })
  it("returns date format 1999/10/02 08:10:10 PM", () => {
    expect(_date.format(date, 'Y/m/d h:i:s A')).toBe('2000/02/01 08:10:10 PM')
  })
})
