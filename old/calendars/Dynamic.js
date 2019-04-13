const spacetime = require('spacetime')
const Calendar = require('./Calendar')
const drawMonth = require('./month/_draw')

class Dynamic extends Calendar {
  constructor(start, end, options = {}) {
    options.numbers = options.numbers || false
    start = spacetime(start)
    end = spacetime(end)
    super(start, options);
    this.start = start
    this.end = end
  // this.squareDay = true
  }
  drawMonths(start, end) {
    let months = []
    let d = start
    if (start.isAfter(end)) {
      let tmp = start
      start = end
      end = tmp
    }
    let num = start.diff(end, 'months')
    for (let i = 0; i <= num; i += 1) {
      let month = drawMonth(d, this)
      month = this.h`<div class="col" style="max-width:100px;">
          <div class="grey f09">${d.format('month-short')}</div>
          <div class="w5 f06">${month}</div>
        </div>`
      months.push(month)
      d = d.add(1, 'month')

    }
    return months
  }
  build() {
    return this.drawMonths(this.start, this.end).join('')
  }
}
module.exports = Dynamic
