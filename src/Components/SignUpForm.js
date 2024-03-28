import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google.png";

function SignUpForm({ initialValues, onChange }) {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    console.log("connecting...");
    signInWithPopup(auth, provider).then((result) =>{
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      console.log(error);
    });
    //alert("Please try again.");
   };
  

  const signOut = () => {
    auth.signOut();
  };

  return (
    <button className="sign-in">
    <img src={GoogleSignin} alt="sign in with google" type="button" onClick={googleSignIn} style={{ width:'30px'}}/> {/* Added missing semicolon here */}
  </button>
  );
}

export default SignUpForm;
