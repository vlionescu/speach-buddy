import { generateModal, openModal, closeModal } from './modal/modal.js';

generateModal();

const recognition = new window.webkitSpeechRecognition();
recognition.continuous = true;
recognition.onresult = event => {
    const { results } = event;
    openModal(results[results.length - 1][0].transcript);
    setTimeout(closeModal, 3000);
};

recognition.start();
