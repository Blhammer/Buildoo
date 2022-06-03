import './Register.css';

const Register = () => {
    return (
        <section>
            <div className="container-fluid h-custom reg-padding req-of">
                <div className="row d-flex justify-content-center-reg align-items-center-reg h-100">
                    <div className="col-lg-12 col-xl-10">
                        <div className="text-black">
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center-reg">

                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center-reg h3 fw-bold reg-padding-p">Sign up</p>

                                        <div className="mx-1 mx-md-5">

                                            <form id="register-form" method="POST">

                                                <div className="d-flex flex-row align-items-center-reg mb-2">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw-reg btn-ic-reg"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="fName" className="form-control" placeholder="First name" />
                                                        <label className="form-label" htmlFor='fName'></label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center-reg mb-2">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw-reg btn-ic-reg"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="text" id="lName" className="form-control" placeholder="Last name" />
                                                        <label className="form-label" htmlFor='lName'></label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center-reg mb-2">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw-reg btn-ic-reg"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="Email" className="form-control" placeholder="Your Email" />
                                                        <label className="form-label" htmlFor="Email"></label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center-reg mb-2">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw-reg btn-ic-reg"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="Password" className="form-control" placeholder="Your Password" />
                                                        <label className="form-label" htmlFor="Password"></label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center-reg mb-2">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw-reg btn-ic-reg"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="repass" className="form-control" placeholder="Your Repeated Password" />
                                                        <label className="form-label" htmlFor="repass"></label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-left mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="Terms" />
                                                    <div className="d-flex form-check-label-r">
                                                        <label htmlFor="Terms">
                                                            I agree all statements in <a href="#!">Terms of service</a>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center-reg mx-4 mb-3 mb-lg-2 p-3">
                                                    <button type="button" className="btn-reg btn-primary-reg btn-lg-reg">Register</button>
                                                </div>
                                                <div className="text-center-reg text-lg-start mt-0 pt-0">
                                                    <p className="normal mt-2 pt-1 mb-0">You have an account? <a href="/login"
                                                        className="link-danger">Login</a></p>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center-reg order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;