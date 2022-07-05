import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import styles from './Edit.module.css';

import Input from '../Input';
import UserContext from '../../contexts/Context';
import { updateService, uploadImage } from '../../services/requester';

const Edit = (props) => {
    const location = useLocation();
    const data = location.state?.data;

    const [title, setTitle] = useState('');
    const [town, setTown] = useState('');
    const [street, setStreet] = useState('');
    const [phone, setPhone] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [payments, setPayments] = useState('');
    const [price, setPrice] = useState('');
    const [service, setService] = useState('');
    const [description, setDescription] = useState('');

    const [errorTitle, setErrorSetTitle] = useState(null);
    const [errorTown, setErrorTown] = useState(null);
    const [errorStreet, setErrorStreet] = useState(null);
    const [errorPhone, setErrorPhone] = useState(null);
    const [errorPrice, setErrorPrice] = useState(null);

    const [uploadedImage, setUploadedImage] = useState([]);
    const navigate = useNavigate();
    const context = useContext(UserContext);

    const createFormValidation = () => {
        let checker = true;

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
        if (phone === '' || !phone.match(/^\+?[1-9][0-9]{7,14}$/)) {
            setErrorPhone('Your phone number is invalid!');
            checker = false;
        }
        if (price === '' || price < 1 || price > 100000) {
            setErrorPrice('Your price is not valid');
            checker = false;
        }

        return checker;
    }

    const imageHandler = (files) => {
        const item = files.map((fileItem) => fileItem.file);
        const name = item[0].name;
        const currentImageUrl = `https://storage.googleapis.com/buildoo/${name}`;
        setImageUrl(currentImageUrl);
        setUploadedImage(item);
    }

    const onCreateHandler = async () => {
        const date = new Date();
        const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        const formData = new FormData();
        formData.append('file', uploadedImage[0]);
        await uploadImage(formData);

        const body = {
            title,
            town,
            street,
            phone,
            imageUrl,
            payments,
            price,
            service,
            description,
            currentDate,
            owner: context.user._id
        };
        body.userId = data._id;
        const user = await updateService(body);

        if (user) {
            navigate('/my-services');
        } else {
            console.error('Invalid data!');
        }
    }

    const editFormSubmitHandler = (e) => {
        e.preventDefault();

        const isCheckerValid = createFormValidation();

        if (isCheckerValid) {
            onCreateHandler();
        }
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerStyle}>
                <h1 className={styles.firstTitle}>Edit My Service</h1>
                <div className={styles.rowContainer}>
                    <div className={styles.fillContainer}>
                        <div className={styles.fillContainerDesign}>
                            <form className={styles.formDesign} onSubmit={editFormSubmitHandler}>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        errorInput={errorTitle}
                                        type="text"
                                        name="title"
                                        className={styles.formStyle}
                                        placeholder='Title'
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
                                    <FilePond
                                        name='image'
                                        instantUpload={false}
                                        allowMultiple={false}
                                        files={uploadedImage}
                                        maxFiles={1}
                                        onupdatefiles={(fileItems) => imageHandler(fileItems)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <select
                                        className={styles.selectOptionsDesign}
                                        value={payments}
                                        onChange={(e) => setPayments(e.target.value)}
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
                                    <select
                                        className={styles.selectOptionsDesign}
                                        value={service}
                                        onChange={(e) => setService(e.target.value)}
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
                                    <textarea
                                        type="description"
                                        name="description"
                                        className={styles.descriptionDesign}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="Tell something about yourself/company"
                                    />
                                </div>

                                <div>
                                    <button
                                        className={styles.buttonDesign}
                                        type="submit"
                                    >
                                        Edit Service
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

export default Edit;