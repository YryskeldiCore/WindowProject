const checkCheckBoxNum = (checkBox) => {
    const parent2 = document.querySelector('.popup_calc_profile_content '),
          checkbox = document.querySelector(checkBox);

    parent2.addEventListener('click', (e) => {
            const target = e.target;
            if(target && target.matches('input.checkbox')){
                if(target.checked == false){
                    document.querySelector('.popup_calc_profile_button').setAttribute('disabled', 'disabled');
                } else {
                    document.querySelector('.popup_calc_profile_button').removeAttribute('disabled');
                }
            }
    });
};

export default checkCheckBoxNum;
