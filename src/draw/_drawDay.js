const spacetime = require('spacetime')
const today = spacetime.now()

const toStyle = function(obj) {
  return Object.keys(obj).reduce((str, k) => {
    str += `${k}:${obj[k]}; `
    return str
  }, '')
}
const drawDay = function(d, cal, ignore) {
  let style = {
    'flex-basis': 50,
    flex: 1,
    'min-width': cal._width,
    height: cal._height,
    border: '1px solid #dedbd7',
    'box-sizing': 'border-box',
    'border-radius': '0px',
    'font-size': '9px',
    color: '#a3a5a5',
    overflow: 'hidden'
  }
  //dim the past?
  if (cal.options.dim_past && d.epoch < today.epoch) {
    style.opacity = '0.4'
  }
  //don't show leading/trailing days
  if (ignore) {
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
      style['background-color'] = '#f0f0f0'
    }
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

  return cal.h`<div style="${toStyle(style)}" title="${d.format('nice-year')}">
    ${inside}
  </div>`
}
module.exports = drawDay
