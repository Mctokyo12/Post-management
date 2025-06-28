import React from 'react';
import RegisterForm from '../../components/Login/RegisterForm';
import Navbar from '../../components/Navbar';


const Register = () => {
    return (
        <> 
            <Navbar page={'auth'}/>
            <RegisterForm/>
        </>
    );
};

export default Register;