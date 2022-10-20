const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.map(sound=>{
  const btn = document.createElement('button')
  btn.innerText = sound
  btn.addEventListener('click',()=>{
    stopSong()
    document.getElementById(sound).play()
  })
  document.getElementsByClassName('buttons')[0].appendChild(btn)
})

function stopSong(){
  sounds.forEach(sound => {
    const sDOM = document.getElementById(sound)
    sDOM.pause()
    sDOM.currentTime = 0
  });
}