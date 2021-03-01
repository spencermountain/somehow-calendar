<script>
  import { Year, Day, Month, Quarter } from './src'
  let arr = ['march 28', 'march 23', 'march 22']
  let color = 'blue'
  let month = 'feb 2021'
  // setTimeout(() => {
  //   color = 'orange'
  //   month = 'july 2021'
  //   arr = ['feb 2', 'march 20', 'march 23', 'july 2']
  // }, 2000)
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
  .container {
    max-width: 900px;
    width: 100%;
  }
  .m4 {
    margin: 4rem;
  }
</style>

<div class="row">
  <div class="m4">
    <a href="https://github.com/spencermountain/somehow-calendar">
      somehow-calendar
    </a>
    <span class="f08 grey">- a svelte html calendar.</span>
  </div>
  <div class="container m4">
    <Quarter date={month}>
      {#each arr as d}
        <Day date={d} {color} />
      {/each}
    </Quarter>
  </div>
</div>
