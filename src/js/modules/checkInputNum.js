const checkInputNum = (inputValue) => {
    const parent = document.querySelector('.popup_calc_content'),
          input = document.querySelector(inputValue);

        parent.addEventListener('input', () => {
            input.value = input.value.replace(/\D/, '');
            if(input.value == ''){
                input.style.border = '1px solid red';
                document.querySelector('.popup_calc_button').setAttribute('disabled', 'disabled');
            } else {
                input.style.border = 'none';
                document.querySelector('.popup_calc_button').removeAttribute('disabled');
            }
        });
};

export default checkInputNum;
