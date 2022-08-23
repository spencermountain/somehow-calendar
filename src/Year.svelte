<script>
  import spacetime from 'spacetime'
  import Month from './Month.svelte'
  export let date = ''
  export let year = spacetime.now().year()
  export let days = {}
  export let tops = {}
  export let bottoms = {}
  export let showToday = true
  date = spacetime(date)
  $: quarters = () => {
    let start = spacetime.now().year(year).startOf('year') //.minus(1, 'second')
    let months = start.every('month', start.endOf('year'))
    return [months.slice(0, 3), months.slice(3, 6), months.slice(6, 9), months.slice(9, 12)]
  }
</script>

<div class="col">
  {#each quarters() as quarter}
    <div class="row">
      {#each quarter as m}
        <div class="gap">
          <Month date={m} {days} {showToday} {tops} {bottoms} />
        </div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  }
  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: nowrap;
    align-self: stretch;
  }
  .gap {
    margin: 10px;
    flex: 1;
    width: 100%;
  }
  @media only screen and (max-width: 340px) {
    .row {
      flex-direction: column;
      margin-left: 0px;
      margin-right: 20px;
    }
  }
</style>
