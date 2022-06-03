import './Testimonials.css';

const Testimonials = () => {
    return (
        <div className="container-fluid-ttm py-5-ttm testm-padding testm-bg-color testm-of">
            <div className="container-ttm">
                <div className="text-center-ttm pb-2-ttm">
                    <h6 className="text-primary-ttm text-uppercase-ttm font-weight-bold-ttm">Testimonial</h6>
                    <h1 className="mb-4-ttm">Our Clients Say</h1>
                </div>
                <div className="owl-carousel testimonial-carousel">
                    <div className="position-relative bg-secondary p-4">
                        <i className="fa fa-3x fa-quote-right text-primary-ttm position-absolute" style={{ top: '-6px', right: '0' }}></i>
                        <div className="d-flex align-items-center mb-3">
                            <img className="img-fluid rounded-circle" src="img/team-1.jpg" style={{ width: '60px', height: '60px' }} alt="" />
                            <div className="ml-3">
                                <h3 className="font-weight-semi-bold m-0">Client Name</h3>
                                <small>- Profession</small>
                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                    </div>
                    <div className="position-relative bg-secondary p-4">
                        <i className="fa fa-3x fa-quote-right text-primary-ttm position-absolute" style={{ top: '-6px', right: '0' }}></i>
                        <div className="d-flex align-items-center mb-3">
                            <img className="img-fluid rounded-circle" src="img/team-1.jpg" style={{ width: '60px', height: '60px' }} alt="" />
                            <div className="ml-3">
                                <h3 className="font-weight-semi-bold m-0">Client Name</h3>
                                <small>- Profession</small>
                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                    </div>
                    <div className="position-relative bg-secondary p-4">
                        <i className="fa fa-3x fa-quote-right text-primary-ttm position-absolute" style={{ top: '-6px', right: '0' }}></i>
                        <div className="d-flex align-items-center mb-3">
                            <img className="img-fluid rounded-circle" src="img/team-1.jpg" style={{ width: '60px', height: '60px' }} alt="" />
                            <div className="ml-3">
                                <h3 className="font-weight-semi-bold m-0">Client Name</h3>
                                <small>- Profession</small>
                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                    </div>
                    <div className="position-relative bg-secondary p-4">
                        <i className="fa fa-3x fa-quote-right text-primary-ttm position-absolute" style={{ top: '-6px', right: '0' }}></i>
                        <div className="d-flex align-items-center mb-3">
                            <img className="img-fluid rounded-circle" src="img/team-1.jpg" style={{ width: '60px', height: '60px' }} alt="" />
                            <div className="ml-3">
                                <h3 className="font-weight-semi-bold m-0">Client Name</h3>
                                <small>- Profession</small>
                            </div>
                        </div>
                        <p className="m-0">Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr clita lorem. Dolor ipsum sanct clita</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;