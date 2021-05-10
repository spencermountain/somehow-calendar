<script>
  import { Year, Month, Quarter, Resize, WeekList } from './src'
  let arr = ['march 28', 'march 23', 'march 22']
  let color = 'blue'
  let start = 'jan 8 2021'
  let end = 'mar 28 2021'

  let days = {
    'feb 1': 'blue',
    'feb 28': 'blue',
    'march 28': 'blue',
    'march 23': 'red',
    'march 22': 'blue',
  }
  setTimeout(() => {
    end = 'june 28 2021'
    days = {
      'feb 2': 'orange',
      'feb 18': 'blue',
      'feb 28': 'green',
      'march 28': 'blue',
      'march 22': 'blue',
      'march 22 2022': 'blue',
    }
  }, 2000)
</script>

<div class="row">
  <div class="m4">
    <a href="https://github.com/spencermountain/somehow-calendar"> somehow-calendar </a>
    <span class="f08 grey">- a svelte html calendar.</span>
  </div>
  <div class="container m4" style="width:400px;">
    <WeekList {start} {end} {days} />
    <!-- <Resize date={month} {days} /> -->
  </div>
</div>

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
