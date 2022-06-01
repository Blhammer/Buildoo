import './Topbar.css';

const Topbar = () => {
    return (
        <div className="container-fluid bg-dark topbar-padding">
            <div className="row py-2 px-lg-3">
                <div className="col-topbar text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center text-white">
                        <a href="/contacts"><small><i className="text-white fa fa-phone-alt mr-2"></i>Contact us: +359 813 17 3631</small></a>
                        <small className="px-3">|</small>
                        <a href="/contacts"><small><i className="text-white fa fa-envelope mr-2"></i>buildoo@gmail.com</small></a>
                    </div>
                </div>

                <div className="col-topbar text-center text-lg-right">
                    <div className="d-inline-flex align-items-center text-white">
                        <a className="text-white text-white-links-f px-0" href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <small className="px-3">|</small>
                        <a className="text-white text-white-links-y px-0" href="https://www.youtube.com/">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;