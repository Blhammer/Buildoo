import './AdvancedRequest.css';

const AdvancedRequest = () => {
    return (
        <div className="container-fluid my-5 req-padding req-bg-color req-of">
            <div className="container">
                <div className="row align-items-center row-center">
                    <div className="col-lg-7 py-5 py-lg-0">
                        <h2 className="text-primary text-uppercase font-weight-bold">Get A Quote</h2>
                        <h1 className="mb-4">Request A Free Quote</h1>
                        <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <div className="row row-center">
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">225</h1>
                                <h2 className="font-weight-bold mb-4">SKilled Experts</h2>
                            </div>
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">1050</h1>
                                <h2 className="font-weight-bold mb-4">Happy Clients</h2>
                            </div>
                            <div className="col-sm-4">
                                <h1 className="text-primary mb-2" data-toggle="counter-up">2500</h1>
                                <h2 className="font-weight-bold mb-4">Complete Projects</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="bg-primary py-0 px-0 px-sm-5">
                            <form className="py-5">
                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="First Name 1" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Last Name 1" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control border-0 p-4" placeholder="Your Email 1" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control border-0 p-4" placeholder="Town/City 1" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Street 1" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="date" className="form-control border-0 p-4" placeholder="Date 1" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="time" className="form-control border-0 p-4" placeholder="Time 1" required="required" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                                        <option value="true">Select A Payment Method</option>
                                        <option value="1">Pay Pal</option>
                                        <option value="2">Visa/Debit Card</option>
                                        <option value="3">Cash</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <select className="custom-select border-0 px-4" style={{ height: '47px' }}>
                                        <option value="true">Select A Service</option>
                                        <option value="1">Building</option>
                                        <option value="2">Repair</option>
                                        <option value="3">Plumbing</option>
                                        <option value="4">Garden</option>
                                        <option value="5">Demolition</option>
                                        <option value="6">Cleaning</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <textarea type="description" className="form-control border-0 p-3" placeholder="Short Description - optional" />
                                </div>

                                <div>
                                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Finish Request</button>
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