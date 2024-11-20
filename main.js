document.addEventListener('DOMContentLoaded', function(){
  const slideButton = document.getElementById("slideButton")
  const header = document.querySelector('header')
  const arrow = document.getElementById('arrow')

  slideButton.addEventListener('click', ()=>{
      header.classList.toggle("open")
      slideButton.classList.toggle("open")
      arrow.classList.toggle("open")
  })
})