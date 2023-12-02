let searchAdaptive = () => {
    const header = document.querySelector('.header__container');
    const headerInner = document.querySelector('.header__search-inner');
    const headerSearchIcon = document.querySelector('.header__search-icon');
    const news = document.querySelector('.news');

    let check = 0;

    headerSearchIcon.addEventListener('click', () => {
        const headerHeight = header.offsetHeight;
        
        if (check === 0) {
            headerInner.style.maxHeight = (headerHeight+10) + 'px';
            news.style.paddingTop = headerHeight + 'px';
            check = 1;
        } else {
            headerInner.style.maxHeight = 0;
            news.style.paddingTop = 0;
            check = 0;
        }
    });
}

searchAdaptive();