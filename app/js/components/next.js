const next = () => {
    // Находим все карточки с классом '_label-list__card'
    const cards = document.querySelectorAll('._label-list__card');

    // Итерируем по каждой карточке
    cards.forEach(card => {
        // Находим элементы внутри карточки
        const nextButton = card.querySelector('._label-list__next');
        const text = card.querySelector('._label-list__text');
        const textBody = card.querySelector('._label-list__text-body');

        // Добавляем обработчик клика на кнопку
        nextButton.addEventListener('click', () => {
            // Сбрасываем высоту текста для всех карточек
            cards.forEach(otherCard => {
                const otherText = otherCard.querySelector('._label-list__text');
                otherText.style.maxHeight = '';
            });

            // Устанавливаем высоту текста равной высоте текстового блока
            text.style.maxHeight = textBody.offsetHeight + 'px';
            nextButton.style.display = 'none';
        });
    });
};

// Вызываем функцию сразу после её объявления
next();
