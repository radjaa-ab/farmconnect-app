import React from 'react';
import { Form } from 'react-bootstrap';
import { FormControl, FormLabel, Button } from 'react-bootstrap';

const Avatar = ({ imageSource, onChange }) => {
  return (
    <div>
      <img src={imageSource} alt="Avatar" />
      <input type="file" accept="image/*" onChange={onChange} />
    </div>
  );
};

const FileInput = ({ onChange }) => {
  return (
    <div>
      <input type="file" accept=".pdf" onChange={onChange} />
    </div>
  );
};
const InfoPersonnelles = ({ imageSource, onImageChange, onFileChange }) => {
  return (
    <div>
      <h2>Informations Personnelles</h2>
      <Form>
        <Form.Group>
          <Avatar imageSource={imageSource} onChange={onImageChange} />
        </Form.Group>
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
        <Form.Group>
          <FileInput onChange={onFileChange} />
        </Form.Group>
        <Button type="submit">Enregistrer</Button>
      </Form>
    </div>
  );
};

export default InfoPersonnelles;