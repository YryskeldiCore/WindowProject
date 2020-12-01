import checkInputNum from './checkInputNum';
import {openModal, closeModal} from './modals';

const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          modal = document.querySelector('.popup_engineer');

    checkInputNum('input[name="user_phone"]');

    const messages = {
        loading: 'Loading...Please wait',
        success: 'The data is send!Congratz',
        failure: 'Error 404. Something goes wrong :)'
    };

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = messages.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        });
    };

    function showThanksModal(message){
        const prevModal = document.querySelector('.popup_engineer .popup_dialog');

        prevModal.classList.add('hide');
        openModal(modal);
        const thanksModal = document.createElement('div');
        thanksModal.classList.add('popup__dialog');
        thanksModal.innerHTML = `
            <div class="popup_content text-center">
                <button type="button" class="popup_calc_end_close">
                    <strong>&times;</strong>
                </button>
                <h2>${message}</h2>
            </div>
        `;
        modal.append(thanksModal);

        setTimeout(() => {
            thanksModal.remove();
            prevModal.classList.add('show');
            prevModal.classList.remove('hide');
            closeModal(modal);
        }, 5000);
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            inputs.forEach(input => {
                input.addEventListener('input', () => {
                    if(input.value == ''){
                        this.style.border = '4px solid red';
                    } else {
                        this.style.border = 'none';
                    }
                });
            });

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === 'end'){
                for (let key in state){
                    formData.append(key, state[key]);
                }
            }

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    showThanksModal(messages.success);
                })
                .catch(() => showThanksModal(messages.failure))
                .finally(() => {
                    clearInputs();
                });
        });
    });
};

export default forms;