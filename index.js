const calendars = require('./src')
// const spacetime = require('spacetime')

let c = calendars.year.leftAlign('2019')
c.color('june 5th 2019', 'june 8th 2019', 'red')
document.querySelector('#leftAlign').innerHTML = c.build()

let c2 = calendars.year.weekAlign('2019', {
  numbers: true
})
c2.color('june 5th 2019', 'june 8th 2019', 'red')
document.querySelector('#weekAlign').innerHTML = c2.build()
