
function setSlide() {
    let divImg = document.querySelectorAll("carousel-image");
    
    
}

function collapse() {
    const numberPhone = document.querySelector('.number-phone');

    if (numberPhone.classList.contains('show')) {
        numberPhone.classList.remove('show');
        numberPhone.style.height = '0'; 
    } else {
        numberPhone.style.height = 'auto'; 
        let height = numberPhone.scrollHeight + 'px'; 
        numberPhone.style.height = '0'; 
        setTimeout(() => { 
            numberPhone.classList.add('show');
            numberPhone.style.height = height;
        }, 10);
    }
}

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const data = [
  { title: "Exemplo", subtitle: "Produtos Lindos. Super Recomendo!", description: "Fulana" },
  { title: "Title 2", subtitle: "Subtitle 2", description: "Description 2" },
  { title: "Title 3", subtitle: "Subtitle 3", description: "Description 3" },
  { title: "Title 4", subtitle: "Subtitle 4", description: "Description 4" },
  { title: "Title 5", subtitle: "Subtitle 5", description: "Description 5" }
];

const listElement = $(".list");
listElement.innerHTML = "";

data.forEach((item, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <h4>${item.title}</h4>
    <span>${item.subtitle}</span>
    <p>${item.description}</p>
  `;
  listElement.appendChild(li);
});


const elements = $$(".list li");

elements.forEach((el, index) => {
  if (index === 0) el.classList.add("hide");
  else if (index === 1) el.classList.add("prev");
  else if (index === 2) el.classList.add("act");
  else if (index === 3) el.classList.add("next");
  else if (index === 4) el.classList.add("new-next");
});

let currentIndex = 0; 

function updateClasses() {
  elements.forEach((el, index) => {
    el.classList.remove("hide", "prev", "act", "next", "new-next");

    if (index === (currentIndex - 2 + elements.length) % elements.length) {
      el.classList.add("hide");
    } else if (index === (currentIndex - 1 + elements.length) % elements.length) {
      el.classList.add("prev");
    } else if (index === currentIndex) {
      el.classList.add("act");
    } else if (index === (currentIndex + 1) % elements.length) {
      el.classList.add("next");
    } else if (index === (currentIndex + 2) % elements.length) {
      el.classList.add("new-next");
    }
  });
}

function next() {
  currentIndex = (currentIndex + 1) % elements.length;
  updateClasses();
}

function prev() {
  currentIndex = (currentIndex - 1 + elements.length) % elements.length;
  updateClasses();
}

const slide = element => {
  if (element.classList.contains('next')) {
    next();
  } else if (element.classList.contains('prev')) {
    prev();
  }
}

const slider = $(".list"),
      swipe = new Hammer($(".swipe"));

slider.onclick = event => {
  slide(event.target);
}

swipe.on("swipeleft", ev => {
  next();
});

swipe.on("swiperight", ev => {
  prev();
});

updateClasses();







