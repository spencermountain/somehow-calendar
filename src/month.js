//
const drawDay = function(d, cal) {
  return cal.h`<div style="flex-basis: 50; flex: 1;  min-width:1rem; height:1rem; border:1px solid lightgrey;">
  ${d.date()}
  </div>`
}
const drawWeek = function(w, cal) {
  let end = w.endOf('week')
  // console.log(w.format('nice'))
  // console.log('\n\n---')
  // console.log(w.every('day', end).map(d => d.dayName()))
  let days = w.every('day', end).map(d => {
    return drawDay(d, cal)
  })
  return cal.h`<div class="row">
    ${days}
  </div>`
}

const drawMonth = function(start, cal) {
  start = start.startOf('month')
  let end = start.endOf('month')
  let weeks = start.every('week', end).map(d => {
    return drawWeek(d, cal)
  })
  return cal.h`<div class="outline">
    <div class="">${start.format('month')}</div>
    <div class="outline col">
      ${weeks}
    </div>
  </div>`
}
module.exports = drawMonth
