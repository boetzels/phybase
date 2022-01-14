import { json } from "stream/consumers";

const getUserSession = () => {
    const userString = sessionStorage.getItem('user');

    if (userString) {
        return JSON.parse(userString);
    }
    return null;
};

const getToken = () => {
    return sessionStorage.getItem('token') || null;
};

const removeSession = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
};

const setUserSession = (user: any, token: string) => {
    sessionStorage.setItem('token', token);
    sessionStorage.setItem('user', JSON.stringify(user));
};

export { setUserSession, getUserSession, getToken, removeSession }