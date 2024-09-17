const techStackImg = document.querySelector(".tech-stack-img")
const techStackGrid = document.getElementById("toggleContainer")

const toggle = (e) =>{
    e.classList.toggle("tech-stack-grid-container")
}

techStackImg.addEventListener("click", ()=>{
    toggle(techStackGrid)
})