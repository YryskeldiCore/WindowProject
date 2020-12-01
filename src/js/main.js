import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeStateModal from './modules/changeStateModal';
import timer from './modules/timer';
import openBigImg from './modules/openBigImg';

document.addEventListener('DOMContentLoaded', () => {
    const modalState = {};
    let deadline = '2021-01-01';

    modals(modalState);
    tabs('.glazing_slider','.glazing_block','.glazing_content','active');
    tabs('.decoration_slider','.no_click','.decoration_content > div > div','after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');
    forms(modalState);
    changeStateModal(modalState);
    timer('.container1', deadline);
    openBigImg();

});