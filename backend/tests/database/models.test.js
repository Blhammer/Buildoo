const User = require('../../database/models/User');
const Comment = require('../../database/models/Comment');
const Service = require('../../database/models/Service');

const user = {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email123@gmail.com',
    password: 'password123',
    isAdmin: false
};
const UserModel = new User(user);

const service = {
    title: 'title-test',
    town: 'town-test',
    street: 'street-test',
    phone: '+359123456789',
    imageUrl: 'https://storage.googleapis.com/buildoo/image-test.jpg',
    paymentMethod: 'paymentMethod-test',
    price: 100,
    chooseService: 'chooseService-test',
    description: 'description-test-description-test',
    owner: UserModel._id
};
const ServiceModel = new Service(service);

const comment = {
    author: 'author',
    content: 'content',
    owner: UserModel._id,
    service: service._id
};
const CommentModel = new Comment(comment);

describe('Test all Schemas', () => {
    test('User model should work properly', async () => {
        expect(UserModel._id).toBeTruthy();
        expect(UserModel.firstName).toBe(user.firstName);
        expect(UserModel.lastName).toBe(user.lastName);
        expect(UserModel.email).toBe(user.email);
        expect(UserModel.password).toBe(user.password);
        expect(UserModel.isAdmin).toBe(false);
    });
    test('Comment model should work properly', async () => {
        expect(CommentModel._id).toBeTruthy();
        expect(CommentModel.author).toBe(comment.author);
        expect(CommentModel.content).toBe(comment.content);
        expect(CommentModel.owner).toBe(UserModel._id);
        expect(CommentModel.service).toBe(comment.service);
    });
    test('Service model should work properly', async () => {
        expect(ServiceModel._id).toBeTruthy();
        expect(ServiceModel.title).toBe(service.title);
        expect(ServiceModel.town).toBe(service.town);
        expect(ServiceModel.street).toBe(service.street);
        expect(ServiceModel.phone).toBe(service.phone);
        expect(ServiceModel.imageUrl).toBe(service.imageUrl);
        expect(ServiceModel.paymentMethod).toBe(service.paymentMethod);
        expect(ServiceModel.price).toBe(service.price);
        expect(ServiceModel.chooseService).toBe(service.chooseService);
        expect(ServiceModel.description).toBe(service.description);
        expect(ServiceModel.owner).toBe(service.owner);
    });
});