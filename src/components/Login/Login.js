import './Login.css';

const Login = () => {
    return (
        <section>
            <div className="container-fluid h-custom login-padding login-of">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image" />
                    </div>

                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">

                        <form id="login-form" method="POST">
                            <p className="text-center h3 fw-bold login-padding-p">Login</p>

                            <div className="form-outline mb-4">
                                <input type="email" id="email" className="form-control form-control-lg"
                                    placeholder="Enter email" />
                                <label className="form-label" htmlFor="email"></label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="password" className="form-control form-control-lg"
                                    placeholder="Enter password" />
                                <label className="form-label" htmlFor="password"></label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input className="form-check-input-b me-1" type="checkbox" value="" id="checkbox" />
                                    <label className="form-check-label-l remember-padding" htmlFor="checkbox">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn-lg style-btn-submit">Login</button>
                                <p className="normal mt-2 pt-1 mb-0">Don't have an account? <a href="register"
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