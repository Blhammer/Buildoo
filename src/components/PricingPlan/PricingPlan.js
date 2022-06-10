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
                                    12<small className={styles.monthMoney}>/Mo</small>
                                </h1>
                            </div>
                            <div className={styles.titlePricingPlan}>
                                <h3 className={styles.titlePricingPlanMargin}>lorem 1</h3>
                            </div>
                            <div className={styles.package}>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className={styles.buttonStyle}>Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachContainer}>
                        <div className={styles.eachContainerDesign}>
                            <div className={styles.priceDesign}>
                                <h1 className={styles.hPriceDesign}>
                                    <small className={styles.signMoney}>$</small>
                                    52<small className={styles.monthMoney}>/Mo</small>
                                </h1>
                            </div>
                            <div className={styles.titlePricingPlan}>
                                <h3 className={styles.titlePricingPlanMargin}>lorem 1</h3>
                            </div>
                            <div className={styles.package}>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className={styles.buttonStyle}>Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.eachContainer}>
                        <div className={styles.eachContainerDesign}>
                            <div className={styles.priceDesign}>
                                <h1 className={styles.hPriceDesign}>
                                    <small className={styles.signMoney}>$</small>
                                    1765<small className={styles.monthMoney}>/Mo</small>
                                </h1>
                            </div>
                            <div className={styles.titlePricingPlan}>
                                <h3 className={styles.titlePricingPlanMargin}>lorem 1</h3>
                            </div>
                            <div className={styles.package}>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className={styles.buttonStyle}>Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingPlan;