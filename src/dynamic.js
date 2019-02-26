const spacetime = require('spacetime')
const drawMonth = require('./calendars/month/_draw')
let Calendar = require('./calendars/calendar')
const htm = require('htm')
const vhtml = require('vhtml')
let h = htm.bind(vhtml)
//
const dynamic = function(start, end) {
  start = spacetime(start)
  end = spacetime(end)
  let cal = new Calendar(start, {
    numbers: false
  })
  let months = []
  let d = start
  if (start.isAfter(end)) {
    let tmp = start
    start = end
    end = tmp
  }
  let num = start.diff(end, 'months')
  for (let i = 0; i < num; i += 1) {
    let month = drawMonth(d, cal)
    month = h`<div class="col" style="max-width:100px;">
      <div class="grey f09">${d.format('month-short')}</div>
      <div class="w5 f06">${month}</div>
    </div>`
    months.push(month)
    d = d.add(1, 'month')

  }
  return months
}
module.exports = dynamic
