<div align="center">
  <div>svelte calendar visualization</div>
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

month-centered calendars from start to end dates, inclusive

```html
<script>
  import { Calendar, Day } from './src'
</script>

<Calendar start="march 1 2012" end="June 2nd 2020">
  <Day date="march 28th" color="blue" />
</Calendar>
```

![image](https://user-images.githubusercontent.com/399657/66760690-9b413300-ee70-11e9-8245-94f590bac34e.png)

### See also:

- [somehow](https://github.com/spencermountain/somehow) - partner svg dataviz
- [d3-time](https://github.com/d3/d3-time)
  MIT
