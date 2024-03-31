import React from 'react';
import { Form, Button } from 'react-bootstrap';


const InfoPersonnelles = () => {
  return (
    <div>
      <h2>Informations Personnelles</h2>
      <Form>
        <Form.Group>
          <Form.Label htmlFor="nom">Nom :</Form.Label>
          <Form.Control type="text" id="nom" name="nom" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="prenom">Prénom :</Form.Label>
          <Form.Control type="text" id="prenom" name="prenom" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="email">Email :</Form.Label>
          <Form.Control type="email" id="email" name="email" />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="telephone">Téléphone :</Form.Label>
          <Form.Control type="tel" id="telephone" name="telephone" />
        </Form.Group>
        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
};

export default InfoPersonnelles;