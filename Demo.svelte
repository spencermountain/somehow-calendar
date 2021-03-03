<script>
  import { Year, Month, Quarter } from './src'
  let arr = ['march 28', 'march 23', 'march 22']
  let color = 'blue'
  let month = 'feb 2021'

  let days = {
    'feb 1': 'blue',
    'feb 28': 'blue',
    'march 28': 'blue',
    'march 23': 'red',
    'march 22': 'blue'
  }
  setTimeout(() => {
    days = {
      'feb 2': 'orange',
      'feb 18': 'blue',
      'feb 28': 'green',
      'march 28': 'blue',
      'march 23': 'red',
      'march 22': 'blue'
    }
    console.log('change')
  }, 2000)
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
    <Quarter date={month} {days} />
  </div>
</div>
