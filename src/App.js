import './App.css';

import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import AdvancedRequest from './components/AdvancedRequest';
import Services from './components/OurServices';
import Features from './components/Features';
import PricingPlan from './components/PricingPlan';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <div className="section">
            <Topbar />
            <Navbar />

            <Header />
            <Services />
            <Team />
            <PricingPlan />
            <Blog />
            <About />
            <Features />
            <AdvancedRequest />
            <Register />
            <Testimonials />
            <Login />

            <Footer />
        </div >
    );
}

export default App;
