const drawDay = require('./_drawDay')

const styles = {
  month: `
    margin: 0.35rem;
  `,
  monthName: `
    font-size: .53rem;
    color: #838b91;
    text-align: right;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    margin-right: 0.7rem;
  `,
  week: `
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  `
}

const drawWeek = function(w, cal, month) {
  let end = w.endOf('week')
  w = w.minus(2, 'hour')
  let days = w.every('day', end).map(d => {
    let ignore = d.format('month') !== month
    return drawDay(d, cal, ignore)
  })
  return cal.h`<div style=${styles.week}>
    ${days}
  </div>`
}

const drawMonth = function(start, cal, options = {}) {
  let monthName = start.format('month-short')
  monthName = cal.h`<div style="${styles.monthName}">${monthName}</div>`
  if (options.monthName === false) {
    monthName = null
  }
  start = start.startOf('month')
  let month = start.format('month')
  let end = start.endOf('month')
  start = start.startOf('week').minus(2, 'hours')
  let weeks = start.every('week', end).map(d => {
    return drawWeek(d, cal, month)
  })
  return cal.h`<div style="${styles.month}">
    ${monthName}
    <div>
      ${weeks}
    </div>
  </div>`
}

module.exports = drawMonth
