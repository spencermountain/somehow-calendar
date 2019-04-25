<div align="center">
  <div>calendar visualization</div>
  <div>
    <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  </div>
  <a href="https://npmjs.org/package/somehow-calendar">
    <img src="https://img.shields.io/npm/v/somehow-calendar.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/somehow-calendar">
    <img src="https://badge-size.herokuapp.com/spencermountain/somehow-calendar/gh-pages/builds/somehow-calendar.min.js" />
  </a>
</div>

**work-in-progress**

renders html calendars using [spacetime](https://github.com/spencermountain/spacetime) date library

<h4><a href="https://spencermounta.in/somehow-calendar/">demo:</a></h4>

`npm i somehow-calendar`

<!-- ![image](https://user-images.githubusercontent.com/399657/50604609-81a89f00-0e8d-11e9-926d-5ffa4b39f4d3.png) -->

### Months

render month-calendars from the start to end dates, inclusive

```js
const calendar = require('somehow-calendar')
let el = document.querySelector('body')

let cal = calendar.months('april 1st 2019', 'june 3rd 2019')
// highlight a date-range
cal.color('june 5th 2019', 'june 8th 2019', '#cc7066')

//cal.underline(date, color) works too

el.innerHTML = cal.build()
```

### Timeline

a horizontal timeline separated by months

```js
let cal = calendar.months(start, end)
cal.color('june 14th 2019', 'June 23rd 2019', '#cc7066')

document.querySelector('#results').innerHTML = cal.build()
```

![image](https://user-images.githubusercontent.com/399657/56083660-03e22100-5df6-11e9-9326-943571775c95.png)

<!-- ![image](https://user-images.githubusercontent.com/399657/50697138-682f6080-100f-11e9-8b17-cd80640a86ee.png) -->

### Output

by default, it returns html strings, but...

output is handled with Jason Miller's [htm](https://github.com/developit/htm) package, so it can output to a React template, or anything:

```js
const calendar = require('somehow-calendar')
const react = require('react')

let c = calendar.months('2019', '2020')
c.bind(react.createElement) // anything
```

### See also:

- [somehow](https://github.com/spencermountain/somehow) - partner svg dataviz
- [d3-time](https://github.com/d3/d3-time)
  MIT
