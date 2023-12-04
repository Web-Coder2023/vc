const tabTitle = document.querySelectorAll('.nav__menu-list li'),
tabContent = document.querySelectorAll('.news');
console.log(tabContent);

tabTitle.forEach(item => {
    item.addEventListener('click', event => {
        // Получаем значение data-tab
        const tabsTitleTarget = event.target.getAttribute('data-tab');

        // Удаляем у всех табов кроме текущего класс _active-tab
        tabTitle.forEach(elem => {
            elem.classList.remove('_active-tab');
        })

        // Добавляем всем элементам с классом tab__content, класс hidden, всем кроме того который соответствует значением id со значение data-tab
        tabContent.forEach(elem => {
            elem.classList.add('hidden');
        })

        item.classList.add('_active-tab');

        // Сравниваем id и значение атрибута data-tab
        document.getElementById(tabsTitleTarget).classList.remove('hidden');
    })
})