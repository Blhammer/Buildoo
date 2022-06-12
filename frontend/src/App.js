import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './pages/home/Home';
import ServicesPage from './pages/catalog/Services';
import AdminPage from './pages/admin/Admin';
import TeamPage from './pages/team/Team';
import PricePage from './pages/price/Price';
import BlogPage from './pages/blog/Blog';
import AboutPage from './pages/about/About';
import FeaturesPage from './pages/features/Features';
import LoginPage from './pages/login/Login';
import RegisterPage from './pages/register/Register';
import MyServicesPage from './pages/myServices/MyServices';
import MyLikedServicesPage from './pages/liked/Liked';
import ServiceCardPage from './pages/cardDetails/CardDetails';
import CreatePage from './pages/create/Create';
import EditPage from './pages/edit/Edit';
import RequestPage from './pages/request/Request';
import ErrorPage from './pages/error/Error';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route exact path='/' element={<HomePage />}></Route>

                <Route exact path='/all-services' element={<ServicesPage />}></Route>
                <Route exact path='/all-services/:id' element={<ServiceCardPage />}></Route>

                <Route exact path='/liked' element={<MyLikedServicesPage />}></Route>
                <Route exact path='/liked/:id' element={<ServiceCardPage />}></Route>

                <Route exact path='/my-services' element={<MyServicesPage />}></Route>
                <Route exact path='/my-services/:id' element={<ServiceCardPage />}></Route>
                <Route exact path='/my-services/create' element={<CreatePage />}></Route>
                <Route exact path='/my-services/edit/:id' element={<EditPage />}></Route>

                <Route exact path='/team' element={<TeamPage />}></Route>
                <Route exact path='/price' element={<PricePage />}></Route>
                <Route exact path='/blog' element={<BlogPage />}></Route>
                <Route exact path='/about' element={<AboutPage />}></Route>
                <Route exact path='/features' element={<FeaturesPage />}></Route>

                <Route exact path='/login' element={<LoginPage />}></Route>
                <Route exact path='/register' element={<RegisterPage />}></Route>
                <Route exact path='/admin-panel' element={<AdminPage />}></Route>

                <Route exact path='/book' element={<RequestPage />}></Route>

                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </div >
    );
}

export default App;
