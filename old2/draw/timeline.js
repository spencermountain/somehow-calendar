const drawDay = require('./_drawDay')

const styles = {
  month: `
    margin-left: 0.0rem;
  `,
  weeks: `
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: nowrap;
  align-self: stretch;
  min-height:100px;
  `,
  monthName: `
    font-size: .53rem;
    color: #a3a5a5;
    max-width:10px;
    text-align: center;
    margin-bottom: 0rem;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    transform:rotate(-45deg)
  `,
  week: `
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  `
}

const drawWeek = function(w, cal, month, weekNum) {
  let end = w.endOf('week')
  w = w.minus(2, 'hour')
  let days = w.every('day', end).map(d => {
    let ignore = d.format('month') !== month
    return drawDay(d, cal, ignore, weekNum)
  })
  return cal.h`<div style=${styles.week}>
    ${days}
  </div>`
}

const drawMonth = function(start, cal) {
  const monthName = start.format('month-short')
  start = start.startOf('month')
  let month = start.format('month')
  let end = start.endOf('month')
  start = start.startOf('week').minus(2, 'hours')
  let weeks = start.every('week', end).map((d, weekNum) => {
    return drawWeek(d, cal, month, weekNum)
  })
  //if the month is a clean break, give it a margin
  if (end.day() === 0) {
    weeks.push(cal.h`<div style="margin-left:0.9rem;"></div>`)
  }
  return cal.h`<div style="${styles.month}">
    <div style="${styles.monthName}">${monthName}</div>
    <div style="${styles.weeks}">
      ${weeks}
    </div>
  </div>`
}

module.exports = drawMonth
