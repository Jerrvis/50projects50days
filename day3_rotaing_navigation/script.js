const li = document.querySelectorAll('.mli')
const circle = document.querySelector('.circle')
const container = document.querySelector('.container')
const menu = document.querySelector('.menu')


let btn = document.getElementById('menu_btn')
btn.addEventListener('click', () => {
  circle.classList.add('show_circle')
  container.classList.add('show_container')
  menu.classList.remove('hidden')
  menu.classList.add('active')
  console.log(menu.classList)
})

btn = document.getElementById('fork_btn')
btn.addEventListener('click', () => {
  circle.classList.remove('show_circle')
  container.classList.remove('show_container')
  menu.classList.add('hidden')
  menu.classList.remove('active')
  console.log(menu.classList)

})