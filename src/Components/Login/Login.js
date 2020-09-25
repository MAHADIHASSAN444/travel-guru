import React,{useContext, useState,useEffect} from 'react';
import './Login.css';
import * as firebase from "firebase/app";

import { Button, Form,} from 'react-bootstrap'

import 'firebase/auth';
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation ,} from 'react-router-dom';

const Login = () => {

    const [oldUser, setOldUser] = useState(true)

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        document.title = `Travel Guru-${loggedInUser.name}`
    }, [])

 
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }


     // Update UserInfo In Email & Password Sign Up Method
     const updateUserName = (name) => {
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        }).then(function () {
        }).catch(function (error) {
            const errorMessage = error.message;
            const newUserInfo = { ...loggedInUser }
            newUserInfo.error = errorMessage
            setLoggedInUser(newUserInfo)
        });
    }

    // Handle Blur For Email Sign up & Sign In
    const handleBlur = (event) => {
        let isFieldValid;
        if (event.target.name === 'name') {
            isFieldValid = event.target.value.length > 0;
        }
        if (event.target.name === 'email') {
            isFieldValid = true;
        }
        if (event.target.name === 'password') {
            isFieldValid = event.target.value.length > 6 && /\d{1}/.test(event.target.value);
        }
        if (isFieldValid) {
            const newUserInfo = { ...loggedInUser };
            newUserInfo[event.target.name] = event.target.value;
            setLoggedInUser(newUserInfo)
        }
    }

     // Email Sign Up & Sign In Here
     const handleEmailSignUp = (event) => {
        // For Old User Sign In With Email & Password
        if (oldUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.error = '';
                    newUserInfo.isSuccessful = true;
                    newUserInfo.name = res.user.displayName;
                    setLoggedInUser(newUserInfo)
                    history.replace(from)
                })
                .catch(function (error) {
                    // var errorCode = error.code;
                    const errorMessage = error.message;
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.error = errorMessage
                    setLoggedInUser(newUserInfo)
                });
        }

         // For New User Sign Up With Email & Password
         if (!oldUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then(res => {
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.error = ''
                    newUserInfo.isSuccessful = true;
                    setLoggedInUser(newUserInfo)
                    updateUserName(loggedInUser.name)
                    history.replace(from)
                })
                .catch(error => {
                    const errorMessage = error.message;
                    const newUserInfo = { ...loggedInUser }
                    newUserInfo.error = errorMessage
                    setLoggedInUser(newUserInfo)
                });
        }
        event.preventDefault()
  }

    const handleGoogleSignIn =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            const {displayName,email} = result.user;
            const signnedInUser = { name: displayName, email }
            setLoggedInUser(signnedInUser);
            history.replace(from);

            // console.log( signnedInUser);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    return (

        <div className="loginForm rounded mt-5">
 
            <div className="logInSignUp d-flex flex-column p-1"><Form onSubmit={handleEmailSignUp} style={{ padding: '10px 20px' }}>
                {oldUser ? <p>Login Here</p> : <p>Create An Account</p>}

                {
                  !oldUser &&
                        <div>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control onBlur={handleBlur} type="text" name="name" placeholder="Full Name" required />
                            </Form.Group>
                        </div>
                    }
                     <Form.Group controlId="formBasicEmail">
                        <Form.Control onBlur={handleBlur} type="email" name="email" placeholder="Username or Email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onBlur={handleBlur} type="password" name="password" placeholder="Password" required />
                    </Form.Group>

                    {
                        !oldUser ?
                            <input className="submitBtn btn btn-warning" name="EmailFormSubmit" variant="primary" type="submit" value="Create An Account" required />
                            :
                            <input className="submitBtn btn btn-warning" name="EmailFormSubmit" variant="primary" type="submit" value="Login" required />
                    }

                    <div className="mt-1">
                        <p style={{ display: 'inline', paddingLeft: '25px' }}>{!oldUser ? 'Already Have An Account' : "Don't Have An Account?"}</p>
                        <Button onClick={() => setOldUser(!oldUser)} variant="link">{!oldUser ? 'Login' : 'Sign Up'}</Button>
                    </div>
                 </Form>
            </div>   
            {loggedInUser.error &&
                <div className="mt-1 d-flex justify-content-center flex-row"><p style={{ margin: '0px', color: 'red' }}>{loggedInUser.error}</p></div>
            }

             <div className="mt-1 d-flex justify-content-center flex-row">
                <p style={{ margin: '0px' }}>OR</p>
            </div>  

            <div className="">
                <button className="btn btn-outline-primary col-md-12">Continue with Facebook</button>
                <br />
                <br />
                <button className="btn btn-outline-success col-md-12" onClick={handleGoogleSignIn}>Continue with Google</button>
            </div>
  
        </div>
    );
};

export default Login;
