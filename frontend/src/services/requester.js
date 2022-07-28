let URL = '';
const pageSize = 9;

if (process.env.NODE_ENV === "production") {
    URL = 'https://buildoo.herokuapp.com'
} else {
    URL = 'http://localhost:3003'
}

async function fetchRequest(method, body, url) {
    try {
        const res = await fetch(URL + url, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
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
            console.error(err);
            return res;
        }
    } catch (err) {
        console.error(err);
    }
}

async function fetchFileRequest(method, body, url) {
    try {
        const res = await fetch(URL + url, {
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
            console.error(err);
            return res;
        }
    } catch (err) {
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
    return await fetchRequest('GET', undefined, `/api/verify?token=${token}`);
}

export async function findUserByEmail(email) {
    if (!email) return;
    return await fetchRequest('GET', undefined, `/api/usersEmail?email=${email}`);
}

export async function findUserById(id) {
    if (!id) return;
    return await fetchRequest('GET', undefined, `/api/usersId?id=${id}`);
}

export async function findPage(page) {
    if (!page) return;
    return await fetchRequest('GET', undefined, `/api/cardsPaginate?page=${page}&limit=${pageSize}`);
}

export async function findAllCards() {
    return await fetchRequest('GET', undefined, '/api/cards');
}

export async function findCardsCount() {
    return await fetchRequest('GET', undefined, '/api/cards/count');
}

export async function findOneServiceById(id) {
    if (!id) return;
    return await fetchRequest('GET', undefined, `/api/serviceId?id=${id}`);
}

export async function findAllUsers() {
    return await fetchRequest('GET', undefined, '/api/users');
}

export async function findAllComments() {
    return await fetchRequest('GET', undefined, '/api/comments');
}

export async function filterServices(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/filter/services');
}

export async function userRegister(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/user/register');
}

export async function userLogin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/user/login');
}

export async function passwordUpdate(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/user/password');
}

export async function createCard(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/card/create');
}

export async function createComment(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/card/comment');
}

export async function uploadImage(body) {
    if (!body) return;
    return await fetchFileRequest('POST', body, '/api/image/upload');
}

export async function deleteImageGCS(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/image/delete');
}

export async function updateAdmin(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/admin/update');
}

export async function updateService(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/edit/service');
}

export async function like(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/card/like');
}

export async function dislike(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/card/dislike');
}

export async function deleteUser(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/admin/delete');
}

export async function deleteCard(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/card/delete');
}

export async function deleteComment(body) {
    if (!body) return;
    return await fetchRequest('POST', body, '/api/comment/delete');
}