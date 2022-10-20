const btns = document.querySelectorAll('.btn')
btns.forEach(e => {
  e.addEventListener('click',()=>{
    e.parentNode.classList.toggle("active")
    if (e.innerHTML !== `<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>`) {
      e.innerHTML = `<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>`
    } else {
      e.innerHTML = `<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>`
    }
  })
})