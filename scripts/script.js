
let initial = document.querySelector('.carouselItem:first-child');
    initial.style.display = 'inline'
    document.getElementById("carouselList").appendChild(initial)  

setInterval(() => {
    let first = document.querySelector('.carouselItem:first-child');
    first.style.display = 'inline'
    document.getElementById("carouselList").appendChild(first)        
}, 3000);