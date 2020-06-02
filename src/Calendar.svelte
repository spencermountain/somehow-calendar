<script>
  import spacetime from 'spacetime'
  import { Month } from './'
  export let start = ''
  export let end = ''
  export let align = 'row'
  export let width = '100%'
  start = spacetime(start)
  end = spacetime(end || null)
  let months = start.every('month', end)
</script>

<style>
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    align-self: stretch;
  }
  .col {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    align-self: stretch;
  }
</style>

<div
  style="width:{width};"
  class:col={align === 'col'}
  class:row={align === 'row'}>
  {#each months as month}
    <Month {month} {width} />
  {/each}
  <div />
</div>
