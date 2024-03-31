import React from 'react';
import { Form, Button } from 'react-bootstrap';

const InfoPersonnelles = () => {
  return (
    <div>
      <h2>Informations Personnelles</h2>
      <Form>
        <Form.Group controlId="avatar">
          <Form.Label>Avatar :</Form.Label>
          <Form.File id="avatar" label="Choisir un fichier" custom />
        </Form.Group>
        <Form.Group controlId="certificat">
          <Form.Label>Certificat :</Form.Label>
          <Form.File id="certificat" label="Choisir un fichier" custom />
        </Form.Group>
        <Form.Group controlId="nom">
          <Form.Label>Nom :</Form.Label>
          <Form.Control type="text" placeholder="Entrez votre nom" />
        </Form.Group>
        <Form.Group controlId="prenom">
          <Form.Label>Prénom :</Form.Label>
          <Form.Control type="text" placeholder="Entrez votre prénom" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email :</Form.Label>
          <Form.Control type="email" placeholder="Entrez votre email" />
        </Form.Group>
        <Form.Group controlId="telephone">
          <Form.Label>Téléphone :</Form.Label>
          <Form.Control type="tel" placeholder="Entrez votre numéro de téléphone" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Modifier
        </Button>
      </Form>
    </div>
  );
};

export default InfoPersonnelles;
