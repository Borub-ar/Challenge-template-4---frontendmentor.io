const toggleMenu = document.querySelector('.toggle-div');

toggleMenu.addEventListener('click', () => {
    const toggleLayer = document.querySelector('.toggle-layer');
    const toggleNav = document.querySelector('.hidden-menu');

    toggleLayer.classList.toggle('d-none');
    toggleNav.classList.toggle('d-none');
})

