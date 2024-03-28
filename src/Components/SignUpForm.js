import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUpForm({ initialValues, onChange }) {
  return (
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
  );
}

export default SignUpForm;
