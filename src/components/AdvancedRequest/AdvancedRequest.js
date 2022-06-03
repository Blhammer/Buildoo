import './AdvancedRequest.css';

const AdvancedRequest = () => {
    return (
        <div className="container-fluid-adv my-5-adv req-padding req-bg-color req-of">
            <div className="container-adv">
                <div className="row-adv align-items-center-adv row-center-adv">
                    <div className="col-lg-7-adv py-5-adv py-lg-0-adv">
                        <h2 className="text-primary-adv text-uppercase font-weight-bold-adv">Get A Quote</h2>
                        <h1 className="mb-4-adv">Request A Free Quote</h1>
                        <p className="mb-4-adv">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div className="row-adv row-center-adv">
                            <div className="col-sm-4-adv">
                                <h1 className="text-primary-adv mb-2-adv" data-toggle="counter-up">225</h1>
                                <h2 className="font-weight-bold-adv mb-4-adv">SKilled Experts</h2>
                            </div>
                            <div className="col-sm-4-adv">
                                <h1 className="text-primary-adv mb-2-adv" data-toggle="counter-up">1050</h1>
                                <h2 className="font-weight-bold-adv mb-4-adv">Happy Clients</h2>
                            </div>
                            <div className="col-sm-4-adv">
                                <h1 className="text-primary-adv mb-2-adv" data-toggle="counter-up">2500</h1>
                                <h2 className="font-weight-bold-adv mb-4-adv">Complete Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5-adv">
                        <div className="bg-primary-adv py-0-adv px-0-adv px-sm-5-adv">
                            <form className="py-5-adv">
                                <div className="form-group-adv">
                                    <input type="text" className="form-control-adv border-0-adv p-4-adv" placeholder="First Name" required="required" />
                                </div>
                                <div className="form-group-adv">
                                    <input type="text" className="form-control-adv border-0-adv p-4-adv" placeholder="Last Name" required="required" />
                                </div>
                                <div className="form-group-adv">
                                    <input type="email" className="form-control-adv border-0-adv p-4-adv" placeholder="Your Email" required="required" />
                                </div>
                                <div className="form-group-adv">
                                    <input type="tel" className="form-control-adv border-0-adv p-4-adv" placeholder="Town/City" required="required" />
                                </div>
                                <div className="form-group-adv">
                                    <input type="text" className="form-control-adv border-0-adv p-4-adv" placeholder="Street" required="required" />
                                </div>
                                <div className="form-group-adv">
                                    <input type="date" className="form-control-adv border-0-adv p-4-adv" placeholder="Date" required="required" />
                                </div>
                                <div className="form-group-adv">
                                    <input type="time" className="form-control-adv border-0-adv p-4-adv" placeholder="Time" required="required" />
                                </div>
                                <div className="form-group-adv">
                                    <select className="custom-select-adv border-0-adv px-4-adv payment-style">
                                        <option value="false">Select A Payment Method</option>
                                        <option value="1">Pay Pal</option>
                                        <option value="2">Visa/Debit Card</option>
                                        <option value="3">Cash</option>
                                    </select>
                                </div>

                                <div className="form-group-adv">
                                    <select className="custom-select-adv border-0-adv px-4-adv service-style">
                                        <option value="false">Select A Service</option>
                                        <option value="1">Building</option>
                                        <option value="2">Repair</option>
                                        <option value="3">Plumbing</option>
                                        <option value="4">Garden</option>
                                        <option value="5">Demolition</option>
                                        <option value="6">Cleaning</option>
                                    </select>
                                </div>

                                <div className="form-group-adv">
                                    <textarea type="description" className="form-control-adv border-0-adv p-3-adv" placeholder="Short Description - optional" />
                                </div>

                                <div>
                                    <button className="btn-req btn-dark-req btn-block-req border-0-adv py-3-adv" type="submit">Finish Request</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdvancedRequest;