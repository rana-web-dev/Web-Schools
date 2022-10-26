import React from 'react';
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark py-3 border-bottom">
            <div className="container-fluid d-flex justify-content-between">
                <div className='d-flex align-items-center'>
                    <img src='https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2010/wikagraphic201024795.jpg' alt="Logo" style={{width:50}}/>
                        <h5>WEB SCHOOL</h5>
                </div>
                <div>
                    <Link to='*' className='me-3 text-decoration-none'>Home</Link>
                    <Link to='*' className='me-3 text-decoration-none'>Courses</Link>
                    <Link to='*' className='me-3 text-decoration-none'>FAQ</Link>
                    <Link to='*' className='me-3 text-decoration-none'>Blog</Link>
                    <Link to='*' className='me-3 text-decoration-none'>Dark</Link>
                    <Link to='/login' className='me-3 text-decoration-none'>Log In</Link>
                    {/* add user icon */}
                    <Link to='' className='cursor-pointer' title='user'>
                        <i class="fa fav-solid fa-user"></i>
                    </Link>
                </div>
            </div>
        </nav>


    );
};

export default Nav;