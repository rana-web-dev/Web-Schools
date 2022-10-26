import React from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../components/authProvider/AuthProvider';

const SignUp = () => {

    const signUpHandle = (event) => {
        event.preventDefault();
        
    }


    return (
        <form onSubmit={signUpHandle} className='w-50 mt-5 mx-auto'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                <input type="text" name='name'  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Your Password</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <Link to='/login'>Have an account?</Link>
            </div>
            <button type="submit" className="btn btn-primary">Sig Up</button>
        </form>
    );
};

export default SignUp;