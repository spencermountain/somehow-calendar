const LeftAlignYear = require('./calendars/year/LeftAlign')
const WeekAlignYear = require('./calendars/year/WeekAlign')
const ByMonth = require('./calendars/year/ByMonth')
const ByQuarter = require('./calendars/year/ByQuarter')

const Month = require('./calendars/month/Month')
const Quarter = require('./calendars/quarter/ByMonth')
const show = require('./dynamic')

const api = {
  year: {
    leftAlign: (a, b) => new LeftAlignYear(a, b),
    weekAlign: (a, b) => new WeekAlignYear(a, b),
    byMonth: (a, b) => new ByMonth(a, b),
    ByQuarter: (a, b) => new ByQuarter(a, b),
  },
  month: {
    month: (a, b) => new Month(a, b),
  },
  quarter: {
    byMonth: (a, b) => new Quarter(a, b),
  },
  show: show
}

module.exports = api
