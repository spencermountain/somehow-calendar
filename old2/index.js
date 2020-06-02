const Show = require('./Show')

module.exports = {
  months: function(start, end, options = {}) {
    return new Show(start, end, options)
  },
  timeline: function(start, end, options = {}) {
    options.mode = 'timeline'
    return new Show(start, end, options)
  },
  weeks: function(start, end, options = {}) {
    options.mode = 'weeks'
    return new Show(start, end, options)
  }
}
