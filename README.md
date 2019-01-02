<div align="center">
  <div>sometime</div>
  <div>WIP</div>
  <div><a href="https://spencermounta.in/sometime/">demo</a></div>
  <a href="https://npmjs.org/package/sometime">
    <img src="https://img.shields.io/npm/v/sometime.svg?style=flat-square" />
  </a>
  <a href="https://unpkg.com/sometime">
    <img src="https://badge-size.herokuapp.com/spencermountain/sometime/master/builds/sometime.min.js" />
  </a>
</div>

**work-in-progress**

renders html calendars using [spacetime](https://github.com/spencermountain/spacetime) date library

![image](https://user-images.githubusercontent.com/399657/50604609-81a89f00-0e8d-11e9-926d-5ffa4b39f4d3.png)

```js
const sometime = require('sometime')

let c = sometime.year.weekAlign('2019')
c.color('june 5th 2019', 'june 8th 2019', 'red')
document.querySelector('body').innerHTML = c.build()
```

by default, it returns html strings, but...

output is handled with Jason Miller's [htm](https://github.com/developit/htm) package, so it can output to a React template, or anything:
```js
const sometime = require('sometime')
const react = require('react')

let c = sometime.year.leftAlign('2019')
c.bind(react.createElement) // anything
```

MIT
