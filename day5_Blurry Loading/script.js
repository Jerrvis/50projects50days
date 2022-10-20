let bg = document.querySelector('.bg')
let load = document.querySelector('.load')

// count 0~100
let count = 0

let timer = setInterval(()=>{
  bg.style.filter = `blur(${30 - 30 * count/100}px)`
  load.style.opacity = `${1 - count/100}`
  load.innerText = `${count}%`
  count += 1
  console.log(count)
  if (count === 100) clearInterval(timer)
},30)