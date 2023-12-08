const dowloadPost = () => {
    let a = 0
    while (a < 10) {
        // Получаем все элементы с классом _label-list__card
    const cards = document.querySelectorAll('._label-list__card');

    // Используем цикл для перебора элементов и добавления 10 новых элементов после каждых 10 существующих элементов
    for (let i = 0; i < cards.length; i += 10) {
        const newCardsContainer = document.createElement('ul');
        newCardsContainer.className = 'news';

        // Создаем 10 новых элементов и добавляем ваш HTML код в каждый из них
        for (let j = 0; j < 10; j++) {
            const newCard = document.createElement('li');
            newCard.className = '_label-list__card';

            // Вставляем ваш код в новый элемент
            newCard.innerHTML = `
            <div class="_label-list__tags">
                <span>#Тег</span><span>#Тег2 </span><span>#Тег3</span>
            </div>
            <div class="_label-list__category">Категория 2</div>
            <div class="_label-list__header">
                <h1 class="_label-list__title">Проверка поста</h1>
                <div class="_label-list__favourites">
                    <svg width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.67871 6.5C9.67871 4.84315 11.0219 3.5 12.6787 3.5H28.3375C29.9944 3.5 31.3375 4.84315 31.3375 6.5V18.8027C31.3375 19.5647 30.5194 20.0467 29.8529 19.6774L20.9928 14.7685C20.6913 14.6015 20.325 14.6015 20.0235 14.7685L11.1633 19.6774C10.4968 20.0467 9.67871 19.5647 9.67871 18.8027V6.5Z"
                            stroke="#333333" stroke-width="1.5" />
                    </svg>
                </div>
            </div>
            <div class="_label-list__text">
                <p class="_label-list__text-body">
                    Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст текст текст текст
                    Текст
                    текст текст текст Текст текст текст текст Текст текст текст текст Текст текст Текст текст текст
                    текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст
                    текст текст текст Текст текст текст текст Текст текст текст текст Текст текст Текст текст текст
                    текст Текст текст текст текст Текст текст текст текст Текст текст текст текст Текст
                    текст текст текст Текст текст текст текст Текст текст текст текст Текст текст
                </p>
            </div>
            <div class="_label-list__next">
                Прочитать дальше
            </div>
            <div class="_label-list__box">
                <ul class="_label-list__smail">
                    <li class="_label-list__border-padding"><img src="./images/smail/laughter.webp"
                            alt="laughter"><span>123</span></li>
                    <li class="_label-list__border-padding"><img src="./images/smail/agressive.webp"
                            alt="agressive"><span>123</span></li>
                    <li class="_label-list__border-padding"><img src="./images/smail/crying.webp"
                            alt="crying"><span>123</span></li>
                    <li class="_label-list__border-padding"><img src="./images/smail/like.webp"
                            alt="like"><span>123</span></li>
                </ul>
                <div class="_label-list__inner">
                    <div class="_label-list__comment _label-list__border-padding">
                        <div class="_label-list__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                fill="none">
                                <path
                                    d="M8.8394 19.9882C9.94437 20.5293 11.1867 20.8332 12.5 20.8332C17.1025 20.8332 20.8334 17.1023 20.8334 12.4998C20.8334 7.89747 17.1025 4.1665 12.5 4.1665C7.89765 4.1665 4.16669 7.89747 4.16669 12.4998C4.16669 14.2083 4.68082 15.7967 5.56279 17.1187M8.8394 19.9882L4.16669 20.8332L5.56279 17.1187M8.8394 19.9882L8.84617 19.987M5.56279 17.1187L5.56412 17.1152"
                                    stroke="#333333" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </div>
                        <span>223</span>
                    </div>
                    <button class="_label-list__btn _label-list__border">ОТПУСТИТЬ</button>
                </div>
            </div>
    `;

            newCardsContainer.appendChild(newCard);
        }

        // Вставляем новые элементы после текущего элемента
        cards[i].after(newCardsContainer);

        a++;
    }
    }
}
dowloadPost();