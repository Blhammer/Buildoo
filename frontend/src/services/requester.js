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

export async function userAuth(token) {
    if (!token) return;
    return await fetchRequest('GET', undefined, `/verify?token=${token}`);
}

export async function findUserByEmail(email) {
    if (!email) return;
    return await fetchRequest('GET', undefined, `/usersEmail?email=${email}`);
}

export async function findUserById(id) {
    if (!id) return;
    return await fetchRequest('GET', undefined, `/usersId?id=${id}`);
}

export async function findAllUsers() {
    return await fetchRequest('GET', undefined, '/users');
}

export async function findAllCards() {
    return await fetchRequest('GET', undefined, '/cards');
}

export async function findAllImages() {
    return await fetchRequest('GET', undefined, '/files');
}

export async function userRegister(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/user/register');
}

export async function userLogin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/user/login');
}

export async function createCard(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/card/create');
}

export async function uploadImage(body) {
    if (!body) return;
    console.log(body);

    const res = await fetch(`${URL}/user/upload`, {
        method: 'POST',
        body: body
    });

    console.log("res:");
    console.log(res);

    const jsonResult = await res.json();
    console.log("jsonResult:");
    console.log(jsonResult);

    if (res.ok) {
        console.log("here");
        return jsonResult;
    } else {
        console.error(res.message);
    }
}

export async function updateAdmin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/admin/update');
}

export async function deleteUser(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/admin/delete');
}

export async function deleteCard(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/card/delete');
}