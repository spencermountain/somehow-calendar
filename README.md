<div align="center">
  <div><b>somehow-calendar</b></div>
  <img src="https://user-images.githubusercontent.com/399657/68222691-6597f180-ffb9-11e9-8a32-a7f38aa8bded.png"/>
  <div>— part of <a href="https://github.com/spencermountain/somehow">somehow</a> —</div>
  <div>WIP svelte infographics</div>
  <div align="center">
    <sub>
      by
      <a href="https://spencermounta.in/">Spencer Kelly</a> 
    </sub>
  </div>
</div>
<div align="right">
  <a href="https://npmjs.org/package/somehow-calendar">
    <img src="https://img.shields.io/npm/v/somehow-calendar.svg?style=flat-square" />
  </a>
</div>
<img height="25px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

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
