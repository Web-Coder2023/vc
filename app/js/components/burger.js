let burger = () => {
    const burgerBtn = document.querySelector('.header__burger');
    const nav = document.querySelector('.nav');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('_active');
        nav.classList.toggle('_active');
    })
}
burger();