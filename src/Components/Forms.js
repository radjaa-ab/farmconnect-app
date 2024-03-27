import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import SignUpForm from './SignUpForm';
import React, { useState } from 'react';


function Forms() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userDetails, setUserDetails] = useState({}); // Store user information

  const handleSignUp = () => {
    setShowSignUp(true);
  };

  const handleSignUpSubmit = (user) => {
    // Handle sign-up submission logic here, such as:
    // - Sending data to a server
    // - Redirecting to a different page
    // - Displaying a success message

    // Example:
    console.log('User signed up with data:', user);
    setShowSignUp(false);
  };

  const handleChange = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={handleSignUp}>
        Sign Up
      </Button>
    </Form>
    )}
  </div>
  );
}

export default Forms;