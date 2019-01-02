const LeftAlign = require('./calendars/year/LeftAlign')
const WeekAlign = require('./calendars/year/WeekAlign')

const api = {
  year: {
    leftAlign: (a, b) => new LeftAlign(a, b),
    weekAlign: (a, b) => new WeekAlign(a, b),
  }
}

module.exports = api
