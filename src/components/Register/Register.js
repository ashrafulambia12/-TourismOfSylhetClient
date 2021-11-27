import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';



const Register = () => {
    const { handelGoogleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory()
    let redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {

        handelGoogleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })


    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const auth = getAuth();
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value);

    }
    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password)
        if (password.length < 6) {
            setError('password Must be at least 6 characters long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must Contain 2 Upper case')
            return;
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password);
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUserName = () => {
        updateProfile(auth.currentUser)
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser, { displayName: name })
            .then(result => {
                console.log(result)
            })
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

    return (
        <div className='fromMain mt-5'>
            <form onSubmit={handleRegistration} className='fromBody'>
                <h3 className='text-primary ms-3 mb-3 ps-3'>Please {isLogin ? 'Login' : 'Register'}</h3>
                {isLogin && <div>
                    <Button className='mt-3 mb-3' onClick={handleGoogleLogin}> Google Sign In</Button> <h3 className='text-primary'> Or</h3></div>}
                {!isLogin && <div className="row mb-3">

                    <label htmlFor="inputName" className="col-sm-2 col-form-label"> Name</label>
                    <div className="col-sm-10">
                        <input type="text" onBlur={handleNameChange} className="form-control ms-4" id="inputAddress" placeholder="Your Name" />
                    </div>
                </div>}
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label ">   Email</label>
                    <div className="col-sm-10">
                        <input type="email" onBlur={handleEmailChange} className="form-control ms-4" id="inputEmail3" placeholder="Your Email" required
                        />

                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">    Password    </label>
                    <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" className="form-control ms-4" id="inputPassword3" placeholder="Your Password" required />
                    </div>
                    <div className='m-0 '>

                        <div className="row mb-3 mt-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                                    <label className="form-check-label" htmlFor="gridCheck1">

                                        Already Registered ?
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row mb-3 text-danger">{error}</div>


                <button type="submit" value='Register' className="btn btn-primary"> {isLogin ? 'Login' : 'Register'}</button>
                <button onClick={handleResetPassword} type="button" className="btn btn-secondary btn-sm ms-3">Reset Password</button>

            </form>

            <Link className='mt-3' to="/login"> Already regiserred</Link>
        </div>
    );
};

export default Register;