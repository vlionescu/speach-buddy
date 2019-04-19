import { containerStyle, textStyle } from '../styles/modal.styles.js';
import { router } from '../router.js';

const body      = document.querySelector('body');
const container = document.createElement('div');
const message   = document.createElement('p');

const generateModal = () => {
    container.setAttribute('style', containerStyle);
    message.setAttribute('style', textStyle);

    container.appendChild(message);
    body.appendChild(container);
};

const openModal = text => {
    container.style.display = 'unset';

    text = text.toLowerCase().trim();
    message.innerText = router(text);
};

const closeModal = () => {
    container.style.display = 'none';
};

export {
    generateModal,
    openModal,
    closeModal,
}
