import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import styles from './Create.module.css';

import Input from '../Input';
import UserContext from '../../contexts/Context';
import { createCard, uploadImage, findAllImages } from '../../services/requester';

const Create = () => {
    const [title, setTitle] = useState('');
    const [town, setTown] = useState('');
    const [street, setStreet] = useState('');
    const [phone, setPhone] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [price, setPrice] = useState('');
    const [chooseService, setChooseService] = useState('');
    const [description, setDescription] = useState('');

    const [errorTitle, setErrorSetTitle] = useState(null);
    const [errorTown, setErrorTown] = useState(null);
    const [errorStreet, setErrorStreet] = useState(null);
    const [errorPhone, setErrorPhone] = useState(null);
    const [errorImageUrl, setErrorImageUrl] = useState(null);
    const [errorPaymentMethod, setPaymentMethodError] = useState(null);
    const [errorPrice, setErrorPrice] = useState(null);
    const [errorChooseService, setErrorChooseService] = useState(null);
    const [errorDescription, setErrorDescription] = useState(null);


    const [uploadedImage, setUploadedImage] = useState([]);

    const navigate = useNavigate();
    const context = useContext(UserContext);

    const validatorInput = () => {
        let checker = true;

        setErrorSetTitle(null);
        setErrorTown(null);
        setErrorStreet(null);
        setErrorImageUrl(null);
        setErrorPhone(null);
        setPaymentMethodError(null);
        setErrorPrice(null);
        setErrorChooseService(null);
        setErrorDescription(null);

        if (title === '' || title.length < 5 || title.length > 30) {
            setErrorSetTitle('Your title must be between 5 and 20 characters!');
            checker = false;
        }
        if (town === '' || town.length < 3 || town.length > 20) {
            setErrorTown('Your town must be between 3 and 20 characters!');
            checker = false;
        }
        if (street === '' || street.length < 5 || town.length > 20) {
            setErrorStreet('Your address must be between 5 and 20 characters!');
            checker = false;
        }
        if (imageFile.length === 0 || imageFile === 'file') {
            setErrorImageUrl('Invalid Image data!');
            checker = false;
        }
        if (phone === '' || !phone.match(/^\+?[1-9][0-9]{7,14}$/)) {
            setErrorPhone('Your phone number is invalid!');
            checker = false;
        }
        if (!paymentMethod) {
            setPaymentMethodError('You have not choose your payment method!');
            checker = false;
        }
        if (price === '' || price < 0 || price > 100000) {
            setErrorPrice('Your price is not valid');
            checker = false;
        }
        if (!chooseService) {
            setErrorChooseService('You have not choose your service!');
            checker = false;
        }
        if (description === '' || description.length < 30 || description.length > 300) {
            setErrorDescription('Your description must be between 30 and 300 characters!');
            checker = false;
        }

        return checker;
    }

    const imageUpload = async (files) => {
        const item = files.map((fileItem) => fileItem.file);
        setUploadedImage(item);
        setImageFile(item);
    }

    const imageGet = async (item) => {
        let ourImageUrl = '';
        const allImages = await findAllImages();
        allImages.forEach(image => {
            if (image.name === item[0].name) {
                ourImageUrl = image.url;
            }
        }
        );
        return ourImageUrl;
    };

    const onCreateHandler = async () => {
        const date = new Date();
        const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const formData = new FormData();
        formData.append('file', uploadedImage[0]);

        await uploadImage(formData);
        const imageUrl = await imageGet(uploadedImage);

        let imageName = uploadedImage[0].name;

        const body = {
            title,
            town,
            street,
            phone,
            imageUrl,
            paymentMethod,
            price,
            chooseService,
            description,
            currentDate,
            owner: context.user._id,
            imageName
        };
        const currentService = await createCard(body);

        if (currentService) {
            navigate('/my-services');
        } else {
            console.error('Invalid data!');
        }
    }

    const createFormSubmitHandler = (e) => {
        e.preventDefault();

        const isCheckerValid = validatorInput();

        if (isCheckerValid) {
            onCreateHandler();
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerStyle}>
                <div className={styles.rowContainer}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.firstTitle}>Create Your Service</h1>
                        <h1 className={styles.secondTitle}>We are here to help you</h1>
                        <div className={styles.rowElements}>
                            <div className={styles.rowElementsDesign}>
                                <h1 className={styles.eachNumber}>10+</h1>
                                <h2 className={styles.eachText}>Services</h2>
                            </div>
                            <div className={styles.rowElementsDesign}>
                                <h1 className={styles.eachNumber}>200+</h1>
                                <h2 className={styles.eachText}>Daily Finished Services</h2>
                            </div>
                            <div className={styles.rowElementsDesign}>
                                <h1 className={styles.eachNumber}>10000+</h1>
                                <h2 className={styles.eachText}>Future Clients</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.fillContainer}>
                        <div className={styles.fillContainerDesign}>
                            <form className={styles.formDesign} onSubmit={createFormSubmitHandler}>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        errorInput={errorTitle}
                                        type="text"
                                        name="title"
                                        className={styles.formStyle}
                                        placeholder="Title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        errorInput={errorTown}
                                        type="phone"
                                        name="town"
                                        className={styles.formStyle}
                                        placeholder="Town/City"
                                        value={town}
                                        onChange={(e) => setTown(e.target.value)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        errorInput={errorStreet}
                                        type="text"
                                        name="street"
                                        className={styles.formStyle}
                                        placeholder="Street"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        errorInput={errorPhone}
                                        type="text"
                                        name="phone"
                                        className={styles.formStyle}
                                        placeholder="Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <div className={styles.errorMessage}>
                                        <p>{errorImageUrl}</p>
                                    </div>
                                    <FilePond
                                        name='image'
                                        instantUpload={false}
                                        allowMultiple={false}
                                        files={uploadedImage}
                                        maxFiles={1}
                                        onupdatefiles={(fileItems) => imageUpload(fileItems)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <div className={styles.errorMessage}>
                                        <p>{errorPaymentMethod}</p>
                                    </div>
                                    <select
                                        className={styles.selectOptionsDesign}
                                        value={paymentMethod}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    >
                                        <option value="false">Receive Your Payments via</option>
                                        <option value="Pay Pal">Pay Pal</option>
                                        <option value="Visa/Debit Card">Visa/Debit Card</option>
                                        <option value="Cash">Cash</option>
                                    </select>
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        errorInput={errorPrice}
                                        type="number"
                                        name="price"
                                        className={styles.formStyle}
                                        placeholder="Service Price"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <div className={styles.errorMessage}>
                                        <p>{errorChooseService}</p>
                                    </div>
                                    <select
                                        className={styles.selectOptionsDesign}
                                        value={chooseService}
                                        onChange={(e) => setChooseService(e.target.value)}
                                    >
                                        <option value="false">Choose Your Service</option>
                                        <option value="Building">Building</option>
                                        <option value="Repair">Repair</option>
                                        <option value="Plumbing">Plumbing</option>
                                        <option value="Garden">Garden</option>
                                        <option value="Demolition">Demolition</option>
                                        <option value="Cleaning">Cleaning</option>
                                    </select>
                                </div>

                                <div className={styles.eachGapDesign}>
                                    <div className={styles.errorMessage}>
                                        <p>{errorDescription}</p>
                                    </div>
                                    <textarea
                                        type="description"
                                        name="description"
                                        placeholder="Tell something about yourself/company"
                                        className={styles.descriptionDesign}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <button
                                        className={styles.buttonDesign}
                                        type="submit"
                                    >
                                        Create Service
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;