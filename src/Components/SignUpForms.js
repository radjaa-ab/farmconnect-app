import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignUpForm from './SignInForm';
import '../Styles/All.css';
import 'bootstrap/dist/css/bootstrap.css';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import GoogleSignin from "../img/google-removebg-preview.png";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SignUpForms({ initialValues, onChange }) {
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
  const [showSignUp, setShowSignUp] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phoneNumber: '',
    profession: '',
    proof: null,
  });

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  const handleSignUpSubmit = (user) => {
    console.log('User signed up with data:', user);
    // Add validation here:
    // - Check if name is not empty
    // - Check if phone number is valid format (consider using a library)
    // - Check if profession is selected (commerçant, consommateur, ingenieur agriculteur, agriculteur)
    // - If profession requires proof (commerçant, ingenieur agriculteur, agriculteur), check if proof is uploaded
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setUserDetails({
      ...userDetails,
      [name]: value || files?.[0],
    });
  };

  return (
    <div>
      <h1>Commencez maintenant</h1>
      {showSignUp ? (
        <SignUpForm
          initialValues={userDetails}
          onSubmit={handleSignUpSubmit}
          onChange={handleChange}
        />
      ) : (
        <>
        <Form>
          <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Entrer votre nom" name="name" onChange={handleChange} className="custom-input" /> {/* Added custom class name */}
          </Form.Group>

          <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicPhone">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control type="tel" placeholder="Entrer le numéro de téléphone" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} className="custom-input" /> {/* Added custom class name */}
          </Form.Group>

          <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProfession">
            <Form.Label>Profession</Form.Label>
            <Form.Select name="profession" value={userDetails.profession} onChange={handleChange} className="custom-input"> {/* Added custom class name */}
              <option value="">Sélectionnez une profession</option>
              <option value="commerçant">Commerçant</option>
              <option value="consommateur">Consommateur</option>
              <option value="ingenieur_agriculteur">Ingénieur Agricole</option>
              <option value="agriculteur">Agriculteur</option>
            </Form.Select>
          </Form.Group>

          {userDetails.profession === 'commerçant' ||
            userDetails.profession === 'ingenieur_agriculteur' ||
            userDetails.profession === 'agriculteur' ? (
            <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProof">
              <Form.Label>Justificatif (facultatif pour consommateur)</Form.Label>
              <Form.Control type="file" name="proof" onChange={handleChange} className="custom-input" /> {/* Added custom class name */}
            </Form.Group>
          ) : null}

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirmer" />

          </Form.Group>
          <Form.Text className="text-muted">
            Déjà un compte ?
          </Form.Text>
          <Button  variant="success" onClick={handleSignUp} style={{ marginLeft: '100px' }}>
            Se connecter
          </Button>
        </Form>
        <Row style={{ marginTop: '10px'}}>
      <Col>
        <p>Or Sign in with Google</p>
      </Col>
      <Col>
      <button className="sign-in" style={{ backgroundColor: 'transparent', border: 'none' }}>
          <img src={GoogleSignin} alt="sign in with google" type="button" onClick={googleSignIn} style={{ width:'30px', marginRight: '100px'}}/>
        </button>
      </Col>
    </Row>
</>
      )}
    </div>
  );
}

export default SignUpForms;
