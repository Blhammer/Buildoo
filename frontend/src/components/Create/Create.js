import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

import styles from './Create.module.css';

import Input from '../Input/Input';
// import UserContext from '../../contexts/Context';
import { createCard, uploadImage } from '../../services/requester';

const Create = () => {
    const [title, setTitle] = useState('');
    const [town, setTown] = useState('');
    const [street, setStreet] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [payments, setPayments] = useState('');
    const [service, setService] = useState('');
    const [description, setDescription] = useState('');
    
    const [uploadedImage, setUploadedImage] = useState([]);

    const navigate = useNavigate();
    // const context = useContext(UserContext);

    const imageHandler = (files) => {
        const item = files.map((fileItem) => fileItem.file);
        setUploadedImage(item);
        setImageUrl(item[0]);
    }

    const createSubmitHandler = async (e) => {
        e.preventDefault();

        const date = new Date();
        const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

        if (title === '' || town === '' || street === '' || payments === '' || service === '' || description === '') {
            console.error('Invalid data!');
            return;
        }

        const formData = new FormData();
        formData.append('file', uploadedImage[0]); 
        await uploadImage(formData);

        const body = {
            title,
            town,
            street,
            imageUrl: imageUrl.name,
            payments,
            service,
            description,
            currentDate
        };

        const user = await createCard(body);
        console.log(user);

        if (user) {
            navigate('/my-services');
        } else {
            console.error('Invalid data!');
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
                            <form className={styles.formDesign} onSubmit={createSubmitHandler}>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        type="text"
                                        name="title"
                                        className={styles.formStyle}
                                        placeholder="Title"
                                        required="required"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        type="tel"
                                        name="town"
                                        className={styles.formStyle}
                                        placeholder="Town/City"
                                        required="required"
                                        value={town}
                                        onChange={(e) => setTown(e.target.value)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <Input
                                        type="text"
                                        name="street"
                                        className={styles.formStyle}
                                        placeholder="Street"
                                        required="required"
                                        value={street}
                                        onChange={(e) => setStreet(e.target.value)}
                                    />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <div className={styles.uploadStyle}>
                                        <FilePond
                                            name='image'
                                            instantUpload={false}
                                            allowMultiple={false}
                                            files={uploadedImage}
                                            onupdatefiles={(fileItems) => imageHandler(fileItems)}
                                        />
                                    </div>
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