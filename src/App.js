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
import Blog from './components/Blog';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Create from './components/Create';
import SimpleRequest from './components/SimpleRequest';
import Catalog from './components/Catalog';
import MyPosts from './components/MyPosts';
import AdminPanel from './components/Admin';
import LikedPosts from './components/LikedPosts';
import ServiceCard from './components/ServiceCard';
import ErrorPage from './components/Error';

function App() {
    return (
        <div className="app">
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
            <SimpleRequest />
            <Create />
            <Catalog />
            <MyPosts />
            <LikedPosts />
            <AdminPanel />
            <ServiceCard/>
            <Login />
            <Register />
            <ErrorPage />

            <Footer />
        </div >
    );
}

export default App;
