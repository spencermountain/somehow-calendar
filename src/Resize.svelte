<script>
  import spacetime from 'spacetime'
  import Month from './Month.svelte'
  export let date = ''
  export let start = ''
  export let end = ''
  export let days = {}
  export let showToday = true
  start = start || date
  $: theEnd = spacetime(end)
  $: theStart = spacetime(start)
  $: diff = theStart.diff(theEnd)

  const inGroupsOf = function(arr, size) {
    let slices = []
    let current = []
    arr.forEach(function(e) {
      if (current.length < size) {
        current.push(e)
      } else {
        slices.push(current)
        current = [e]
      }
    })
    slices.push(current)
    return slices
  }

  $: quarters = () => {
    if (theStart.isSame('month', theEnd)) {
      return [[theStart]]
    } else {
      let s = theStart.startOf('quarter').minus(1, 'second')
      let e = theEnd.endOf('quarter')
      let months = s.every('month', e)
      return inGroupsOf(months, 3)
    }
    return [[theStart]]
  }
</script>

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

<div class="col">
  {#each quarters() as quarter}
    <div class="row">
      {#each quarter as m}
        <div class="gap">
          <Month date={m} {days} {showToday} />
        </div>
      {/each}
    </div>
  {/each}
</div>
