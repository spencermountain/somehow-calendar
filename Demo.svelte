<script>
  import { Calendar, Day } from './src'
</script>

<div>
  <div>
    <a href="https://github.com/spencermountain/somehow-calendar">
      somehow-calendar
    </a>
    <span class="f08 grey">- its a svelte html calendar using spacetime.</span>
  </div>
  <div class="m4">

    <Calendar
      start="march 1 2020"
      end="June 2nd 2020"
      align="row"
      width="20rem">
      <Day date="march 28th" color="blue" />
    </Calendar>
  </div>
  <hr />
  <div class="m4" />
</div>
