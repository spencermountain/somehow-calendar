<script>
  import spacetime from 'spacetime'
  import Month from './Month.svelte'
  export let date = ''
  export let days = {}
  export let showToday = true
  date = spacetime(date)
  let start = date.startOf('month')
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
  <div class="gap">
    <Month date={start} {days} {showToday} />
  </div>
</div>
