// create all day objects
const calculate = function (date) {
  let start = date.startOf('month').startOf('week').minus(1, 'second')
  let end = date.endOf('month').endOf('week')
  let weeks = start.every('week', end)
  weeks = weeks.map((d) => {
    let end = d.endOf('week').add(1, 'second')
    return d.every('day', end)
  })
  return weeks
}
export default calculate
