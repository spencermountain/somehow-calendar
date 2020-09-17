<script>
  import { Month, Day, Range } from './src'
</script>

<style>
  .container {
    max-width: 500px;
  }
</style>

<div>
  <div>
    <a href="https://github.com/spencermountain/somehow-calendar">
      somehow-calendar
    </a>
    <span class="f08 grey">- its a svelte html calendar using spacetime.</span>
  </div>
  <div class="container">
    <Month date="march 2020">
      <Day date="march 28th" />
      <!-- <Range start="march 2nd" end="march 5th" color="red" /> -->
    </Month>
  </div>
</div>
