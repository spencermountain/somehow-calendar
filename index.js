const spacetime = require('spacetime')
const calendar = require('./src')
const inputs = require('somehow-input')

const printCalendars = function() {
  let start = document.querySelector('#origin').querySelector('input').value
  let duration = document.querySelector('#duration').querySelector('input')
    .value
  let end = spacetime(start).epoch + Number(duration)

  let cal = calendar.months(start, end)
  cal.color('june 14th 2019', 'June 23rd 2019', '#cc7066')

  document.querySelector('#results').innerHTML = cal.build()
}

const printTimeline = function() {
  let start = document.querySelector('#origin').querySelector('input').value
  let duration = document.querySelector('#duration').querySelector('input')
    .value
  let end = spacetime(start).epoch + Number(duration)

  let cal = calendar.timeline(start, end, {})
  cal.color('june 14th 2019', 'June 23rd 2019', '#cc7066')

  document.querySelector('#timeline').innerHTML = cal.build()
}

let start = inputs.input({
  label: 'start',
  value: 'Apr 4th 2019',
  width: 130,
  cb: () => {
    printCalendars()
    printTimeline()
  }
})

let end = inputs.duration({
  label: 'duration',
  value: {
    year: 1
  },
  max: {
    month: 12
  },
  min: {
    month: 1
  },
  cb: () => {
    printCalendars()
    printTimeline()
  }
})

document.querySelector('#origin').innerHTML = start.build()
document.querySelector('#duration').innerHTML = end.build()

printCalendars()
printTimeline()
