const Calendar = require('../Calendar')
const drawMonth = require('../month/_draw')

class ByMonth extends Calendar {
  constructor(d, options) {
    super(d, options);
    this.d = this.d.startOf('year')
    this.squareDay = true
  }
  build() {
    let h = this.h
    let d = this.d
    let year = d.year()
    d = d.startOf('year')
    let months = []
    for (let i = 0; i < 12; i += 1) {
      let month = drawMonth(d, this)
      month = h`<div class="w100p row mt05">
        <div class="grey f09">${d.format('month-short')}</div>
        <div class="w8 f06">${month}</div>
      </div>`
      months.push(month)
      d = d.add(1, 'month')
    }
    return h`<div class="col mw12">
      <div class="goright grey f08">${year}</div>
      ${months}
    </div>`
  }
}
module.exports = ByMonth
