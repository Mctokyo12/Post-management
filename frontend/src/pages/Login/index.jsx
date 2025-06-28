import React from 'react';
import LoginForm from '../../components/Login/LoginForm';
import Navbar from '../../components/Navbar';

const Login = () => {
    return (
        <>
            <Navbar page={'auth'}/>
            <LoginForm/>
        </>
    );
};

export default Login;