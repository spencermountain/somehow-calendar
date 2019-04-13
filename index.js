const spacetime = require('spacetime')
const inputs = require('somehow-input')
const htm = require('htm')
const vhtml = require('vhtml')
let h = htm.bind(vhtml)
const calendar = require('./src')

const printCalendars = function() {
  let start = document.querySelector('#origin').querySelector('input').value
  let duration = document.querySelector('#duration').querySelector('input')
    .value
  let end = spacetime(start).epoch + Number(duration)
  let cal = calendar.months(start, end)
  cal.color('june 5th 2019', 'june 8th 2019', 'red')
  document.querySelector(
    '#results'
  ).innerHTML = h`<table class="f2 mud w7">${cal.build()}</table>`
}

let start = inputs.input({
  label: 'start',
  value: 'May 4th 2019',
  width: 130,
  cb: () => printCalendars()
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
  cb: () => printCalendars()
})
document.querySelector('#origin').innerHTML = start.build()
document.querySelector('#duration').innerHTML = end.build()

printCalendars()
