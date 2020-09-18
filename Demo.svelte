<script>
  import { Year, Day, Quarter } from './src'
</script>

<style>
  .container {
    max-width: 1200px;
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
    <Quarter date="march 2020">
      <Day date="march 28th" />
    </Quarter>
  </div>
</div>
