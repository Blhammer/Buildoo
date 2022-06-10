import styles from './Create.module.css';

const Create = () => {
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
                            <form className={styles.formDesign}>
                                <div className={styles.eachGapDesign}>
                                    <input type="text" className={styles.formStyle} placeholder="Title" required="required" />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <input type="email" className={styles.formStyle} placeholder="Your Email" required="required" />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <input type="tel" className={styles.formStyle} placeholder="Town/City" required="required" />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <input type="text" className={styles.formStyle} placeholder="Street" required="required" />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <div className={styles.uploadStyle}>
                                        <input type="file" id="myFile" name="filename"></input>
                                    </div>
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <select className={styles.selectOptionsDesign}>
                                        <option value="false">Receive Your Payments via</option>
                                        <option value="1">Pay Pal</option>
                                        <option value="2">Visa/Debit Card</option>
                                        <option value="3">Cash</option>
                                    </select>
                                </div>

                                <div className={styles.eachGapDesign}>
                                    <select className={styles.selectOptionsDesign}>
                                        <option value="false">Choose Your Service</option>
                                        <option value="1">Building</option>
                                        <option value="2">Repair</option>
                                        <option value="3">Plumbing</option>
                                        <option value="4">Garden</option>
                                        <option value="5">Demolition</option>
                                        <option value="6">Cleaning</option>
                                    </select>
                                </div>

                                <div className={styles.eachGapDesign}>
                                    <textarea type="description" className={styles.descriptionDesign} placeholder="Tell something about yourself/company" />
                                </div>

                                <div>
                                    <button className={styles.buttonDesign} type="submit">Finish Request</button>
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