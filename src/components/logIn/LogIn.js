import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {

    const loginHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }


    return (
        <form onSubmit={loginHandle} className='w-50 mx-auto mt-5'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <Link to='/signup'>Don't have an account?</Link>
            </div>
            <button type="submit" className="btn btn-primary">Log In</button>
        </form>
    );
};

export default LogIn;