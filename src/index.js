const LeftAlignYear = require('./calendars/year/LeftAlign')
const WeekAlignYear = require('./calendars/year/WeekAlign')
const ByMonth = require('./calendars/year/ByMonth')

const Month = require('./calendars/month/Month')
const Quarter = require('./calendars/quarter/ByMonth')

const api = {
  year: {
    leftAlign: (a, b) => new LeftAlignYear(a, b),
    weekAlign: (a, b) => new WeekAlignYear(a, b),
    byMonth: (a, b) => new ByMonth(a, b),
  },
  month: {
    month: (a, b) => new Month(a, b),
  },
  quarter: {
    byMonth: (a, b) => new Quarter(a, b),
  }
}

module.exports = api
