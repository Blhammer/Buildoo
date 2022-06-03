import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="container-fluid-footer bg-dark text-white mt-5 px-sm-5-footer footer-overflow footer-padding">
                <div className="row-f pt-5">
                    <div className="row-f col-lg-7-footer col-md-6-footer">
                        <div className="col-md-6-footer mb-5-footer">
                            <h3 className="text-primary mb-4">About Buildoo</h3>
                            <p><i className="fa fa-map-marker-alt mr-2"></i>Sofia, Bulgaria</p>
                            <p><i className="fa fa-phone-alt mr-2"></i>+359 813 17 3631</p>
                            <p><i className="fa fa-envelope mr-2"></i>buildoo@gmail.com</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="btn-footer btn-outline-light btn-social-footer mr-2" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn-footer btn-outline-light btn-social-footer mr-2" href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6-footer mb-5-footer">
                            <h3 className="text-primary mb-4">Site Links</h3>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white mb-2" href="/"><i className="fa fa-angle-right mr-2"></i>Home</a>
                                <a className="text-white mb-2" href="/services"><i className="fa fa-angle-right mr-2"></i>Our Services</a>
                                <a className="text-white mb-2" href="/blog"><i className="fa fa-angle-right mr-2"></i>Our Blog</a>
                                <a className="text-white mb-2" href="/price"><i className="fa fa-angle-right mr-2"></i>Pricing Plan</a>
                                <a className="text-white mb-2" href="/contacts"><i className="fa fa-angle-right mr-2"></i>Contact Us</a>
                                <a className="text-white mb-2" href="/about"><i className="fa fa-angle-right mr-2"></i>About Us</a>
                            </div>
                        </div>
                        <div className="col-md-6-footer mb-5-footer">
                            <h3 className="text-primary mb-4">Site Links</h3>
                            <div className="d-flex mr-2 flex-column justify-content-start mt-4">
                                <div id="map">
                                    <img src="img/logo.png"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5-footer">
                <div className="row-f">
                    <div className="col-lg-6 text-center-footer text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">&copy; 2022 <a href="/">Buildoo</a> All Rights Reserved.</p>
                    </div>

                    <div className="col-lg-6 text-center-footer text-md-right privacy-padding">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="/privacy">Privacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="/terms">Terms</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="/faqs">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white py-0" href="/help">Help</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;