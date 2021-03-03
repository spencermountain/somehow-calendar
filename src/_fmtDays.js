import spacetime from 'spacetime'
import c from 'spencer-color'

const fmtDays = function (obj) {
  let res = {}
  Object.keys(obj).forEach((k) => {
    let iso = spacetime(k).format('iso-short')

    let color = obj[k]
    color = c.colors[color] || color
    res[iso] = color
  })
  return res
}

export default fmtDays
