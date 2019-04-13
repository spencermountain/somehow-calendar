const spacetime = require('spacetime')
const htm = require('htm')
const vhtml = require('vhtml')
const drawMonth = require('./month')

class Show {
  constructor(start, end, options = {}) {
    this.start = spacetime(start)
    this.end = spacetime(end)
    this.options = options
    this.data = {
      colors: {},
      underlined: {}
    }
    if (options.today !== false) {
      let today = spacetime.now().format('iso-short')
      this.data.colors[today] = 'grey'
    }
    this.h = htm.bind(vhtml)
  }
  bind(r) {
    this.h = htm.bind(r)
    return this
  }
  color(start, end, color) {
    start = spacetime(start)
    if (!color) {
      color = end
      end = start
    }
  }
  build() {
    let months = this.start.every('month', this.end)
    months = months.map(d => drawMonth(d, this))
    return this.h`<div class="outline col" >
      ${months}
    </div>`
  }
}

module.exports = Show