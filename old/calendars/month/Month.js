const Calendar = require('../Calendar')
const drawMonth = require('./_draw')

class Month extends Calendar {
  constructor(d, options) {
    super(d, options);
    this.d = this.d.startOf('month')
    this.squareDay = true
  }

  build() {
    return drawMonth(this.d, this)
  }
}
module.exports = Month
