const Calendar = require('../Calendar')
const drawMonth = require('../month/_draw')

class ByQuarter extends Calendar {
  constructor(d, options) {
    super(d, options);
    this.d = this.d.startOf('year')
    this.squareDay = true
  }
  drawThree(d) {
    let h = this.h
    let months = []
    for (let i = 0; i < 3; i += 1) {
      let month = drawMonth(d, this)
      month = h`<div >
        <div class="grey f09">${d.format('month-short')}</div>
        <div class="w8 f06 ">${month}</div>
      </div>`
      months.push(month)
      d = d.add(1, 'month')
    }
    return h`<div class="row m1">${months}</div>`
  }
  build() {
    let h = this.h
    let d = this.d
    let year = d.year()
    d = d.startOf('year')
    let quarters = []
    for (let i = 0; i < 4; i += 1) {
      quarters.push(this.drawThree(d))
      d = d.add(3, 'months')
    }
    return h`<div class="mw24">
      <div class="right grey f08">${year}</div>
      ${quarters}
    </div>`
  }
}
module.exports = ByQuarter
