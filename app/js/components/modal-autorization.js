const modalAutorization = () => {
    const modal = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__close'),
    modalOpenBtn = document.querySelector('.header__autorization');
    
    modalOpenBtn.addEventListener('click', () => {

        modal.classList.add('_open');
        modalClose.addEventListener('click', () => {
            modal.classList.remove('_open');
        })
        
        if (modal.classList.contains('_open')) {
            const modalTabsBtn = document.querySelectorAll('.modal__tabs-btn');
            const modalForm = document.querySelectorAll('.modal__form');

            modalTabsBtn.forEach(item => {
                item.addEventListener('click', event => {
                    const modalTabsTarget = event.target.getAttribute('data-tab-modal-btn');

                    modalTabsBtn.forEach(elem => {
                        elem.classList.remove('_active');
                    });

                    modalForm.forEach(elem => {
                        elem.classList.add('hidden');
                    })

                    item.classList.add('_active');

                    document.getElementById(modalTabsTarget).classList.remove('hidden');
                });
            });
        }
    });
}

modalAutorization();
