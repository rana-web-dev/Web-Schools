
import { Link } from 'react-router-dom';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/Firebase';
import { useState } from 'react';

const auth = getAuth(app);


const SignUp = () => {

    const [error, setError] = useState();


    const signUpHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset();
        console.log(photoURL, email, password)


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                
            })
            .catch(error => {
                setError(error)
            })
    }


    return (
        <form onSubmit={signUpHandle} className='w-50 mt-5 mx-auto'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                <input type="text" name='name' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Photo URL</label>
                <input type="url" name='photoURL' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email Address</label>
                <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Your Password</label>
                <input type="password" name='password' className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
                <Link to='/login'>Have an account?</Link>
            </div>
            
            <div className="mb-3">
                <Link to='/login'>{error}</Link>
            </div>

            <button type="submit" className="btn btn-primary">Sig Up</button>
        </form>
    );
};

export default SignUp;