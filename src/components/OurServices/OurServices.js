import './OurServices.css';

const Services = () => {
    return (
        <div className="container-fluid pt-5 services-padding services-bg-color services-of">
            <div className="container">
                <div className="text-center pb-2">
                    <h2 className="text-primary text-uppercase font-weight-bold">Our Services</h2>
                    <h1 className="mb-4">Best Repairing and Maintenance Services</h1>
                </div>
                <div className="row pb-3 row-center">
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-plane text-dark pr-3"></i>
                            <h2 className="text-white font-weight-medium m-0">Diam amet eos</h2>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-ship text-dark pr-3"></i>
                            <h2 className="text-white font-weight-medium m-0">Diam amet eos</h2>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-truck text-dark pr-3"></i>
                            <h2 className="text-white font-weight-medium m-0">Diam amet eos</h2>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center mb-5">
                        <div className="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                            <i className="fa fa-2x fa-store text-dark pr-3"></i>
                            <h2 className="text-white font-weight-medium m-0">Diam amet eos</h2>
                        </div>
                        <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                        <a className="border-bottom text-decoration-none" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;