<script>
  import { Year, Day, Month, Quarter } from './src'
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
    <Quarter date="march 2021">
      <Day date="jan 28th 2021" />
      <Day date="feb 20th 2021" />
      <Day date="march 28th 2021" color="orange" />
    </Quarter>
  </div>
  <div class="container m4">
    <Quarter date="march 2021">
      <Day date="jan 21th 2021" />
      <Day date="feb 2th 2021" />
      <Day date="march 8th 2021" color="red" />
    </Quarter>
  </div>
</div>
