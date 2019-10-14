const drawDay = require('./_drawDay')

const styles = {
  all: `
    margin: 0rem;
  `,
  week: `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  `,
  labels: `
    color:grey;
    font-size:10px;
  `
}

const drawWeek = function(w, cal, year) {
  let end = w.endOf('week')
  w = w.minus(2, 'hour')
  let days = w.every('day', end).map(d => {
    let ignore = d.year() !== year
    return drawDay(d, cal, ignore)
  })
  return cal.h`<div style=${styles.week}>
    ${days}
  </div>`
}

const drawYear = function(start, cal) {
  start = start.startOf('year')
  let year = start.year()
  let end = start.endOf('year')
  start = start.startOf('week').minus(2, 'hours')
  let weeks = start.every('week', end).map(d => {
    return drawWeek(d, cal, year)
  })
  return cal.h`<div style="${styles.all}">
    <div style=${styles.week + styles.labels}>
      <div>M</div>
      <div>T</div>
      <div>W</div>
      <div>T</div>
      <div>F</div>
      <div>S</div>
      <div>S</div>
    </div>
    <div>
      ${weeks}
    </div>
  </div>`
}

module.exports = drawYear
