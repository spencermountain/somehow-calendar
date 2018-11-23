import Calendar from './src'

let c = new Calendar()
let html = c.month()

document.querySelector('#stage').innerHTML = html
