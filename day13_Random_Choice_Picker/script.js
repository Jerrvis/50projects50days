let text = document.getElementById('textarea');
let tags = document.getElementById('tags');

text.addEventListener('keyup', e => {
  createTags(e.target.value)

  if (e.key === 'Enter'){
    setTimeout(()=>{
      e.target.value = ''
    })
    randomSelect()
  }
  
})

function createTags(input) {
  const NewTags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
  
  tags.innerHTML = ''
  
  NewTags.forEach(tag => {
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tags.appendChild(tagEl)
  });
}

function randomSelect(){
  const times = 30

  const interval = setInterval(()=>{
    const randomTag = pickRandomTag()
    
    activeTag(randomTag)

    setTimeout(()=>{
      unactiveTag(randomTag)
    },100)
  },100)

  setTimeout(()=>{
    clearInterval(interval)

    setTimeout(()=>{

      const randomTag = pickRandomTag()
    
      activeTag(randomTag)
    },100)
  },100 * times)
}

function pickRandomTag() {
  const rtag = document.querySelectorAll('.tag')
  return rtag[Math.floor(Math.random()*rtag.length)]
}

function activeTag(tag){
  tag.classList.add('active')
}

function unactiveTag(tag){
  tag.classList.remove('active')
}