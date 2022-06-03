import './PricingPlan.css';

const PricingPlan = () => {
    return (
        <div className="container-fluid pt-5-plan price-padding price-bg-color price-of">
            <div className="container">
                <div className="text-center-price pb-2-plan">
                    <h6 className="text-primary text-uppercase font-weight-bold">Pricing Plan</h6>
                    <h1 className="mb-4">Affordable Pricing Packages</h1>
                </div>
                <div className="row-plan text-center-price row-center">
                    <div className="col-md-4 mb-5-plan">
                        <div className="bg-secondary-plan">
                            <div className="text-center-price p-4-plan">
                                <h1 className="display-4-plan mb-0-plan">
                                    <small className="align-top text-muted font-weight-medium money-sign">$</small>
                                    12<small className="align-bottom text-muted font-weight-medium month-sign">/Mo</small>
                                </h1>
                            </div>
                            <div className="bg-primary-plan text-center-price p-4-plan">
                                <h3 className="m-0">lorem 1</h3>
                            </div>
                            <div className="d-flex flex-column align-items-center py-4-plan">
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className="btn-plan btn-primary-price py-2-plan px-4-plan my-2-plan">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5-plan">
                        <div className="bg-secondary-plan">
                            <div className="text-center-price p-4-plan">
                                <h1 className="display-4-plan mb-0-plan">
                                    <small className="align-top text-muted font-weight-medium money-sign">$</small>
                                    52<small className="align-bottom text-muted font-weight-medium month-sign">/Mo</small>
                                </h1>
                            </div>
                            <div className="bg-primary-plan text-center-price p-4-plan">
                                <h3 className="m-0-plan">lorem 1</h3>
                            </div>
                            <div className="d-flex flex-column align-items-center py-4-plan">
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className="btn-plan btn-primary-price py-2-plan px-4-plan my-2-plan">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5-plan">
                        <div className="bg-secondary-plan">
                            <div className="text-center-price p-4-plan">
                                <h1 className="display-4-plan mb-0-plan">
                                    <small className="align-top text-muted font-weight-medium money-sign">$</small>
                                    1765<small className="align-bottom text-muted font-weight-medium month-sign">/Mo</small>
                                </h1>
                            </div>
                            <div className="bg-primary-plan text-center-price p-4-plan">
                                <h3 className="m-0">lorem 1</h3>
                            </div>
                            <div className="d-flex flex-column align-items-center py-4-plan">
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className="btn-plan btn-primary-price py-2-plan px-4-plan my-2-plan">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingPlan;