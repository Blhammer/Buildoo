import './Team.css'

const Team = () => {
    return (
        <div className="container-fluid pt-5 team-padding team-bg-color team-of">
            <div className="container">
                <div className="text-center pb-2">
                    <h6 className="text-primary text-uppercase font-weight-bold">Delivery Team</h6>
                    <h1 className="mb-4">Meet Our Delivery Team</h1>
                </div>
                <div className="row row-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="team card position-relative overflow-hidden border-0 mb-5">
                            <img className="card-img-top" src="img/team-1.jpg" alt="" />
                            <div className="card-body text-center p-0">
                                <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                                    <h5 className="font-weight-bold">Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                                    <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-dark btn-social" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team card position-relative overflow-hidden border-0 mb-5">
                            <img className="card-img-top" src="img/team-2.png" alt="" />
                            <div className="card-body text-center p-0">
                                <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                                    <h5 className="font-weight-bold">Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                                    <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-dark btn-social" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team card position-relative overflow-hidden border-0 mb-5">
                            <img className="card-img-top" src="img/team-3.png" alt="" />
                            <div className="card-body text-center p-0">
                                <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                                    <h5 className="font-weight-bold">Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                                    <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-dark btn-social" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="team card position-relative overflow-hidden border-0 mb-5">
                            <img className="card-img-top" src="img/team-4.png" alt="" />
                            <div className="card-body text-center p-0">
                                <div className="team-text d-flex flex-column justify-content-center bg-secondary">
                                    <h5 className="font-weight-bold">Full Name</h5>
                                    <span>Designation</span>
                                </div>
                                <div className="team-social d-flex align-items-center justify-content-center bg-primary">
                                    <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-outline-dark btn-social mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a className="btn btn-outline-dark btn-social" href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;