const openBigImg = () => {
    const imgPopup = document.createElement('div'),
          workSpace = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopup.classList.add('popup');
    workSpace.appendChild(imgPopup);
    imgPopup.style.cssText = `
        justify-content: center;
        align-items: center;
        display: none;
        `;

    imgPopup.appendChild(bigImg);

    workSpace.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgPopup.style.display = 'flex';
            bigImg.style.cssText = `
                border: 1px solid black;        
                border-radius: 8px;
                object-fit: cover;
                margin: 0 auto;
            `;
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')){
            imgPopup.style.display = 'none';
        }
    });

};

export default openBigImg;