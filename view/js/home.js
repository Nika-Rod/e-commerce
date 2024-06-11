let index;

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