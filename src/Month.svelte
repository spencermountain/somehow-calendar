<script>
  import spacetime from 'spacetime'
  export let month = ''
  export let width = '100%'
  let today = spacetime.now()
  month = spacetime(month)
  let start = month
    .startOf('month')
    .startOf('week')
    .minus(1, 'second')
  let end = month.endOf('month').endOf('week')
  let weeks = start.every('week', end)
  weeks = weeks.map(d => {
    let end = d.endOf('week').add(1, 'second')
    return d.every('day', end)
  })
  spacetime.extend({
    isWeekend: function() {
      let day = this.day()
      return day === 0 || day === 1
    },
    isToday: function() {
      return this.isSame(today, 'day')
    }
  })
</script>

<style>
  .month {
    margin: 1rem;
  }
  .monthName {
    font-size: 0.53rem;
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
    flex: 1;
    min-width: 12px;
    min-height: 12px;
    border: 1px solid #dedbd7;
    box-sizing: border-box;
    border-radius: 0px;
    font-size: 9px;
    color: #a3a5a5;
    overflow: hidden;
  }
  .square {
    padding-top: 15%; /* 1:1 Aspect Ratio */
    position: relative; /* If you want text inside of it */
  }
  .noday {
    border: 1px solid rgba(222, 219, 215, 0);
  }
  .today {
    background-color: lightsteelblue;
    border: 1px solid lightsteelblue !important;
    color: white;
  }
  .weekend {
    background-color: #f0f0f0;
  }
</style>

<div class="month" style="width:{width};">
  <div class="monthName">{month.format('month')}</div>
  {#each weeks as w}
    <div class="week">
      {#each w as d}
        {#if d.isSame(month, 'month')}
          <div
            class="day square"
            class:weekend={d.isWeekend()}
            class:today={d.isToday()}
            title={d.format()}>
            <!-- {d.format('date')} -->
          </div>
        {:else}
          <div class="day noday square">{' '}</div>
        {/if}
      {/each}
    </div>
  {/each}
</div>
