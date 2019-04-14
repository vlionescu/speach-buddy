const navigateTo = text => {
    const url = text.slice(12);
    window.location = `http://${url}`;
};

const refresh = () => {
  location.reload();
};

const clearCookies = () => { // TODO: fix
   document.cookie.split(";").forEach(cookie => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    });
};

export {
    navigateTo,
    refresh,
    clearCookies,
}
