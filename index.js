const calendars = require('./src')
require('./demo/duration')

let c = calendars.year.leftAlign('2019')
c.color('june 5th 2019', 'june 8th 2019', 'red')
document.querySelector('#leftAlign').innerHTML = c.build()

let c2 = calendars.year.weekAlign('2019', {})
c2.color('june 5th 2019', 'june 8th 2019', 'red')
document.querySelector('#weekAlign').innerHTML = c2.build()
//

let c3 = calendars.year.byMonth('nov 9th 2019', {})
c3.color('june 5th 2019', 'june 8th 2019', 'red')
document.querySelector('#byWeek').innerHTML = c3.build()
