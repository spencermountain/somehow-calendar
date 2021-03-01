<script>
  import spacetime from 'spacetime'
  import Month from './Month.svelte'
  export let date = ''
  let quarters = []

  // set default days object
  import { writable } from 'svelte/store'
  import { setContext, beforeUpdate } from 'svelte'
  export let days = writable({})
  setContext('days', days)

  beforeUpdate(() => {
    date = spacetime(date)
    let start = date.startOf('year').minus(1, 'second')
    let months = start.every('month', date.endOf('year'))
    quarters = [
      months.slice(0, 3),
      months.slice(3, 6),
      months.slice(6, 9),
      months.slice(9, 12)
    ]
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
  {#each quarters as quarter}
    <div class="row">
      {#each quarter as m}
        <div class="gap">
          <Month date={m}>
            <slot />
          </Month>
        </div>
      {/each}
    </div>
  {/each}
</div>
