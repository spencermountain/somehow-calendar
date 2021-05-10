<script>
  import spacetime from 'spacetime'
  import fmtDays from './_fmtDays'
  export let days = {}
  export let start = ''
  export let end = ''
  export let onClick = () => {}
  export let showToday = true
  let today = spacetime.now()
  let names = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

  start = spacetime(start)
  end = spacetime(end)

  const getWeeks = function (start, end) {
    start = start.day('monday', false).minus(1, 'second')
    end = end.day('sunday', true).plus(1, 'second')
    let days = start.every('day', end)
    let weeks = [[]]
    days.forEach(d => {
      if (d.dayName() === 'monday') {
        weeks.push([])
      }
      weeks[weeks.length - 1].push(d)
      console.log(d.dayName())
    })
    console.log(weeks)
    return weeks
  }

  // render methods
  const isToday = function (d) {
    return showToday && d.isSame(today, 'day')
  }
  const isWeekend = function (d) {
    let day = d.dayName()
    return day === 'saturday' || day === 'sunday'
  }

  $: setup = getWeeks(start, end) || []
  console.log(setup)
  $: colors = fmtDays(days)
  $: weeks = setup.map(w => {
    return w.map(day => {
      let iso = day.format('iso-short')
      let obj = {
        iso: iso,
        color: colors[iso] || 'none',
        num: day.format('{date}'),
        isToday: isToday(day),
        isWeekend: isWeekend(day),
      }
      return obj
    })
  })
</script>

<div class="month" style="width:100%;">
  <div class="week">
    {#each names as name}
      <div class="dayName">
        {name}
      </div>
    {/each}
  </div>
  {#each weeks as w}
    <div class="week">
      {#each w as d}
        <!-- {#if d.inMonth} -->
        <div
          class="day square"
          class:today={d.isToday}
          class:weekend={d.isWeekend}
          class:highlight={d.color !== 'none'}
          on:click={() => onClick(d)}
          style={'background-color:' + d.color}
          title={d.iso}
        >
          <div class="num">{d.num}</div>
        </div>
      {/each}
    </div>
  {/each}
</div>
<slot />

<style>
  .dayName {
    font-size: 0.7rem;
    color: #838b91;
    text-align: center;
  }
  .week {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  }
  .day {
    position: relative;
    flex: 1;
    margin: 0.5%;
    border-radius: 3px;
    box-shadow: 2px 1px 6px 0px rgba(0, 0, 0, 0.2);
    min-width: 13px;
    min-height: 12px;
    box-sizing: border-box;
    font-size: 9px;
    color: #a3a5a5;
    overflow: hidden;
    z-index: 1;
    cursor: pointer;
  }
  .day:hover {
    box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, 0.2);
  }
  .highlight {
    box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, 0.4);
  }
  .square {
    padding-top: 15%; /* 1:1 Aspect Ratio */
    position: relative; /* If you want text inside of it */
  }
  .noday {
    box-shadow: none !important;
  }
  .today {
    background-color: lightsteelblue;
    border: 1px solid lightsteelblue !important;
    color: white;
  }
  .num {
    position: absolute;
    z-index: 4;
    font-size: 14px;
    color: #949a9e;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    top: 0px;
    text-align: center;
    margin: auto;
    /* padding-top: 40%; */
    /* margin-left: 5%; */
    opacity: 0;
    /* transition: opacity 0.1s; */
    cursor: pointer;
  }
  .num:hover {
    opacity: 0.8;
  }
  .weekend {
    background-color: #f0f0f0;
  }
  @media only screen and (max-width: 400px) {
    .day {
      border-radius: 2px;
      margin: 0.5%;
      box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.2);
    }
    .num {
      display: none;
    }
  }
</style>
