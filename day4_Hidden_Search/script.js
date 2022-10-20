let btn = document.getElementById('btn')
let c = document.querySelector('.container')

let active = false
btn.addEventListener('click', () => {
  if (active) {
    c.classList.remove('active')
    active = false
  }else {
    c.classList.add('active')
    active = true
  }
})