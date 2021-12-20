import React from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';
import './Login.css'
import BrandLogo from '../../Components/BrandLogo/BrandLogo';

function Login() {
    return (
        <div className="container mx-auto page-wrapper">
            <BrandLogo/>
            <LoginForm/>
        </div>
    )}

export default Login;