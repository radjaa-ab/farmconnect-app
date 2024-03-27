import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function SignUpForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree to terms and conditions" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
}

export default SignUpForm;
