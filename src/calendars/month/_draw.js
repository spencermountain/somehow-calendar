const buildWeek = function(d, self, month) {
  let h = self.h
  let days = []
  let last = 1
  for (let i = 0; i < 7; i += 1) {
    let stub = d.format('month') !== month
    days.push(self.buildDay(d, stub))
    d = d.add(1, 'day')
    if (d.date() === last) {
      console.log(d.format('nice'))
    }
    last = d.date()
  }
  return h`<div class="row" style="flex-wrap:nowrap;">
  ${days}
  </div>`
}
//
const drawMonth = function(d, self) {
  let month = d.format('month')
  let h = self.h
  d = d.startOf('week') //.add(2, 'hours')
  let weeks = []
  for (let i = 0; i < 6; i += 1) {
    weeks.push(buildWeek(d, self, month))
    d = d.add(1, 'week')
  }
  return h`<div class="goleft col">
    ${weeks}
  </div>`
}
module.exports = drawMonth
