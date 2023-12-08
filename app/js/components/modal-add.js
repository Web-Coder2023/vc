const addBtn = () => {
    const headerBtn = document.querySelector('.header__add'),
        modalAddClose = document.querySelector('.modal-add__close'),
        modalAdd = document.querySelector('.modal-add');

    headerBtn.addEventListener('click', () => {
        modalAdd.classList.add('_open');
        
        modalAddClose.addEventListener('click', () => {
            modalAdd.classList.remove('_open');
        });
    });
}

addBtn();
