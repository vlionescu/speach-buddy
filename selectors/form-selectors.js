const $ = (selector) => document.querySelectorAll(selector);

let crtForm;
let formInputs;
let crtInput;
let crtInputIndex;

const selectForm = () => {
    const forms = $('form');
    crtForm = forms[0];
    crtForm.style.border = '2px solid red';
};

const focusInput = () => {
    if(!crtForm) return;

    crtForm.style.border = 'none';
    formInputs = crtForm.querySelectorAll('input');
    crtInputIndex = 0;
    crtInput = formInputs[0];
    crtInput.focus();
    crtInput.style.border = '2px solid red';
};

const focusNextInput = () => {
    crtInput.style.border = 'none';
    crtInputIndex++;
    crtInput = formInputs[crtInputIndex];

    crtInput.focus();
    crtInput.style.border = '2px solid red';
};

const fillInput = text => crtInput.value = text.slice(15);

const submitForm = () => {
    crtForm.submit();
};

export {
    selectForm,
    focusInput,
    fillInput,
    focusNextInput,
    submitForm,
};
