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
