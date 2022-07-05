let step = 0
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
prev.onclick = function () {
  stepChange(-1)
  changeBtn()
}

next.onclick = function () {
  stepChange(1)
  changeBtn()
}

function stepChange(ad=1){
  // prev
  if (step > 0 && ad < 1){
    step -= 1
    let query = document.querySelector('.progress')
    query.setAttribute('style',`width: ${step*20}%`)
    let spot = document.querySelectorAll('.spot')
    spot[step+1].classList.remove('active')
  }else if (step < 3 && ad >= 1){
    step += 1
    let query = document.querySelector('.progress')
    query.setAttribute('style',`width: ${step*20}%`)
    let spot = document.querySelectorAll('.spot')
    spot[step].classList.add('active')
  }
}

function changeBtn(){
  if (step === 0){
    prev.disabled = true
    prev.style.cursor = 'not-allowed'
  }else if (step === 3){
    next.disabled = true
    next.style.cursor = 'not-allowed'
  }else {
    prev.disabled = false
    next.disabled = false
    prev.style.cursor = 'pointer'
    next.style.cursor = 'pointer'
  }
}