const URL = 'http://localhost:3003';

async function fetchRequest(method, body, url) {
    const params = {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        credentials: 'same-origin',
        body: JSON.stringify(body)
    }

    const fetcher = await fetch(url, params)
        .then(res => promiseHandler(res))
        .catch(err => errorHandler(err));

    // console.log('fetcher:');
    // console.log(params);

    return fetcher;
}

async function promiseHandler(res) {
    tokenHandler(res);
    const result = res.ok
        ? await res.json()
        : undefined;
    return result;
}

function errorHandler(err) {
    console.error(err);
    return undefined;
}

function tokenHandler(res) {
    const token = res.headers.get('Authorization');
    if (token)
        localStorage.setItem('token', token);
}

// Start from here:

async function userAuth(token) {
    if (!token) return;
    return await fetchRequest('GET', undefined, `${URL}/verify?token=${token}`);
}

async function userRegister(body) {
    if (!body) return;
    return await fetchRequest('POST', body, `${URL}/user/register`);
}

async function userLogin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, `${URL}/user/login`);
}

module.exports = {
    userAuth,
    userRegister,
    userLogin
};