
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

// Simulando dados dinâmicos
const data = [
  "Content 1",
  "Content 2",
  "Content 3",
  "Content 4",
  "Content 5"
];

let currentIndex = 0;

function createComponent(content) {
  const container = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.textContent = content;

  const span = document.createElement('span');
  span.textContent = content;

  container.appendChild(h3);
  container.appendChild(span);

  return container;
}

function updateContent() {
  const items = $$(".list li");
  items[0].innerHTML = "";
  items[1].innerHTML = "";
  items[2].innerHTML = "";

  items[0].appendChild(createComponent(data[(currentIndex - 1 + data.length) % data.length]));
  items[1].appendChild(createComponent(data[currentIndex]));
  items[2].appendChild(createComponent(data[(currentIndex + 1) % data.length]));
}

function next() {
  currentIndex = (currentIndex + 1) % data.length;

  const current = $(".act");
  const next = $(".next");
  const prev = $(".prev");

  // Atualiza classes
  prev.classList.remove("prev");
  current.classList.remove("act");
  current.classList.add("prev");
  next.classList.remove("next");
  next.classList.add("act");

  const newNextIndex = (currentIndex + 1) % data.length;
  const newNext = document.createElement("li");
  newNext.appendChild(createComponent(data[newNextIndex]));
  newNext.classList.add("next");

  $(".list").appendChild(newNext);
  $(".list").removeChild(prev);

  updateContent();
}

function prev() {
  currentIndex = (currentIndex - 1 + data.length) % data.length;

  const current = $(".act");
  const next = $(".next");
  const prev = $(".prev");

  // Atualiza classes
  next.classList.remove("next");
  current.classList.remove("act");
  current.classList.add("next");
  prev.classList.remove("prev");
  prev.classList.add("act");

  // Calcula o índice do novo elemento "prev"
  const newPrevIndex = (currentIndex - 1 + data.length) % data.length;
  const newPrev = document.createElement("li");
  newPrev.appendChild(createComponent(data[newPrevIndex]));
  newPrev.classList.add("prev");

  // Insere o novo "prev" antes do atual
  $(".list").insertBefore(newPrev, current);

  // Remove o antigo "next"
  $(".list").removeChild(next);

  // Atualiza o conteúdo da lista
  updateContent();
}


function slide(element) {
  if (element.classList.contains('next')) {
    next();
  } else if (element.classList.contains('prev')) {
    prev();
  }
}

const slider = $(".list");
const swipe = new Hammer($(".swipe"));

slider.onclick = event => {
  slide(event.target);
};

swipe.on("swipeleft", () => {
  next();
});

swipe.on("swiperight", () => {
  prev();
});

// Inicializa o conteúdo ao carregar a página
updateContent();






