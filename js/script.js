window.addEventListener("load", ()=>{
    document.getElementById("loader").remove()
})

// control des sliders 
const left_btn = document.querySelector(".left")
const right_btn = document.querySelector(".right")
const elem = document.querySelector("#home .info-contain .val-contain .slide")
const nbrChild = elem.children.length - 1
console.log(nbrChild)
let position = 0
left_btn.addEventListener("click", (e)=>{
    e.preventDefault()
    if(position<0) position += 100
    elem.style.transform = `translateX(${position}%)`
})
right_btn.addEventListener("click", (e)=>{
    e.preventDefault()
    if (position>-100*nbrChild)position -= 100
    elem.style.transform = `translateX(${position}%)`
})