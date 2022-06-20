const URL = 'http://localhost:3003';

async function fetchRequest(method, body, url) {
    const res = await fetch(URL + url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(body)
    });
    
    const jsonResult = await res.json();

    if (res.ok) {
        tokenHandler(res);
        return jsonResult;
    } else {
        console.error(jsonResult.message);
        return undefined;
    }
}

function tokenHandler(res) {
    const token = res.headers.get('Authorization');

    if (token) {
        localStorage.setItem('token', token);
    }
}

async function userAuth(token) {
    if (!token) return;
    return await fetchRequest('GET', undefined, `/verify?token=${token}`);
}

async function findUserByEmail(email) {
    if (!email) return;
    return await fetchRequest('GET', undefined, `/usersEmail?email=${email}`);
}

async function findUserById(id) {
    if (!id) return;
    return await fetchRequest('GET', undefined, `/usersId?id=${id}`);
}

async function findAllUsers() {
    return await fetchRequest('GET', undefined, `/users`);
}

async function userRegister(body) {
    if (!body) return;
    return await fetchRequest('POST', body, `/user/register`);
}

async function userLogin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, `/user/login`);
}

async function updateAdmin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, `/admin/update`);
}

module.exports = {
    userAuth,
    findUserByEmail,
    findUserById,
    findAllUsers,
    userRegister,
    userLogin,
    updateAdmin
};