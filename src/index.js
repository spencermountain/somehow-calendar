//which output to we render to?
import htm from 'htm';
import vhtml from 'vhtml';

import month from './month'

const calendar = function() {
  this.render = htm.bind(vhtml) //by default
  this.bind = (r) => {
    this.render = htm.bind(r)
  }
}

calendar.prototype.year = () => {
}
calendar.prototype.month = month
calendar.prototype.week = () => {
}
calendar.prototype.day = () => {
}

export default calendar
