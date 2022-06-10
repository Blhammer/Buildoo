import styles from './SimpleRequest.module.css';

// Make a request with a registration.

const SimpleRequest = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainContainerStyle}>
                <div className={styles.rowContainer}>
                    <div className={styles.textContainer}>
                        <h1 className={styles.firstTitle}>Make Your Request</h1>
                        <h1 className={styles.secondTitle}>We are here to help you</h1>
                        <div className={styles.rowElements}>
                            <div className={styles.rowElementsDesign}>
                                <h1 className={styles.eachNumber}>225</h1>
                                <h2 className={styles.eachText}>Skilled Experts</h2>
                            </div>
                            <div className={styles.rowElementsDesign}>
                                <h1 className={styles.eachNumber}>1050</h1>
                                <h2 className={styles.eachText}>Happy Clients</h2>
                            </div>
                            <div className={styles.rowElementsDesign}>
                                <h1 className={styles.eachNumber}>2500</h1>
                                <h2 className={styles.eachText}>Complete Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className={styles.fillContainer}>
                        <div className={styles.fillContainerDesign}>
                            <form className={styles.formDesign}>
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
                                    <input type="date" className={styles.formStyle} placeholder="Date" required="required" />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <input type="time" className={styles.formStyle} placeholder="Time" required="required" />
                                </div>
                                <div className={styles.eachGapDesign}>
                                    <select className={styles.selectOptionsDesign}>
                                        <option value="false">Select A Payment Method</option>
                                        <option value="1">Pay Pal</option>
                                        <option value="2">Visa/Debit Card</option>
                                        <option value="3">Cash</option>
                                    </select>
                                </div>

                                <div className={styles.eachGapDesign}>
                                    <select className={styles.selectOptionsDesign}>
                                        <option value="false">Select A Service</option>
                                        <option value="1">Building</option>
                                        <option value="2">Repair</option>
                                        <option value="3">Plumbing</option>
                                        <option value="4">Garden</option>
                                        <option value="5">Demolition</option>
                                        <option value="6">Cleaning</option>
                                    </select>
                                </div>

                                <div className={styles.eachGapDesign}>
                                    <textarea type="description" className={styles.descriptionDesign} placeholder="Short Description - optional" />
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

export default SimpleRequest;