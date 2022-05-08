import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Button } from "react-bootstrap";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import Loading from "../Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Sign-Up Page.
const SignUp = () => {
  const navigate = useNavigate();
  // Email and Password Authentication Start !.
  const [createUserWithEmailAndPassword, user, loading, error] =
  // Send Email Verification.
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  if (error) {
    toast(error.message);
  } else if (loading) {
    return <Loading></Loading>;
  } else if (user) {
    navigate("/home");
  }
  const handleSignUpForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    console.log(email, password, confirmPassword);
    createUserWithEmailAndPassword(email, password);
  };
  // Email and Password Authentication Start !.

  // Google Account Authentication Start.
  const provider = new GoogleAuthProvider();
  const googleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        if (errorCode) {
          toast(errorCode.message);
        }
        if (errorMessage) {
          toast(errorMessage);
        }
        if (email) {
          toast(email.message);
        }
      });
  };
  // Google Account Authentication End !.
  return (
    <div>
      <div>
        <div className="container mt-5 pt-5 mb-5">
          <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
              <h3>Please SignUp : </h3>
              <div className="card border-0 shadow">
                <div className="card-body">
                  <FontAwesomeIcon className="mx-auto" icon={faUser} />
                  <form onSubmit={handleSignUpForm}>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control my-4 py-2"
                      placeholder="username"
                    />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control my-4 py-2"
                      placeholder="password"
                    />
                    <input
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className="form-control my-4 py-2"
                      placeholder="confirmPassword"
                    />
                    <div className="text-center mt-3">
                      <button type="submit" className="btn btn-primary">
                        SignUp
                      </button>
                      <p onClick={() => navigate("/login")}>
                        Alredy have a account ?
                      </p>
                    </div>
                  </form>
                  <Button variant="outline-dark" onClick={googleAuth}>
                    <FontAwesomeIcon className="me-2" icon={faGoogle} />
                    Continue with Google
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
