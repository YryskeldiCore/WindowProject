function openModal(modal){
    modal.classList.add('show','fade');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModal(modal){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.marginRight = `0px`;
}

const modals = () => {
    function bindModal(btnSelector, modalSelector, closeSelector, clickModalOverlay = true){
        const btns = document.querySelectorAll(btnSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            modals = document.querySelectorAll('[data-modal]'),
            scroll = getScrollWidth(),
            input = document.querySelector('input');

        function closeAllModal(){
            modals.forEach(modal => {
                modal.classList.add('hide');
                modal.classList.remove('show');
            });
        }

        function getScrollWidth(){
            const div = document.createElement('div');
            div.style.height = '50px';
            div.style.width = '50px';
            div.style.visibility = 'hidden';
            div.style.overflowY = 'scroll';
            document.body.appendChild(div);

            const scrollWidth = div.offsetWidth - div.clientWidth;

            div.remove();
            return scrollWidth;
        }

        modal.addEventListener('click', (e) => {
            if(e.target == modal && clickModalOverlay){
                closeModal(modal);
            }
        });

        window.addEventListener('keydown', (e) => {
            if(e.code === 'Escape'){
                closeModal(modal);
            }
        });
                
        btns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(e.target){
                    e.preventDefault();
                } 
                closeAllModal();
                openModal(modal);
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal);
        });
    }

    function openModalByTime(modalSelector, time){
        setTimeout(() => {
            document.querySelector(modalSelector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    openModalByTime('.popup', 60000);

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup','.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false); //click
    bindModal('.popup_calc_profile_button','.popup_calc_end','.popup_calc_end_close');
};

export default modals;
export {closeModal};
export {openModal};