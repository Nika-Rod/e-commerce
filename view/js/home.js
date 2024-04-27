const carouselItems = document.querySelectorAll(".carousel-image");
const proxBtn = document.getElementById("proxBtn");
const prevBtn = document.getElementById("prevBtn");
let index = 0;

proxBtn.addEventListener("click", () => {
    carouselItems[index].classList.add("d-none"); 
    index = (index + 1) % carouselItems.length; 
    carouselItems[index].classList.remove("d-none"); 
});

prevBtn.addEventListener("click", () => {
    carouselItems[index].classList.add("d-none"); 
    index = (index - 1 + carouselItems.length) % carouselItems.length; 
    carouselItems[index].classList.remove("d-none"); 
});

fun