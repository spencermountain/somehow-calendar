const spacetime = require('spacetime')
const today = spacetime.now()

const styles = {
  month: `
    margin-left: -0.9rem;
  `,
  weeks: `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: nowrap;
  align-self: stretch;
  `,
  monthName: `
    font-size: .53rem;
    color: #a3a5a5;
    max-width:10px;
    text-align: center;
    margin-bottom: 0rem;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    transform:rotate(-45deg)
  `,
  week: `
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  `
}

const toStyle = function(obj) {
  return Object.keys(obj).reduce((str, k) => {
    str += `${k}:${obj[k]}; `
    return str
  }, '')
}

//
const drawDay = function(d, cal, month, weekNum) {
  let style = {
    'flex-basis': 50,
    flex: 1,
    'min-height': cal._height,
    'min-width': cal._width,
    height: cal._height,
    border: '1px solid #d7d5d2',
    'box-sizing': 'border-box',
    'border-radius': cal._radius,
    'font-size': '9px',
    color: '#a3a5a5',
    overflow: 'hidden'
    // transform: 'rotate(-90deg)'
  }

  //don't show leading/trailing days
  if (d.format('month') !== month) {
    style.opacity = 0
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
      style['background-color'] = '#ededed'
    }
  }
  //dim the past?
  if (cal.options.dim_past && d.epoch < today.epoch) {
    style.opacity = '0.4'
  }
  //highlight today?
  if (cal.options.show_today && d.isSame(today, 'day')) {
    style['background-color'] = 'steelblue'
    style['border'] = '1px solid steelblue'
  }
  //is it highlighted?
  let date = d.format('iso-short')
  if (cal.data.colors[date]) {
    style['background-color'] = cal.data.colors[date]
  }
  //is it underlined?
  if (cal.data.underline[date]) {
    style['border-bottom'] = '3px solid ' + cal.data.underline[date]
  }
  if (weekNum === 0) {
    style['border-left'] = '3px solid #d7d5d2'
    style['margin-left'] = '5px'
  }

  return cal.h`<div style="${toStyle(style)}" title="${d.format('nice-year')}">
    ${inside}
  </div>`
}
const drawWeek = function(w, cal, month, weekNum) {
  let end = w.endOf('week')
  w = w.minus(2, 'hour')
  let days = w.every('day', end).map(d => {
    return drawDay(d, cal, month, weekNum)
  })
  return cal.h`<div style=${styles.week}>
    ${days}
  </div>`
}

const drawMonth = function(start, cal) {
  const monthName = start.format('month-short')
  start = start.startOf('month')
  let month = start.format('month')
  let end = start.endOf('month')
  start = start.startOf('week').minus(2, 'hours')
  let weeks = start.every('week', end).map((d, weekNum) => {
    return drawWeek(d, cal, month, weekNum)
  })
  //if the month is a clean break, give it a margin
  if (end.day() === 0) {
    weeks.push(cal.h`<div style="margin-left:0.9rem;"></div>`)
  }
  return cal.h`<div style="${styles.month}">
    <div style="${styles.monthName}">${monthName}</div>
    <div style="${styles.weeks}">
      ${weeks}
    </div>
  </div>`
}

module.exports = drawMonth
