const spacetime = require('spacetime')
const htm = require('htm')
const vhtml = require('vhtml')
const drawMonth = require('./draw/month')
const drawWeeks = require('./draw/weeks')
const drawTimeline = require('./draw/timeline')

const styles = {
  row: `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    flex-wrap: wrap;
    align-self: stretch;
  `,
  col: `
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: center;
    flex-wrap: wrap;
    align-self: stretch;
  `
}

const defaults = {
  dim_past: true,
  show_today: true,
  show_weekends: true,
  show_numbers: false,
  monthName: true
}

class Show {
  constructor(start, end, options = {}) {
    this.start = spacetime(start)
    this.end = spacetime(end)
    this.options = Object.assign({}, defaults, options)
    this._width = '0.9rem'
    this._height = '1rem'
    this._radius = '1px'
    this.data = {
      colors: {},
      underline: {}
    }
    this.h = htm.bind(vhtml)
  }
  bind(r) {
    this.h = htm.bind(r)
    return this
  }
  width(w) {
    this._width = w
    return this
  }
  height(h) {
    this._height = h
    return this
  }
  radius(r) {
    this._radius = r
    return this
  }
  color(start, end, color) {
    start = spacetime(start)
    if (!color) {
      color = end
      end = start.add(1, 'day')
    }
    end = spacetime(end)
    start = start.minus(2, 'hours')
    start.every('day', end).forEach(d => {
      let date = d.format('iso-short')
      this.data.colors[date] = color
    })
  }
  underline(start, end, color) {
    start = spacetime(start)
    if (!color) {
      color = end
      end = start.add(1, 'day')
    }
    end = spacetime(end)
    start = start.minus(2, 'hours')
    start.every('day', end).forEach(d => {
      let date = d.format('iso-short')
      this.data.underline[date] = color
    })
  }
  build() {
    let beginning = this.start.clone()
    beginning = beginning.startOf('month').minus(2, 'hours')
    let months = beginning.every('month', this.end)
    let inside = months.map(d => {
      if (this.options.mode === 'timeline') {
        return drawTimeline(d, this, this.options)
      }
      return drawMonth(d, this, this.options)
    })
    if (this.options.mode === 'weeks') {
      inside = drawWeeks(months[0], this, this.options)
    }
    return this.h`<div style="${
      this.options.mode === 'weeks' ? styles.col : styles.row
    }" >
      ${inside}
    </div>`
  }
}

module.exports = Show
