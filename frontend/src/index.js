import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import AuthProcess from './contexts/Auth';

import reportWebVitals from './reportWebVitals';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProcess>
                <App />
            </AuthProcess>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
