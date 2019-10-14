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

### Months
a month-centered calendars from start to end dates, inclusive

```js
const calendar = require('somehow-calendar')
let cal = calendar.months('Jan 1 2019', 'Dec 28 2019', { monthName: false })
cal.width('20px').height('20px')
// highlight a particular range
cal.color('june 14th 2019', 'June 23rd 2019', '#cc7066')
document.querySelector('body') = cal.build()
```

![image](https://user-images.githubusercontent.com/399657/66760690-9b413300-ee70-11e9-8245-94f590bac34e.png)

### Weeks
week-centered calendar from, to specific dates
```js
const calendar = require('somehow-calendar')
let cal = calendar.months('Jan 1 2019', 'Dec 28 2019', { monthName: false })
cal.width('20px').height('20px')
// label specific dates
cal.label('Mar 1 2019', 'M')
// underline a particular range
cal.color('dec 14th 2019', 'dec 28rd 2019', '#cc7066')

document.querySelector('body') = cal.build()
```

![image](https://user-images.githubusercontent.com/399657/66760728-aac07c00-ee70-11e9-8af7-6c5febee9732.png)

### Timeline
a horizontal calendar separated by months

```js
const calendar = require('somehow-calendar')
let cal = calendar.timeline('Jan 1 2019', 'Dec 28 2019', { monthName: false })
cal.width('20px').height('20px')
document.querySelector('body') = cal.build()
```

![image](https://user-images.githubusercontent.com/399657/66760750-b8760180-ee70-11e9-8ef9-fd2c4089f6f3.png)

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
