// import { onMount, setContext } from 'svelte'

// onMount(() => {
//   console.log('mount')
// })

// const getDates = function () {
//   setContext('dates', { fun: true })
// }

import { setContext } from 'svelte'
import { writable } from 'svelte/store'
// import Name from './Name.svelte'

let dates = writable({})
// setContext('dates', dates)

// function changeName(){
//   $name = 'Mike';
// }
