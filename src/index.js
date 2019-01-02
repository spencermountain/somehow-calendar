const LeftAlignYear = require('./calendars/year/LeftAlign')
const WeekAlignYear = require('./calendars/year/WeekAlign')

const WeekAlignMonth = require('./calendars/month/WeekAlign')

const api = {
  year: {
    leftAlign: (a, b) => new LeftAlignYear(a, b),
    weekAlign: (a, b) => new WeekAlignYear(a, b),
  },
  month: {
    weekAlign: (a, b) => new WeekAlignMonth(a, b),
  }
}

module.exports = api
