const boxes = document.querySelectorAll('.box')

const checkbox = ()=>{
  const triggerBottom = window.innerHeight / 5 * 4

  boxes.forEach(box => {
    // 盒子到视窗顶部的距离
    const toTop = box.getBoundingClientRect().top
    if (toTop < triggerBottom){
      box.classList.add('show')
    }else {
      box.classList.remove('show')
    }
  })
}

window.addEventListener('scroll',checkbox)

checkbox()