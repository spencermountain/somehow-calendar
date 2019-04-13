const spacetime = require('spacetime')
const today = spacetime.now()
//
const drawDay = function(d, cal, month) {
  let style = `
    flex-basis: 50;
    flex: 1;
    min-width: 0.9rem;
    height: 1rem;
    border: 1px solid #d7d5d2;
    box-sizing: border-box;
    font-size: 9px;
    color: #a3a5a5;
    overflow: hidden;
  `

  //don't show leading/trailing days
  if (d.format('month') !== month) {
    style += `opacity:0;`
  }

  //show the day numbers?
  let inside = ''
  if (cal.options.show_numbers) {
    inside = d.date()
  }
  //dim the weekends?
  if (cal.options.show_weekends) {
    let day = d.dayName()
    if (day === 'saturday' || day === 'sunday') {
      style += `background-color:#ededed;`
    }
  }
  //dim the past?
  if (cal.options.dim_past && d.epoch < today.epoch) {
    style += `opacity:0.4;`
  }
  //highlight today?
  if (cal.options.show_today && d.isSame(today, 'day')) {
    style += `background-color:steelblue; border: 1px solid steelblue;`
  }

  return cal.h`<div style="${style}">
    ${inside}
  </div>`
}
const drawWeek = function(w, cal, month) {
  let end = w.endOf('week')
  w = w.minus(2, 'hour')
  let days = w.every('day', end).map(d => {
    return drawDay(d, cal, month)
  })
  return cal.h`<div class="row">
    ${days}
  </div>`
}

const drawMonth = function(start, cal) {
  start = start.startOf('month')
  let month = start.format('month')
  let end = start.endOf('month')
  start = start.startOf('week').minus(2, 'hours')
  let weeks = start.every('week', end).map(d => {
    return drawWeek(d, cal, month)
  })
  let container = `margin:0.35rem;`
  let monthName = `font-size: .667rem; color:#838b91; text-align:center; margin-bottom:0.2rem;`
  return cal.h`<div style="${container}">
    <div style="${monthName}">${month}</div>
    <div class=" col">
      ${weeks}
    </div>
  </div>`
}
module.exports = drawMonth
