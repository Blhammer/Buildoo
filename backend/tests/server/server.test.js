const supertest = require('supertest');
const expressConfig = require('../../config/express');
const app = expressConfig();

const User = require('../../database/models/User');
const Service = require('../../database/models/Service');

const { verifyToken } = require('../../server/util');

const user = new User({
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email123@gmail.com',
    password: 'password123',
    isAdmin: false
});

const service = new Service({
    title: 'title-test',
    town: 'town-test',
    street: 'street-test',
    phone: '+359123456789',
    imageUrl: 'https://storage.googleapis.com/buildoo/image-test.jpg',
    paymentMethod: 'paymentMethod-test',
    price: 100,
    chooseService: 'chooseService-test',
    description: 'description-test-description-test',
    owner: user._id
});

describe('Test server', () => {
    test('Test verify', async () => {
        const undefinedToken = await supertest(app).get('/verify');
        expect(undefinedToken.statusCode).toEqual(401);

        const invalidToken = await supertest(app).get('/verify?token=error.error');
        expect(invalidToken.statusCode).toEqual(401);

        const token = verifyToken(user);
        const validToken = await supertest(app).get(`/verify?token=${token}`);

        expect(validToken.statusCode).toEqual(401);
        expect(validToken.body.email).toBe(user.email);
        expect(validToken.body.password).toBe(user.password);
    });
});