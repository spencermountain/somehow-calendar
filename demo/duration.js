const spacetime = require('spacetime')
const inputs = require('somehow-input');
const htm = require('htm')
const vhtml = require('vhtml');
let h = htm.bind(vhtml);
const calendars = require('../src')

const printCalendars = function() {
  let start = document.querySelector('#origin').querySelector('input').value
  let duration = document.querySelector('#duration').querySelector('input').value
  let end = spacetime(start).epoch + Number(duration)
  let result = calendars.show(start, end)
  document.querySelector('#results').innerHTML = h`<table class="f2 mud w7">${result}</table>`
}

let start = inputs.input({
  label: 'start',
  value: 'June 5th 1998',
  width: 130,
  cb: () => printCalendars()
})
let end = inputs.duration({
  label: 'duration',
  value: {
    year: 1
  },
  max: {
    year: 3
  },
  min: {
    month: 1
  },
  cb: () => printCalendars()
})
document.querySelector('#origin').innerHTML = start.build()
document.querySelector('#duration').innerHTML = end.build()

printCalendars()
