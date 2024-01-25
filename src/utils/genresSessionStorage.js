export const sessionStorageKey = "genres";

export const saveDataInSessionStorage = data =>
    sessionStorage.setItem(sessionStorageKey, JSON.stringify(data));

export const getDataFromSessionStorage = () =>
    JSON.parse(sessionStorage.getItem(sessionStorageKey)) || [];