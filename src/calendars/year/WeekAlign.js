const Calendar = require('../Calendar')

class WeekAlign extends Calendar {
  constructor(d, options) {
    super(d, options);
    this.d = this.d.startOf('year')
  }
  buildMonth(d) {
    let h = this.h
    let month = d.month()
    let name = d.format('month-short').toLowerCase()
    d = d.startOf('week')
    let days = []
    for (let i = 0; i < 37; i += 1) {
      d = d.startOf('day')
      if (d.dayName() === 'monday') {
        days.push(h`<div style="width:3px; border-left:1px solid red;"></div>`)
      }
      let stub = d.month() !== month
      days.push(this.buildDay(d, stub))
      d = d.add(1, 'day')
    }
    return h`<div class="goleft row">
      <div style="flex-basis:2rem;" class="lightgrey f08 right pr05">${name}</div>
      ${days}
    </div>`
  }
  build() {
    let h = this.h
    let months = []
    let d = this.d
    for (let i = 0; i < 12; i += 1) {
      d = d.startOf('month')
      months.push(this.buildMonth(d))
      d = d.add(1, 'month')
    }
    return h`<div class="col">
      ${months}
    </div>`
  }
}
module.exports = WeekAlign
