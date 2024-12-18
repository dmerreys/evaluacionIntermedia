import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Calculator from '../components/calculator';

const CalculatorPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authenticated = localStorage.getItem('authenticated');
        if (!authenticated) {
            navigate('/');
        }
    }, [navigate]);

    return (
        <div>
            <Calculator />
        </div>
    );
};

export default CalculatorPage;
