import styles from './PricingPlan.module.css';

const PricingPlan = () => {
    return (
        <div className={styles.containerPlan}>
            <div className={styles.containerDesign}>
                <div className={styles.title}>
                    <h1 className={styles.titleDesign}>Pricing Plan</h1>
                    <h2 className={styles.secondTitle}>Affordable Pricing Packages</h2>
                </div>
                <div className={styles.priceContainer}>
                    <div className={styles.eachContainer}>
                        <div className={styles.eachContainerDesign}>
                            <div className={styles.priceDesign}>
                                <h1 className={styles.hPriceDesign}>
                                    <small className={styles.signMoney}>$</small>
                                    150<small className={styles.monthMoney}>/Mo</small>
                                </h1>
                            </div>
                            <div className={styles.titlePricingPlan}>
                                <h3 className={styles.titlePricingPlanMargin}>Building</h3>
                            </div>
                            <div className={styles.package}>
                                <p>Houses</p>
                                <p>Garages</p>
                                <p>Stores</p>
                                <p>Flats</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachContainer}>
                        <div className={styles.eachContainerDesign}>
                            <div className={styles.priceDesign}>
                                <h1 className={styles.hPriceDesign}>
                                    <small className={styles.signMoney}>$</small>
                                    90<small className={styles.monthMoney}>/Mo</small>
                                </h1>
                            </div>
                            <div className={styles.titlePricingPlan}>
                                <h3 className={styles.titlePricingPlanMargin}>Plumber</h3>
                            </div>
                            <div className={styles.package}>
                                <p>Water tank repair</p>
                                <p>System Cleaning</p>
                                <p>Install Washing Machines</p>
                                <p>Showers Maintenance</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachContainer}>
                        <div className={styles.eachContainerDesign}>
                            <div className={styles.priceDesign}>
                                <h1 className={styles.hPriceDesign}>
                                    <small className={styles.signMoney}>$</small>
                                    40<small className={styles.monthMoney}>/Mo</small>
                                </h1>
                            </div>
                            <div className={styles.titlePricingPlan}>
                                <h3 className={styles.titlePricingPlanMargin}>Repair</h3>
                            </div>
                            <div className={styles.package}>
                                <p>Computers</p>
                                <p>Laptops</p>
                                <p>Phones</p>
                                <p>TV</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachContainer}>
                        <div className={styles.eachContainerDesign}>
                            <div className={styles.priceDesign}>
                                <h1 className={styles.hPriceDesign}>
                                    <small className={styles.signMoney}>$</small>
                                    300<small className={styles.monthMoney}>/Mo</small>
                                </h1>
                            </div>
                            <div className={styles.titlePricingPlan}>
                                <h3 className={styles.titlePricingPlanMargin}>Garden</h3>
                            </div>
                            <div className={styles.package}>
                                <p>Water plants</p>
                                <p>Designing and building</p>
                                <p>Digging</p>
                                <p>Leaves</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingPlan;