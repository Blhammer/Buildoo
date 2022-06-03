import './Login.css';

const Login = () => {
    return (
        <section>
            <div className="container-fluid-login h-custom-login login-padding login-of">
                <div className="row-login d-flex-login justify-content-center-login align-items-center-login h-100-login">
                    <div className="col-md-8-login col-lg-6-login col-xl-5-login">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>

                    <div className="col-md-8-login col-lg-6-login col-xl-4-login offset-xl-1-login">

                        <form id="login-form" method="POST">
                            <p className="text-center-login h3-login fw-bold-login login-padding-login">Login</p>

                            <div className="mb-4-login">
                                <input type="email" id="email" className="form-control form-control-lg"
                                    placeholder="Enter email" />
                                <label className="form-label" htmlFor="email"></label>
                            </div>

                            <div className="mb-3-login">
                                <input type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="password"></label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center-login">
                                <div className="form-check-login mb-0-login">
                                    <input className="form-check-input-b-login me-1" type="checkbox" value="" id="checkbox" />
                                    <label className="form-check-label-l-login remember-padding" htmlFor="checkbox">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center-login text-lg-start mt-4 pt-2-login">
                                <button type="button" className="btn-login btn-primary-login btn-lg-login style-btn-submit-login">Login</button>
                                <p className="normal mt-2-login pt-1-login mb-0-login">Don't have an account? <a href="register"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;