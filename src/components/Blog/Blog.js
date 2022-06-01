import './Blog.css';

const Blog = () => {
    return (
        <div className="container-fluid pt-5 blog-padding blog-bg-color blog-of">
            <div className="container">
                <div className="text-center pb-2">
                    <h6 className="text-primary text-uppercase font-weight-bold">Our Blog</h6>
                    <h1 className="mb-4">Latest From Blog</h1>
                </div>
                <div className="row row-center">
                    <div className="col-md-6 mb-5">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/" alt="" />
                            <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                                style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
                                <h4 className="font-weight-bold mb-n1">01</h4>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-secondary" style={{ padding: '30px' }}>
                            <div className="d-flex mb-3">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" style={{ width: '40px', height: '40px' }} src="img/user.jpg" alt="" />
                                    <a className="text-muted ml-2" href="">Lorem Lorem</a>
                                </div>
                                <div className="d-flex align-items-center ml-4">
                                    <i className="far fa-bookmark text-primary"></i>
                                    <a className="text-muted ml-2" href="">Web</a>
                                </div>
                            </div>
                            <h4 className="font-weight-bold mb-3">Kasd tempor diam sea justo dolor</h4>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                            <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/" alt="" />
                            <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                                style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
                                <h4 className="font-weight-bold mb-n1">01</h4>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-secondary" style={{ padding: '30px' }}>
                            <div className="d-flex mb-3">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" style={{ width: '40px', height: '40px' }} src="img/user.jpg" alt="" />
                                    <a className="text-muted ml-2" href="">Lorem Lorem</a>
                                </div>
                                <div className="d-flex align-items-center ml-4">
                                    <i className="far fa-bookmark text-primary"></i>
                                    <a className="text-muted ml-2" href="">Web</a>
                                </div>
                            </div>
                            <h4 className="font-weight-bold mb-3">Kasd tempor diam sea justo dolor</h4>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                            <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 mb-5">
                        <div className="position-relative">
                            <img className="img-fluid w-100" src="img/" alt="" />
                            <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle"
                                style={{ width: '60px', height: '60px', bottom: '-30px', right: '30px' }}>
                                <h4 className="font-weight-bold mb-n1">01</h4>
                                <small className="text-white text-uppercase">Jan</small>
                            </div>
                        </div>
                        <div className="bg-secondary" style={{ padding: '30px' }}>
                            <div className="d-flex mb-3">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" style={{ width: '40px', height: '40px' }} src="img/user.jpg" alt="" />
                                    <a className="text-muted ml-2" href="">Lorem Lorem</a>
                                </div>
                                <div className="d-flex align-items-center ml-4">
                                    <i className="far fa-bookmark text-primary"></i>
                                    <a className="text-muted ml-2" href="">Web</a>
                                </div>
                            </div>
                            <h4 className="font-weight-bold mb-3">Kasd tempor diam sea justo dolor</h4>
                            <p>Dolor sea ipsum ipsum et. Erat duo lorem magna vero dolor dolores. Rebum eirmod no dolor diam dolor amet ipsum. Lorem lorem sea sed diam est lorem magna</p>
                            <a className="border-bottom border-primary text-uppercase text-decoration-none" href="">Read More <i className="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;