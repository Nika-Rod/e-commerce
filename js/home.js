
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


const data = [
  { title: "Title 1", subtitle: "Subtitle 1", description: "Description 1" },
  { title: "Title 2", subtitle: "Subtitle 2", description: "Description 2" },
  { title: "Title 3", subtitle: "Subtitle 3", description: "Description 3" },
  { title: "Title 4", subtitle: "Subtitle 4", description: "Description 4" },
  { title: "Title 5", subtitle: "Subtitle 5", description: "Description 5" }
];

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);



let currentIndex = 2; // Assuming the starting 'act' element is at index 2
const elements = $$(".list li");

function updateClasses() {
  elements.forEach((el, index) => {
    el.classList.remove("hide", "prev", "act", "next", "new-next");

    if (index === currentIndex - 2) {
      el.classList.add("hide");
    } else if (index === currentIndex - 1) {
      el.classList.add("prev");
    } else if (index === currentIndex) {
      el.classList.add("act");
    } else if (index === currentIndex + 1) {
      el.classList.add("next");
    } else if (index === currentIndex + 2) {
      el.classList.add("new-next");
    }
  });

  // Handle edge cases for circular navigation
  if (currentIndex - 2 < 0) {
    elements[elements.length + (currentIndex - 2)].classList.add("hide");
  }
  if (currentIndex - 1 < 0) {
    elements[elements.length + (currentIndex - 1)].classList.add("prev");
  }
  if (currentIndex + 1 >= elements.length) {
    elements[(currentIndex + 1) % elements.length].classList.add("next");
  }
  if (currentIndex + 2 >= elements.length) {
    elements[(currentIndex + 2) % elements.length].classList.add("new-next");
  }
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

// Initialize classes on load
updateClasses();







