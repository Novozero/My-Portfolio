const techStackImg = document.querySelector(".tech-stack-img");
const techStackGrid = document.getElementById("toggleContainer");
let isOpen = false;

const toggle = () => {
  if (!isOpen) {
    techStackGrid.classList.add("show");
    techStackGrid.style.opacity = "1";
  } else {
    techStackGrid.style.opacity = "0";
    setTimeout(() => techStackGrid.classList.remove("show"), 1000);
  }
  isOpen = !isOpen;
};

techStackImg.addEventListener("click", toggle);


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