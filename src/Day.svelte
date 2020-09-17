<script>
  import { days } from './stores'
  import spacetime from 'spacetime'
  import c from 'spencer-color'
  export let date = ''
  export let color = 'blue'
  export let label = ''

  color = c.colors[color] || color
  date = spacetime(date)
  let iso = date.format('iso-short')
  days.update(obj => {
    obj[iso] = {
      color: color,
      label: label
    }
    return obj
  })
</script>
