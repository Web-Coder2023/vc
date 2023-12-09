const popup = () => {
    const labelListCommentBtns = document.querySelectorAll('._label-list__comment');
    const popupComment = document.querySelector('.popup-comment');
    labelListCommentBtns.forEach(item => {
        item.addEventListener('click', () => {
            const popupCommentClose = document.querySelector('.popup-comment__close');
            popupComment.classList.remove('popup');
            popupCommentClose.addEventListener('click', () => {
                popupComment.classList.add('popup');
            })
        })
    })
}
popup();