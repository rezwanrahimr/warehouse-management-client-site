import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase';

const SignUp = () => {
    const navigate = useNavigate();
    // Email and Password Authentication Start !.
    const [createUserWithEmailAndPassword, user, loading, error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    if (error) {
        alert(error.message);
      }
      else if (loading) {
        return <p>Loading...</p>
      }
      else if (user) {
        navigate("/home");
      }
    const handleSignUpForm = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        console.log(email, password,confirmPassword);
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <div>
                <div className='container mt-5 pt-5'>
                    <div className='row'>
                        <div className='col-12 col-sm-8 col-md-6 m-auto'>
                            <h3>Please Login: </h3>
                            <div className='card border-0 shadow'>

                                <div className='card-body'>

                                    <FontAwesomeIcon className='mx-auto' icon={faUser} />
                                    <form onSubmit={handleSignUpForm}>

                                        <input type="email" name="email" id="email" className='form-control my-4 py-2' placeholder='username' />
                                        <input type="password" name="password" id="password" className='form-control my-4 py-2' placeholder='password' />
                                        <input type="password" name="confirmPassword" id="confirmPassword" className='form-control my-4 py-2' placeholder='confirmPassword' />
                                        <div className='text-center mt-3'>
                                            <button type='submit' className='btn btn-primary'>SignUp</button>
                                            <p onClick={() => navigate("/login")}>Alredy have a account ?</p>
                                        </div>
                                    </form>
                                    {/* <button onClick={}><small> Continue with Google </small></button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;