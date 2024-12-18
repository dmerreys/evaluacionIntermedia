import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CalculatorPage from './pages/CalculatorPage';

const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
    </Router>
);

export default AppRouter;
