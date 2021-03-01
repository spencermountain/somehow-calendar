<script>
  import spacetime from 'spacetime'
  import { onMount, beforeUpdate, onDestroy } from 'svelte'
  import calcMonth from './_calc'
  import { getContext, setContext } from 'svelte'

  import { writable } from 'svelte/store'
  let days = getContext('days')
  if (!days) {
    days = writable({})
    setContext('days', days)
  }

  export let date = ''
  export let onClick = () => {}
  export let showToday = true
  let today = spacetime.now()

  // render methods
  const isToday = function(d) {
    return showToday && d.isSame(today, 'day')
  }
  const isWeekend = function(d) {
    let day = d.day()
    return day === 0 || day === 1
  }

  $: getWeeks = () => {
    let weeks = calcMonth(date) || []
    return weeks.map(w => {
      return w.map(day => {
        day.iso = day.format('iso-short')
        day.color = 'none'
        if ($days[day.iso]) {
          day.color = $days[day.iso].color || 'none'
        }
        day.num = day.format('{date}')
        return day
      })
    })
  }
  beforeUpdate(() => {
    date = spacetime(date)
  })
</script>

<style>
  .monthName {
    font-size: 1rem;
    color: #838b91;
    text-align: right;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    margin-right: 0.7rem;
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
    .monthName {
      font-size: 0.7rem;
    }
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

<div class="month" style="width:100%;">
  <div class="monthName">{date.format('month')}</div>
  {#each getWeeks() as w}
    <div class="week">
      {#each w as d}
        {#if d.isSame(date, 'month')}
          <div
            class="day square"
            class:today={isToday(d)}
            class:weekend={isWeekend(d)}
            class:highlight={d.color !== 'none'}
            on:click={() => onClick(d)}
            style={'background-color:' + d.color}
            title={d.iso}>
            <div class="num">{d.num}</div>
          </div>
        {:else}
          <div class="day noday square">{' '}</div>
        {/if}
      {/each}
    </div>
  {/each}
</div>
<slot />
