import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase';
import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate()
    // Email and Password Authentication Start.
    const [signInWithEmailAndPassword, user, loading, error,
    ] = useSignInWithEmailAndPassword(auth);
    console.log(user);
    const handleLoginForm = (event) => {
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    //Email and Password Authentication End !.

    // Google Account Authentication Start.
    const provider = new GoogleAuthProvider();
    const googleAuth = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log(user);
                navigate("/home")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);

            })
    }
    // Google Account Authentication End !.
    return (
        <div>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-12 col-sm-8 col-md-6 m-auto'>
                        <h3>Please Login: </h3>
                        <div className='card border-0 shadow'>

                            <div className='card-body'>

                                <FontAwesomeIcon className='mx-auto' icon={faUser} />
                                <form action="" onSubmit={handleLoginForm}>

                                    <input type="email" name="email" id="email" className='form-control my-4 py-2' placeholder='username' />
                                    <input type="password" name="password" id="password" className='form-control my-4 py-2' placeholder='password' />
                                    <div className='text-center mt-3'>
                                        <button type='submit' className='btn btn-primary'>Login</button>
                                        <p onClick={() => navigate("/signup")}>Create New Account ?</p>
                                    </div>
                                </form>
                                <button onClick={googleAuth}><small> Continue with Google </small></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;