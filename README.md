# spacetime-calendar
renders html calendars using [spacetime](https://github.com/spencermountain/spacetime) date library

```js
import Calendar from 'spacetime-calendar'
import spacetime from 'spacetime'

let d = spacetime.now()
let c = new Calendar(d)
let html = c.month()

document.querySelector('#stage').innerHTML = html
```

by default, it produces html strings, but...

output is handled with Jason Miller's [htm](https://github.com/developit/htm) package, so it can output to a React template, or anything:
```js
const Calendar = require('spacetime-calendar')
const react = require('react')

let c = new Calendar()
c.bind(react.createElement) // anything
c.month()

```


MIT
