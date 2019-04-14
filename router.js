import { navigateTo, refresh, clearCookies } from './commands/browser-commands.js';

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
        default:
            return 'unknown command';
    }

    return text;
};

export { router };
