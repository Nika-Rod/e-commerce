
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

const $ = selector => {
    return document.querySelector(selector);
  };
  
  function next() {
    if ($(".hide")) {
      $(".hide").remove(); 
    }
  
    /* Step */
  
    if ($(".prev")) {
      $(".prev").classList.add("hide");
      $(".prev").classList.remove("prev");
    }
  
    $(".act").classList.add("prev");
    $(".act").classList.remove("act");
  
    $(".next").classList.add("act");
    $(".next").classList.remove("next");
  
    /* New Next */
  
    $(".new-next").classList.remove("new-next");
  
    const addedEl = document.createElement('li');
  
    $(".list").appendChild(addedEl);
    addedEl.classList.add("next","new-next");
  }
  
  function prev() {
    $(".new-next").remove();
      
    /* Step */
  
    $(".next").classList.add("new-next");
  
    $(".act").classList.add("next");
    $(".act").classList.remove("act");
  
    $(".prev").classList.add("act");
    $(".prev").classList.remove("prev");
  
    /* New Prev */
  
    $(".hide").classList.add("prev");
    $(".hide").classList.remove("hide");
  
    const addedEl = document.createElement('li');
  
    $(".list").insertBefore(addedEl, $(".list").firstChild);
    addedEl.classList.add("hide");
  }
  
  slide = element => {
    /* Next slide */
    
    if (element.classList.contains('next')) {
      next();
      
    /* Previous slide */
      
    } else if (element.classList.contains('prev')) {
      prev();
    }
  }
  
  const slider = $(".list"),
        swipe = new Hammer($(".swipe"));
  
  slider.onclick = event => {
    slide(event.target);
  }
  
  swipe.on("swipeleft", (ev) => {
    next();
  });
  
  swipe.on("swiperight", (ev) => {
    prev();
  });