import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SignUpForm from './SignUpForm';
import React, { useState } from 'react';

function Forms() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '', // Added name field
    phoneNumber: '',
    profession: '',
    proof: null, // Store uploaded proof (file)
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
      [name]: value || files?.[0], // Handle both input values and file uploads
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
        <Form>
          <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicName">
            <Form.Label>Nom</Form.Label>
            <Form.Control type="text" placeholder="Entrer votre nom" name="name" onChange={handleChange} />
          </Form.Group>
  
          <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicPhone">
            <Form.Label>Numéro de téléphone</Form.Label>
            <Form.Control type="tel" placeholder="Entrer le numéro de téléphone" name="phoneNumber" value={userDetails.phoneNumber} onChange={handleChange} />
          </Form.Group>
  
          <Form.Group className="mb-3 hide-placeholder-on-focus" controlId="formBasicProfession">
            <Form.Label>Profession</Form.Label>
            <Form.Select name="profession" value={userDetails.profession} onChange={handleChange}>
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
              <Form.Control type="file" name="proof" onChange={handleChange} />
            </Form.Group>
          ) : null}
  
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirmer" />
          </Form.Group>
          <Form.Text className="text-muted">
            Déjà un compte ?
          </Form.Text>
          <Button variant="primary" onClick={handleSignUp}>
            Se connecter
          </Button>
        </Form>
      )}
    </div>
  );
  
}

export default Forms;
