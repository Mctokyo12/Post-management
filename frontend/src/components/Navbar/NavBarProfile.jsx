import React from 'react';

const NavBarProfile = () => {
    return (
        <>
            <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search"> 
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/> 
            </form>
            <div className="dropdown text-end"> 
                <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> 
                    <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/> 
                </a> 
                <ul className="dropdown-menu text-small"> 
                    <li>
                        <a className="dropdown-item" href="#">New project...</a>
                    </li> 
                    <li>
                        <a className="dropdown-item" href="#">Settings</a>
                    </li> 
                    <li>
                        <a className="dropdown-item" href="#">Profile</a>
                    </li> 
                    <li>
                        <hr className="dropdown-divider"/> 
                    </li> 
                    <li>
                        <a className="dropdown-item" href="#">Sign out</a>
                    </li> 
                </ul> 
            </div>
        </>
    );
};

export default NavBarProfile;