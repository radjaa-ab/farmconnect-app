import React from 'react';
import HorsCnx from '../Images/HorsCnx.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Offline() {
    return (
        <div>
            <img src={HorsCnx}/>
            <h3>Oh non!</h3>
            <p>Pas de connexion</p>
            <Button variant="outline-success">Ressayer</Button>{' '}
        </div>
    );
}

export default Offline;