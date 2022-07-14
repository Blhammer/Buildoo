// Only for local usage:
// Don't forget to remove URLs or add them inside fetchRequest and fetchFileRequest
// const URL = 'http://localhost:3003';

async function fetchRequest(method, body, url) {
    try {
        const res = await fetch(url, {
            method: method,
            headers: { 'Content-Type': 'application/json' },
            mode: 'cors',
            credentials: 'same-origin',
            body: JSON.stringify(body)
        });

        if (res.ok === false) {
            const error = await res.json();
            return console.error(error.message);
        }

        try {
            const jsonResult = await res.json();
            tokenHandler(res);
            return jsonResult;
        } catch (err) {
            console.log(err);
            console.error(err);
            return res;
        }
    } catch (err) {
        console.log(err);
        console.error(err);
    }
}

async function fetchFileRequest(method, body, url) {
    try {
        const res = await fetch(url, {
            method: method,
            body: body
        });

        if (res.ok === false) {
            const error = await res.json();
            return console.error(error.message);
        }

        try {
            const jsonResult = await res.json();
            return jsonResult;
        } catch (err) {
            console.log(err);
            console.error(err);
            return res;
        }
    } catch (err) {
        console.log(err);
        console.error(err);
    }
}

function tokenHandler(res) {
    const token = res?.headers?.get('Authorization');
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

export async function findOneServiceById(id) {
    if (!id) return;
    return await fetchRequest('GET', undefined, `/serviceId?id=${id}`);
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

export async function findAllComments() {
    return await fetchRequest('GET', undefined, '/comments');
}

export async function userRegister(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/user/register');
}

export async function userLogin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/user/login');
}

export async function passwordUpdate(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/user/password');
}

export async function createCard(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/card/create');
}

export async function createComment(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/card/comment');
}

export async function uploadImage(body) {
    if (!body) return;
    return await fetchFileRequest('POST', body, '/image/upload');
}

export async function deleteImageGCS(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/image/delete');
}

export async function updateAdmin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/admin/update');
}

export async function updateService(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/edit/service');
}

export async function like(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/card/like');
}

export async function dislike(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/card/dislike');
}

export async function deleteUser(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/admin/delete');
}

export async function deleteCard(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/card/delete');
}

export async function deleteComment(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/comment/delete');
}