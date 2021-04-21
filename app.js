
// Hidden menu variables
const toggleMenu = document.querySelector('.toggle-div');
const toggleLayer = document.querySelector('.toggle-layer');
const toggleNav = document.querySelector('.hidden-menu');

// Page Width
const pageWidth = document.body.getBoundingClientRect().width;


// Fixed navbar:

// Hidden menu:

toggleMenu.addEventListener('click', () => {
    toggleLayer.classList.toggle('d-none');
    toggleNav.classList.toggle('d-none');
});

window.addEventListener('resize', () => {
    if (pageWidth > 930) {
        toggleLayer.classList.add('d-none');
        toggleNav.classList.add('d-none');
    };

    // Slider eventListener:
    if (pageWidth > 780) {
        for (const slide of slides) {
            slide.style.transform = 'translateX(0)'
        };
    };
});

// Main slider code:

const slides = document.querySelectorAll('.profile');
const sliderBtns = document.querySelectorAll('.sl-btn')

for (const [index, slide] of slides.entries()) {
    slide.style.left = `${index * 100}%`;
};


for (const [index, btn] of sliderBtns.entries()) {
    btn.addEventListener('click', () => {
        const sliderBtnsCont = document.querySelector('.slider-btns')

        // adding and removing orange bg btn color
        for (const child of sliderBtnsCont.children) {
            if (child.classList.contains('bg-orange')) {
                child.classList.remove('bg-orange');
            };
        };

        btn.classList.add('bg-orange')

        // Movement of slides
        for (const slide of slides) {
            slide.style.transform = `translateX(-${index * 100}%)`
        };
    });
};




