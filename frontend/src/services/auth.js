const getUser = () => {
    let username = localStorage.getItem('username');
    return username;
}

const isAuthenticated = () => {
    return Boolean(getUser());
}

function getUserData() {
    return JSON.parse(localStorage.getItem('token'));
}

function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

function clearUserData() {
    localStorage.removeItem('userData');
}

module.exports = {
    getUserData,
    setUserData,
    clearUserData,isAuthenticated
};