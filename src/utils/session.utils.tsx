const getToken = () => {
    return sessionStorage.getItem('token') || null;
};

const removeSession = () => {
    sessionStorage.removeItem('token');
};

const setToken = (token: string) => {
    sessionStorage.setItem('token', token);
};

export { setToken, getToken, removeSession }