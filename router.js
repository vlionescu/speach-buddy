import { navigateTo, refresh, clearCookies } from './commands/browser-commands.js';
import { selectForm, focusInput, fillInput, submitForm, focusNextInput } from './selectors/form-selectors.js';

const router = text => {
    switch (true) {
        case /navigate to/.test(text):
            navigateTo(text);
            break;
        case /refresh/.test(text):
            refresh();
            break;
        case /clear cookies/.test(text):
            clearCookies();
            break;

        case /select form/.test(text):
            selectForm();
            break;

        case /focus input/.test(text):
            focusInput();
            break;

        case /focus next input/.test(text):
            focusNextInput();
            break;

        case /fill input with/.test(text):
            fillInput(text);
            break;

        case /submit form/.test(text):
            submitForm();
            break;

        default:
            return 'unknown command';
    }

    return text;
};

export { router };
