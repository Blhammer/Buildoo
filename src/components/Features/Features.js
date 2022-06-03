import './Features.css';

const Features = () => {
    return (
        <div className="container-fluid-features mb-5-features features-padding features-bg-color features-of">
            <div className="container-features">
                <div className="row-features align-items-center row-center-features">
                    <div className="col-lg-5">
                        <img className="img-fluid-features w-100" src="img/feature.jpg" alt="" />
                    </div>
                    <div className="col-lg-7 py-5 py-lg-0">
                        <h2 className="text-primary text-uppercase font-weight-bold">Why Choose Us</h2>
                        <h1 className="mb-4">Faster, Safe and Trusted Logistics Services</h1>
                        <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                        <ul className="list-inline">
                            <h2><i className="far fa-dot-circle text-primary mr-3"></i>Best In Industry</h2>
                            <li><h2><i className="far fa-dot-circle text-primary mr-3"></i>Emergency Services</h2></li>
                            <li><h2><i className="far fa-dot-circle text-primary mr-3"></i>24/7 Customer Support</h2></li>
                        </ul>
                        <a href="" className="btn-features btn-primary-features mt-3-features py-2-features px-4">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;