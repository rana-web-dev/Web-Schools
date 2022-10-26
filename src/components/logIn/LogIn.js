import React from 'react';
import { Link } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../firebase/Firebase';

const auth = getAuth(app);

const LogIn = () => {

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Form Handler
    const loginHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset();

        // You can't hold empty field
        if (email === '' && password === '') {
            alert('You have to type email and password')
        }


    }

    // SignIn with Google
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error('Error:', error);
            console.error('Error:', error.message);
        })
    }

    // SignIn with Github
    const githubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.error('Error:', error);
            console.error('Error:', error.message);
        })
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
            <div className='mt-3 w-25 mx-auto'>
                <p className='mb-0'>More SignIn options:</p>
                <img onClick={googleSignIn}  src='https://i.pinimg.com/originals/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.png' width={50} alt='login with google'></img>
                <img onClick={githubSignIn} src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width={40} alt='log in with github'></img>
            </div>
        </form>
    );
};

export default LogIn;