<script>
  import spacetime from 'spacetime'
  import Month from './Month.svelte'
  import './getDates.js'
  export let date = ''
  let start = null //date.startOf('quarter').minus(1, 'second')
  let months = null //start.every('month', date.endOf('quarter'))

  // set default days object
  import { writable } from 'svelte/store'
  import { setContext, beforeUpdate } from 'svelte'
  export let days = writable({})
  setContext('days', days)

  beforeUpdate(() => {
    date = spacetime(date)
    start = date.startOf('quarter').minus(1, 'second')
    months = start.every('month', date.endOf('quarter'))
  })
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

<div class="row">
  {#each months as m}
    <div class="gap">
      <Month date={m}>
        <slot />
      </Month>
    </div>
  {/each}
</div>
