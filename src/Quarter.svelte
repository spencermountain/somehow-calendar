<script>
  import spacetime from 'spacetime'
  import Month from './Month.svelte'
  export let date = ''
  export let days = {}
  export let showToday = true
  date = spacetime(date)
  let start = date.startOf('quarter').minus(1, 'second')
  let months = start.every('month', date.endOf('quarter'))
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
      <Month date={m} {days} {showToday}>
        <slot />
      </Month>
    </div>
  {/each}
</div>
