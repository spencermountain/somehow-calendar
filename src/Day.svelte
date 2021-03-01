<script>
  // import { days } from './stores'
  import { onDestroy } from 'svelte'

  import { onMount, afterUpdate } from 'svelte'
  import spacetime from 'spacetime'
  import c from 'spencer-color'
  export let date = ''
  export let color = 'blue'
  export let label = ''
  let old = null

  import { getContext } from 'svelte'
  let days = getContext('days')

  const setDate = function() {
    color = c.colors[color] || color
    date = spacetime(date)
    let iso = date.format('iso-short')
    days.update(obj => {
      if (old) {
        obj[old] = {}
      }
      obj[iso] = {
        color: color,
        label: label
      }
      return obj
    })
    old = iso
  }
  afterUpdate(() => {
    setDate()
  })
  onDestroy(() => {
    $days[old] = null
    $days = $days
  })
</script>
