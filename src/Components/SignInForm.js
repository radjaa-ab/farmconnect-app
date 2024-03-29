import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google-removebg-preview.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function SignInForm({ initialValues, onChange }) {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    console.log("connecting...");
    signInWithPopup(auth, provider).then(() =>{
      alert("connected");
    }).catch((error) => {
      console.log(error);
    });
   };
  

  const signOut = () => {
    auth.signOut();
  };

  return (
    <>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Entrer votre nom" name="name" value={initialValues.name} onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Numéro de téléphone</Form.Label>
        <Form.Control type="tel" placeholder="Entrer le numéro de téléphone" name="phoneNumber" value={initialValues.phoneNumber} onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Mot de passe" name="password" value={initialValues.password} onChange={onChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accepter les termes et conditions" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Se connecter
      </Button>
    </Form>
    <Row style={{ marginTop: '10px'}}>
      <Col>
        <p>Or Sign in with Google</p>
      </Col>
      <Col>
      <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
          <img src={GoogleSignin} alt="sign in with google" type="button" onClick={googleSignIn} style={{ width:'30px'}}/>
        </button>
      </Col>
    </Row>

    </>
  );
}

export default SignInForm;
