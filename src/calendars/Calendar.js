const htm = require('htm')
const vhtml = require('vhtml')
const spacetime = require('spacetime')
const color = require('spencer-color').colors

class Calendar {
  constructor(d, options = {}) {
    this.d = spacetime(d, options.timezone)
    this.options = options
    this.h = htm.bind(vhtml)
    this.styles = []
  }
  buildStyle(obj) {
    return Object.keys(obj).reduce((str, k) => {
      str += `${k}:${obj[k]};`
      return str;
    }, '');
  }
  findStyle(d) {
    let style = {
      flex: '1 1 0',
      overflow: 'hidden',
      color: color.lighter,
      margin: 'auto',
      'min-height': '1rem',
      'font-size': '8px',
      'border': `1px solid ${color.lighter}`
    }
    this.styles.forEach((c) => {
      if (d.isBefore(c.end) && d.isAfter(c.start)) {
        if (c.color !== undefined) {
          style['background-color'] = c.color
          style.border = `1px solid ${c.color}`
        }
        if (c.underline !== undefined) {
          style['border-bottom'] = '1px solid ' + c.underline
        }
      }
    })
    return style
  }
  buildDay(d, stub) {
    let h = this.h
    let style = this.findStyle(d)
    let num = ''
    if (this.options.numbers) {
      num = d.date()
    }
    let title = d.format('{month-short} {date}')
    if (stub) {
      style['background-color'] = color.white
      style.border = '1px solid rgba(0,0,0,0)' // + c.dark
      num = ''
      title = ''
    }
    return h`<div style=${this.buildStyle(style)} title="${title}">${num}</div>`
  }
  // weekends(color) {}
  color(a, b, col) {
    a = spacetime(a).startOf('day')
    b = spacetime(b).endOf('day')
    this.styles.push({
      start: a,
      end: b,
      color: color[col] || col
    })
    return this
  }
  underline(a, b, col) {
    a = spacetime(a).startOf('day')
    b = spacetime(b).endOf('day')
    this.styles.push({
      start: a,
      end: b,
      underline: color[col] || col
    })
    return this
  }
  day(d, col) {
    this.color(d, d, col)
    return this
  }
  bind(r) {
    this.h = htm.bind(r)
    return this
  }
}
module.exports = Calendar
