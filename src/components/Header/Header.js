import './Header.css';

const Header = () => {
    return (
        <div id='header' className="jumbotron jumbotron-fluid header-padding">
            <div className="container text-center-1 py-3-h">
                <h1 className="text-primary mb-3-h">Perfect and Fast</h1>
                <h1 className="text-white display-4-header mb-4">Building Services</h1>
                <div className="mx-auto book-style btn-primary-book-style">
                    <button className="btn-1 btn-primary-book px-3">Book Here</button>
                </div>
            </div>
        </div>
    );
}

export default Header;