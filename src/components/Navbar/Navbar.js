import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid p-0 nav-overflow">
                <nav className="navbar navbar-expand-lg nav-bg navbar-light py-3 py-lg-0 px-lg-2">
                    <a href="/" className="navbar-brand ml-lg-3">
                        <h1 className="m-0 display-4 text-uppercase text-primary"><i className="mr-0"></i>Buildoo</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between px-lg-2" id="navbar-collapse">
                        <div className="navbar-nav m-auto py-0">
                            <div className="nav-item navbar-nav">
                                <a href="/" className="nav-link">Home</a>
                                <a href="/service" className="nav-link">Services</a>
                                <a href="/team" className="nav-link">Team</a>
                                <a href="/price" className="nav-link">Price</a>
                                <a href="/blog" className="nav-link">Blog</a>
                                <a href="/contacts" className="nav-link">Contacts</a>
                                <a href="/about" className="nav-link">About Us</a>
                            </div>

                            <div className="nav-item navbar-user">
                                <a href="/login" className="nav-link user-btn">Login</a>
                                <a href="/register" className="nav-link user-btn">Register</a>
                                <a href="/logout" className="nav-link user-btn">Logout</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;