const Show = require('./Show')

module.exports = {
  months: function(start, end) {
    return new Show(start, end)
  }
}
