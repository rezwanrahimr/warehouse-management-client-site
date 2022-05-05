import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from '../../firebase';
import React, { useState } from 'react';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { Button, Toast } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Loading from '../Loading/Loading';



const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    // Email and Password Authentication Start.
    const [signInWithEmailAndPassword, user, loading, error,
    ] = useSignInWithEmailAndPassword(auth);
    if (error) {
        Toast(error.message);
    }
    else if (loading) {
        return <Loading></Loading>
    }
    else if (user) {
        navigate("/home");
    }
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
                navigate("/home")
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                if (errorCode) {
                    Toast(errorCode.message);
                }
                if (errorMessage) {
                    Toast(errorMessage);
                }
                if (email) {
                    Toast(email.message);
                }

            })

    }
    // Google Account Authentication End !.
    // Reset Password Start.
    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent!');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (error) {
                    alert(error);
                }
                else if (errorCode) {
                    alert(errorCode);
                }
                else if (errorMessage) {
                    alert(errorMessage);
                }
            })

    }
    // Reset Password End !.
    return (
        <div>
            <div className='container mt-5 pt-5'>
                <div className='row'>
                    <div className='col-12 col-sm-8 col-md-6 m-auto'>
                        <h3>Please Login: </h3>
                        <div className='card border-0 shadow'>

                            <div className='card-body'>

                                <FontAwesomeIcon className='mx-auto' icon={faUser} />
                                <form onSubmit={handleLoginForm}>

                                    <input onBlur={handleEmailBlur} type="email" name="email" id="email" className='form-control my-4 py-2' placeholder='username' />
                                    <input type="password" name="password" id="password" className='form-control my-4 py-2' placeholder='password' />
                                    <div className='text-center mt-3'>
                                        <button type='submit' className='btn btn-primary mb-3'>Login</button>
                                        <p>
                                            <Button onClick={handlePasswordReset} variant="danger">Reset Password</Button>{' '}
                                        </p>
                                        <p onClick={() => navigate("/signup")}>Create New Account ?</p>
                                    </div>
                                </form>
                                <Button variant="outline-dark" onClick={googleAuth}><FontAwesomeIcon className='me-2' icon={faGoogle} />Continue with Google</Button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;