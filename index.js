const spacetime = require('spacetime')
const calendar = require('./src')
// const inputs = require('somehow-input')

let start = 'Jan 1 2019'
let end = spacetime('Dec 28 2019')
let cal = calendar.months(start, end, { monthName: false })
cal.width('20px')
cal.height('20px')
cal.color('june 14th 2019', 'June 23rd 2019', '#cc7066')

document.querySelector('#months').innerHTML = cal.build()

cal = calendar.weeks(start, end)
cal.width('20px')
cal.height('20px')
cal.color('june 14th 2019', 'June 23rd 2019', '#cc7066')

document.querySelector('#weeks').innerHTML = cal.build()
