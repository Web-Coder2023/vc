const accordion = () => {
    const support = document.querySelector('.support');
    const accordions = document.querySelectorAll('.support__list');
    const sosElement = document.querySelector('.SOS');

    sosElement.addEventListener('click', () => {
        if (!support.classList.contains('hidden')) {
            accordions.forEach((accordion) => {
                const supportBoxBtn = accordion.querySelector('.support__list-box');
                const supportDescrBox = accordion.querySelector('.support__list-body');
                const supportDescrHeight = accordion.querySelector('.support__list-descr').scrollHeight + 'px';

                console.log(supportDescrHeight);

                supportBoxBtn.addEventListener('click', () => {
                    const currentMaxHeight = supportDescrBox.style.maxHeight;

                    // Закрываем все аккордеоны
                    accordions.forEach((otherAccordion) => {
                        if (otherAccordion !== accordion) {
                            otherAccordion.classList.remove('_check');
                            otherAccordion.querySelector('.support__list-body').style.maxHeight = '0';
                        }
                    });

                    // Открываем или закрываем текущий аккордеон
                    if (currentMaxHeight === '' || currentMaxHeight === '0px') {
                        accordion.classList.add('_check');
                        supportDescrBox.style.maxHeight = supportDescrHeight;
                    } else {
                        accordion.classList.remove('_check');
                        supportDescrBox.style.maxHeight = '0';
                    }
                });
            });
        }
    });
};

accordion();
