import React from 'react';
import HorsCnx from '../Images/HorsCnx.png';
import Button from 'react-bootstrap/Button';

function Offline() {
    const offlineContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#f0f0f0',
    };

    const offlineImage = {
        width: '300px',
    };

    const offlineTitle = {
        color: '#333',
        fontSize: '2rem',
        textAlign: 'center',
        marginTop: '1rem',
    };

    const offlineMessage = {
        color: '#666',
        fontSize: '1.2rem',
        textAlign: 'center',
        marginTop: '1rem',
    };

    const retryButton = {
        marginTop: '1rem',
    };

    return (
      <div style={offlineContainer}>
        <img src={HorsCnx} alt="No connection" style={offlineImage} />
        <h3 style={offlineTitle}>Oh non!</h3>
        <p style={offlineMessage}>Pas de connexion</p>
        <Button variant="outline-success" style={retryButton}>Ressayer</Button>
      </div>
    );
}

export default Offline;