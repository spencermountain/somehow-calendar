<div align="center">
  <div>calendar visualization</div>
  <div>
    <img src="https://cloud.githubusercontent.com/assets/399657/23590290/ede73772-01aa-11e7-8915-181ef21027bc.png" />
  </div>
  <a href="https://npmjs.org/package/sometime">
    <img src="https://img.shields.io/npm/v/sometime.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/sometime">
    <img src="https://badge-size.herokuapp.com/spencermountain/sometime/master/builds/sometime.min.js" />
  </a>
</div>

**work-in-progress**


renders html calendars using [spacetime](https://github.com/spencermountain/spacetime) date library

<h4><a href="https://spencermounta.in/sometime/">demo</a></h4>

![image](https://user-images.githubusercontent.com/399657/50604609-81a89f00-0e8d-11e9-926d-5ffa4b39f4d3.png)

```js
const sometime = require('sometime')
let el = document.querySelector('body')

let cal = sometime.year.weekAlign('2019')
cal.color('june 5th 2019', 'june 8th 2019', 'red')
el.innerHTML = cal.build()
```

**byMonth()** renders a typical calendar-representation:
```js
let cal = sometime.quarter.byMonth('june 1 2019')
cal.color('june 5th 2019', 'june 8th 2019', 'red')
el.innerHTML = cal.build()
```

![image](https://user-images.githubusercontent.com/399657/50697138-682f6080-100f-11e9-8b17-cd80640a86ee.png)

### Output
by default, it returns html strings, but...

output is handled with Jason Miller's [htm](https://github.com/developit/htm) package, so it can output to a React template, or anything:
```js
const sometime = require('sometime')
const react = require('react')

let c = sometime.year.leftAlign('2019')
c.bind(react.createElement) // anything
```



### See also:
* [somehow](https://github.com/spencermountain/somehow) - partner svg dataviz
* [d3-time](https://github.com/d3/d3-time)
MIT
