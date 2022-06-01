import './PricingPlan.css';

const PricingPlan = () => {
    return (
        <div className="container-fluid pt-5 price-padding price-bg-color price-of">
            <div className="container">
                <div className="text-center pb-2">
                    <h6 className="text-primary text-uppercase font-weight-bold">Pricing Plan</h6>
                    <h1 className="mb-4">Affordable Pricing Packages</h1>
                </div>
                <div className="row text-center row-center">
                    <div className="col-md-4 mb-5">
                        <div className="bg-secondary">
                            <div className="text-center p-4">
                                <h1 className="display-4 mb-0">
                                    <small className="align-top text-muted font-weight-medium money-sign">$</small>
                                    12<small className="align-bottom text-muted font-weight-medium month-sign">/Mo</small>
                                </h1>
                            </div>
                            <div className="bg-primary text-center p-4">
                                <h3 className="m-0">lorem 1</h3>
                            </div>
                            <div className="d-flex flex-column align-items-center py-4">
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="bg-secondary">
                            <div className="text-center p-4">
                                <h1 className="display-4 mb-0">
                                    <small className="align-top text-muted font-weight-medium money-sign">$</small>
                                    52<small className="align-bottom text-muted font-weight-medium month-sign">/Mo</small>
                                </h1>
                            </div>
                            <div className="bg-primary text-center p-4">
                                <h3 className="m-0">lorem 1</h3>
                            </div>
                            <div className="d-flex flex-column align-items-center py-4">
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="bg-secondary">
                            <div className="text-center p-4">
                                <h1 className="display-4 mb-0">
                                    <small className="align-top text-muted font-weight-medium money-sign">$</small>
                                    1765<small className="align-bottom text-muted font-weight-medium month-sign">/Mo</small>
                                </h1>
                            </div>
                            <div className="bg-primary text-center p-4">
                                <h3 className="m-0">lorem 1</h3>
                            </div>
                            <div className="d-flex flex-column align-items-center py-4">
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <p>lorem 1</p>
                                <a href="" className="btn btn-primary py-2 px-4 my-2">Order Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PricingPlan;