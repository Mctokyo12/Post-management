import React from 'react';
import { Link } from 'react-router-dom';
Link


const NavBarLogin = () => {
    return (
            <div class="text-end"> 
                <Link to={'/login'} class="btn btn-outline-primary me-2">Login</Link> 
                <Link to={'/signup'}  class="btn btn-primary">Sign-up</Link> 
            </div>
      
    );
};

export default NavBarLogin;