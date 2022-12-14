import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './nav.css';


const Nav = () => {

    const [open, setOpen] = useState(false);

    

    return (
        <nav className="navbar navbar-expand-sm navbar-dark py-3 border-bottom">
            <div className="container-fluid d-flex justify-content-between">
                <div className='d-flex align-items-center justify-content-between w100'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img src='https://images.assetsdelivery.com/compings_v2/wikagraphic/wikagraphic2010/wikagraphic201024795.jpg' alt="Logo" style={{ width: 50 }} />
                        <h5>WEB SCHOOL</h5>
                    </div>
                </div>
                <div className='nav-link'>
                    <Link to='/home' className='me-3 text-decoration-none'>Home</Link>
                    <Link to='/courses' className='me-3 text-decoration-none'>Courses</Link>
                    <Link to='/faq' className='me-3 text-decoration-none'>FAQ</Link>
                    <Link to='/blog' className='me-3 text-decoration-none'>Blog</Link>

                    {
                        open ?
                            <Link to='' className='me-3 text-decoration-none' onClick={() => setOpen(!open)}>Dark</Link>
                            : <Link to='' className='me-3 text-decoration-none' onClick={() => setOpen(!open)}>Light</Link>
                    }

                    <Link to='/signup' className='me-3 text-decoration-none'>Sign Up</Link>
                    <Link to='/login' className='me-3 text-decoration-none'>Log In</Link>
                    <Link to='' className='cursor-pointer' title='user'>
                        <i className="fa fav-solid fa-user"></i>
                    </Link>
                </div>
            </div>
        </nav>


    );
};

export default Nav;