const nav = document.querySelector('.nav')

let isActive = true

let btn = document.getElementById('btn')
btn.addEventListener('click',()=>{
  if(isActive){
    nav.classList.remove('active')
    isActive = false
  }else {
    nav.classList.add('active')
    isActive = true
  }
})