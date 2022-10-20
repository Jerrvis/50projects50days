const container = document.querySelector('.container')

const left = document.getElementsByClassName('left')[0]
const right = document.getElementsByClassName('right')[0]

left.addEventListener('mouseenter',()=>container.classList.add('hover-left'))
left.addEventListener('mouseleave',()=>container.classList.remove('hover-left'))

right.addEventListener('mouseenter',()=>container.classList.add('hover-right'))
right.addEventListener('mouseleave',()=>container.classList.remove('hover-right'))