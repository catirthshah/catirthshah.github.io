const items=document.querySelectorAll(".menu-item")

items.forEach(item=>{
item.addEventListener("mouseenter",()=>{

document.querySelectorAll(".menu-item")
.forEach(i=>i.classList.remove("active"))

document.querySelectorAll(".tab-content")
.forEach(c=>c.classList.remove("active"))

item.classList.add("active")

document
.getElementById(item.dataset.tab)
.classList.add("active")

})
})


const slides=document.querySelectorAll(".slide")

let index=0

function showSlide(){

slides.forEach(s=>s.classList.remove("active"))

index++

if(index>=slides.length){
index=0
}

slides[index].classList.add("active")

}

setInterval(showSlide,4000)
